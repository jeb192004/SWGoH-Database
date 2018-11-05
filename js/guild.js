$(document).ready(function() {

      // Initialize the plugin
      $('#my_popup').popup();

    });
	

	var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
var firebase = firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
    var  db = firebase.firestore();



	//get_allycodes();
	function get_allycodes(){
	
	

var docRef = db.collection("Guild").doc("Relentless").collection("AllyCodes").doc("allycodes");

docRef.get().then(function(doc) {
    if (doc.exists) {
        var allycodes = doc.data().ALLYCODES;
         get_save_toon_data(allycodes);

    } else {
        // doc.data() will be undefined in this case
        alert("No such document!");
    }
}).catch(function(error) {
    alert("Error getting document: " + error);
});
	
	}
	
	function get_save_toon_data(allycodes){
		
		var arrayLength = allycodes.length;
		 for (var i = 0; i < arrayLength; i++) { 
		
		
$.get("https://crinolo-swgoh.glitch.me/statCalc/api/characters/player/" + allycodes[i] +"/?flags=withModCalc,gameStyle",function(data, status){
	
	//alert(allycodes.indexOf(allycodes[i]));
			$.each(data, function(key, value) {
					
					var unit = data[key].unit;
					
				  var	player = unit.player;
					var starLevel = unit.starLevel;
					var power = unit.gp;
					var level = unit.level;
					var gearLevel = unit.gearLevel;
					var zeta = unit.zetas;
					//alert(key + ": "+JSON.stringify(unit));
				
					var stats = data[key].stats.final;
					var strength = stats["Strength"];
					var agility = stats["Agility"];
					var intelligence = stats["Intelligence"];
					var speed = stats["Speed"];
					var health = stats["Health"];
					var physicalDamage = stats["Physical Damage"];
					var potency = stats["Potency"];
					var healthSteal = stats["Health Steal"];
					var armor = stats["Armor"];
					var resistancePenetration = stats["Resistance Penetration"];
					var protection = stats["Protection"];
					var specialDamage = stats["Special Damage"];
					var resistance = stats["Resistance"];
					var physicalCritChance = stats["Physical Critical Chance"];
					var tenacity = stats["Tenacity"];
					var criticalDamage = stats["Critical Damage"];
					var specialCritChance = stats["Special Crit Chance"];
					var armorPen = stats["Armor Penetration"];
				
					//alert(player + " " + key+ " " +starLevel+ " " +power+ " " +level + " " +gearLevel + " " +zeta+ " " + strength+ " " + agility + " " +intelligence+ " " + speed + " " +
					//health + " " + physicalDamage + " " + potency + " " + healthSteal + " " + armor + " " +resistancePenetration + " " +protection + " " +specialDamage + " " + 
					//resistance + " " +physicalCritChance + " " +tenacity + " " +criticalDamage + " " +specialCritChance + " " +armorPen	);
				
					save_toon_data(player, key, starLevel, power, level,gearLevel,zeta, strength,agility, intelligence,speed, health,
					 physicalDamage, potency,healthSteal,armor, resistancePenetration, protection, specialDamage, resistance,
					 physicalCritChance, tenacity,criticalDamage, specialCritChance, armorPen	);
					
	});
     // alert("Data: " + JSON.stringify(data.REY) + status);
			//save_toon_data(allyCodes);
    });

}
}

function save_toon_data(player, key, starLevel, power, level,gearLevel,zeta, strength,agility, intelligence,speed, health,
					 physicalDamage, potency,healthSteal,armor, resistancePenetration, protection, specialDamage, resistance,
					 physicalCritChance, tenacity,criticalDamage, specialCritChance, armorPen	){
						
						if(strength){}else{strength = 0;}
							if(agility){}else{agility = 0;}
							if(intelligence){}else{intelligence = 0;}
							if(speed){}else{speed = 0;}
								if(health){speed = 0;}
					 if(physicalDamage){}else{physicalDamage = 0;}
					if(potency){}else{potency = 0;}
					if(healthSteal){}else{healthSteal = 0;}
					if(armor){}else{armor = 0;}
					if(resistancePenetration){}else{resistancePenetration = 0;}
					if(protection){}else{protection = 0;}
					if(specialDamage){}else{specialDamage = 0;}
					if(resistance){}else{resistance =0;}
					 if(physicalCritChance){}else{physicalCritChance =0;}
					if(tenacity){}else{tenacity = 0;}
					if(criticalDamage){}else{criticalDamage = 0;}
						if(specialCritChance){}else{specialCritChance = 0;}
							if(armorPen){}else{armorPen = 0;}
						
db.collection("Guild").doc("Relentless").collection("Members").doc(player).collection("Toons").doc(key).set({
	
					STARLEVEL:starLevel,
					POWER:power,
					LEVEL:level,
					GEARLEVEL:gearLevel,
					ZETA: zeta,
			
					STRENGTH:strength,
					AGILITY:agility,
					INTELLIGENCE:intelligence,
					SPEED:speed,
					HEALTH:health,
					PHYSICALDAMAGE:physicalDamage,
					POTENCY:potency,
					HEALTHSTEAL:healthSteal,
					ARMOR:armor,
					RESISTANCEPENETRATION:resistancePenetration,
					PROTECTION:protection,
					SPECIALDAMAGE:specialDamage,
				  RESISTANCE:resistance,
					PHYSICALCRITCHANCE:physicalCritChance,
					TENACITY:tenacity,
					CRITICALDAMAGE:criticalDamage,
					SPECIALCRITCHANCE:specialCritChance,
				  ARMORPEN:	armorPen

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
//	alert(player +": "+ key +": "+ "upload finished");
//}).catch(function(error) {
  //  console.error("Error adding document: ", error);
	   //alert(error);
});

}
	
	
	
	
	//get_save_allycodes();
	
	function get_save_allycodes(){
$.get("https://api.swgoh.help/guild/676714695",function(data, status){
	data.forEach(function (item){
					 var roster = item.roster;
					roster.forEach(function (roster){
						//alert(JSON.stringify(roster.allyCode));
						allyCodes.push(roster.allyCode);
						});
	});
      //  alert("Data: " + JSON.stringify(data) + status);
			save_allycodes(allyCodes);
    });
}

function save_allycodes(allycodes){
db.collection("Guild").doc("Relentless").collection("AllyCodes").doc("allycodes").set({
	ALLYCODES:allycodes

})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	alert(docRef.id +" "+ "upload finished");
}).catch(function(error) {
    console.error("Error adding document: ", error);
	   alert(error);
});
}
	
var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
	'side':"right"
  });
function menu(){
	slideout.toggle();
	}




