var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var toonImgRef = dbRef.child('new_toons');
var namesArray = [];
var toonName01;

var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
  firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
db.collection("Toons").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        //alert(`${doc.id}`);
		var toon1 = `${doc.id}`;
				namesArray.push(toon1);
    });
});	


				
  
var toonName = document.getElementById('toon_name');
var toonImgUrl = document.getElementById('toon_img_url');
var toonInfo = document.getElementById('toon_info');
var toonTraits = document.getElementById('toon_traits');
var power = document.getElementById('power');
var speed = document.getElementById('speed');
var health = document.getElementById('health');

var abilName1 = document.getElementById('abil1name');
var abilTxt1 = document.getElementById('abil1txt');
var abilLvl1 = document.getElementById('abil1lvl');
var abildamage = document.getElementById('abil1damage');
var abilimage = document.getElementById('abil1image');
var abilzeta = document.getElementById('abil1zeta');

var sp1name = document.getElementById('sp1name');
var sp1txt = document.getElementById('sp1txt');
var sp1lvl = document.getElementById('sp1lvl');
var sp1damage = document.getElementById('sp1damage');
var sp1image = document.getElementById('sp1image');
var sp1lzeta = document.getElementById('sp1zeta');
var sp1cd = document.getElementById('sp1cd');

var sp2name = document.getElementById('sp2name');
var sp2txt = document.getElementById('sp2txt');
var sp2lvl = document.getElementById('sp2lvl');
var sp2damage = document.getElementById('sp2damage');
var sp2image = document.getElementById('sp2image');
var sp2lzeta = document.getElementById('sp2zeta');
var sp2cd = document.getElementById('sp2cd');


var sp3name = document.getElementById('sp3name');
var sp3txt = document.getElementById('sp3txt');
var sp3lvl = document.getElementById('sp3lvl');
var sp3damage = document.getElementById('sp2damage');
var sp3image = document.getElementById('sp3image');
var sp3lzeta = document.getElementById('sp3zeta');
var sp3cd = document.getElementById('sp3cd');

var leadName1 = document.getElementById('leadname');
var leadTxt1 = document.getElementById('leadtxt');
var leadLvl1 = document.getElementById('leadlvl');
var leadimage = document.getElementById('leadimage');
var leadzeta = document.getElementById('leadzeta');

var u1Name1 = document.getElementById('u1name');
var u1Txt1 = document.getElementById('u1txt');
var u1Lvl1 = document.getElementById('u1lvl');
var u1image = document.getElementById('u1image');
var u1zeta = document.getElementById('u1zeta');

var u2Name1 = document.getElementById('u2name');
var u2Txt1 = document.getElementById('u2txt');
var u2Lvl1 = document.getElementById('u2lvl');
var u2image = document.getElementById('u2image');
var u2zeta = document.getElementById('u2zeta');



var shipments = document.getElementById('Shipments');
	var lSBattles = document.getElementById('Light Side Battles');
	var dSBattles = document.getElementById('Dark Side Battles');
	var cantinaBattles = document.getElementById('Cantina Battles');
	
	var galacticWarStore = document.getElementById('Galactic War Store');
	var cantinaBattlesStore = document.getElementById('Cantina Battles Store');
	var squadArenaStore = document.getElementById('Squad Arena Store');
	var fleetArenaStore = document.getElementById('Fleet Arena Store');
	var guildStore = document.getElementById('Guild Store');
	
	var guildEventsStore = document.getElementById('Guild Events Store');
	var shardStore = document.getElementById('Shard Store');
	
	
	
	



function add(){

db.collection("Toons").doc(toonName.value).collection("Abilities").doc("Abilities").set({
	head: toonImgUrl.value,
	
    power: power.value,
speed: speed.value,
health: health.value,

abilName1: abilName1.value,
abilTxt1: abilTxt1.value,
abilLvl1: abilLvl1.value,
abildamage: abildamage.value,
abilimage: abilimage.value,
abilzeta: abilzeta.value,

sp1name: sp1name.value,
sp1txt: sp1txt.value,
sp1lvl: sp1lvl.value,
sp1damage: sp1damage.value,
sp1image: sp1image.value,
sp1lzeta: sp1lzeta.value,
sp1cd: sp1cd.value,

sp2name: sp2name.value,
sp2txt: sp2txt.value,
sp2lvl: sp2lvl.value,
sp2damage: sp2damage.value,
sp2image: sp2image.value,
sp2lzeta: sp2lzeta.value,
sp2cd: sp2cd.value,


sp3name: sp3name.value,
sp3txt: sp3txt.value,
sp3lvl: sp3lvl.value,
sp3damage: sp3damage.value,
sp3image: sp3image.value,
sp3lzeta: sp3lzeta.value,
sp3cd: sp3cd.value,

leadName1: leadName1.value,
leadTxt1: leadTxt1.value,
leadLvl1: leadLvl1.value,
leadimage: leadimage.value,
leadzeta: leadzeta.value,

u1Name1: u1Name1.value,
u1Txt1: u1Txt1.value,
u1Lvl1: u1Lvl1.value,
 u1image: u1image.value,
 u1AbilLvl: u1zeta.value,

 u2name: u2Name1.value,
 u2txt: u2Txt1.value,
 U2lvl: u2Lvl1.value,
 U2image: u2image.value,
 U2AbilLvl: u2zeta.value


})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	//alert(docRef.id +" "+ "upload finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
	//alert(error);
});

db.collection("Toons").doc(toonName.value).set({
	
    Name: toonName.value,
    Image: toonImgUrl.value,
    
	Info:toonInfo.value,
	Traits:toonTraits.value,
	
	Shipments:shipments.checked,
	LSBattles:lSBattles.checked,
	DSBattles:dSBattles.checked,
	CantinaBattles:cantinaBattles.checked,
	GalacticWarStore:galacticWarStore.checked,
	
	CantinaBattlesStore:cantinaBattlesStore.checked,
	SquadArenaStore:squadArenaStore.checked,
	FleetArenStore:fleetArenaStore.checked,
	GuildStore:guildStore.checked,
	
	GuildEventsStore:guildEventsStore.checked,
	ShardStore:shardStore.checked,
	
	
	
	/*
	BasicOrb:basicOrb.checked,
	PremiumOrb:premiumOrb.checked,
	UltimusOrb:ultimusOrb.checked,
	InfinityOrb:infinityOrb.checked,
	
	WarriorKingOrb:warriorKingOrb1.checked,
	WidowsBiteOrb:widowBiteOrb.checked,
	ImmortalProtectorOrb:immortalProtectorOrb.checked,
	WarriorKingBlitz:warriorKingBlitz1.checked,
	WidowsBiteBlitz:widowBiteBlitz.checked
		*/
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	//alert(docRef.id +" "+ "upload finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
	//alert(error);
});
document.getElementById("myform").reset();
toonName.value = toonName01;
}


function get(){
	getAbilInfo();
var docRef = db.collection("Toons").doc(toonName.value);

	var currentCharacter = namesArray.indexOf(toonName.value);

toonName01 = namesArray[currentCharacter+1];
docRef.get().then(function(doc) {
     if (doc.exists) {
        console.log("Document data:", doc.data());
		//toonImgUrl.value = doc.data().Image;
		//toonInfo.value = doc.data().Info;
		//toonTraits.value = doc.data().Traits;
		
		
		shipments.checked = doc.data().Shipments;
		lSBattles.checked = doc.data().LSBattles;
		dSBattles.checked = doc.data().DSBattles;
	cantinaBattles.checked = doc.data().CantinaBattles;
	galacticWarStore.checked = doc.data().GalacticWarStore;
	
	cantinaBattlesStore.checked = doc.data().CantinaBattlesStore;
	squadArenaStore.checked = doc.data().SquadArenaStore;
	fleetArenaStore.checked = doc.data().FleetArenaStore;
	guildStore.checked = doc.data().GuildStore;
	
	guildEventsStore.checked = doc.data().GuildEventsStore;
	shardStore.checked = doc.data().ShardStore;
	
	
	
	
	/*
	basicOrb.checked = doc.data().BasicOrb;
	premiumOrb.checked = doc.data().PremiumOrb;
	 ultimusOrb.checked = doc.data().UltimusOrb;
	infinityOrb.checked = doc.data().InfinityOrb;
	
	warriorKingOrb1.checked = doc.data().WarriorKingOrb;
	widowBiteOrb.checked = doc.data().WidowsBiteOrb;
	immortalProtectorOrb.checked = doc.data().ImmortalProtectorOrb;
	warriorKingBlitz1.checked = doc.data().WarriorKingBlitz;
	widowBiteBlitz.checked = doc.data().WidowsBiteBlitz;
		*/
    } else {
        // doc.data() will be undefined in this case
        alert("No such document!");
		
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
	alert(error);
});
	/*			
db.collection("Toons").doc(toonName.value).collection("Abilities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {;

     

	abilName1.value = doc.data().abilName1_7;
    abilTxt1.value = doc.data().abilTxt1_7;
    abilLvl1.value = doc.data().abilLvl1_7;
	
	abilName2.value = doc.data().abilName2_7;
    abilTxt2.value = doc.data().abilTxt2_7;
    abilLvl2.value = doc.data().abilLvl2_7;
	
	abilName3.value = doc.data().abilName3_7;
    abilTxt3.value = doc.data().abilTxt3_7;
    abilLvl3.value = doc.data().abilLvl3_7;
	
	abilName4.value = doc.data().abilName4_5;
    abilTxt4.value = doc.data().abilTxt4_5;
    abilLvl4.value = doc.data().abilLvl4_5;
	if(doc.data().factionAbilAll){
	factionAbilAllTxt.value = doc.data().factionAbilAll;
	}if(doc.data().factionAbil1){
	factionAbil1Txt.value = doc.data().factionAbil1;
	}if(doc.data().factionAbil2){
	factionAbil2Txt.value = doc.data().factionAbil2;
	}
        };});*/
	
}



function getAbilInfo(){
	
	var toonRef = dbRef.child("new_toons").child('All Toons').child(toonName.value);
toonRef.once("value", function(snap) {
  console.log("added", snap.key(), snap.val());
  var toons1 = snap.val();
  //description-power-speed-health
  toonImgUrl.value = toons1.photoUrl;
  toonTraits.value = toons1.catagory;
  
	});
	
	
	var contactsRef = dbRef.child('toon_details').child(toonName.value);

contactsRef.once("value", function(snap) {
  console.log("added", snap.key(), snap.val());

  var toons = snap.val();
  //description-power-speed-health
  toonInfo.value = toons.toon_description;
  power.value = toons.power;
  speed.value = toons.speed;
  health.value = toons.health;
  //basic ability
  abilLvl1.value = toons.basic_level;
  abilName1.value = toons.basic_name;
  if (toons.basic_url === undefined) {
	}else{
  abilimage.value = toons.basic_url;}
  abilTxt1.value = toons.basic_description;
  abildamage.value = toons.basic_damage;
  abilzeta.value = toons.basic_ability_image;
  //special 1 ability
  
  sp1lvl.value = toons.special_level;
  sp1name.value = toons.special_name;
  if (toons.basic_url === undefined) {
	}else{
  sp1image.value = toons.special_url;}
  sp1txt.value = toons.special_description;
  if (toons.special_damage === undefined) {
	  sp1damage.value = "";}
	  else{sp1damage.value = toons.special_damage;}
  if (toons.cooldown_special === undefined) {
	  sp1cd.value = "";}
	  else{sp1cd.value = toons.cooldown_special;}
  sp1lzeta.value = toons.special1_ability_image;
  //special 2 ability
    if (toons.special_level_2 === undefined) {
	  sp2lvl.value = "";}
	  else{sp2lvl.value = toons.special_level_2;}
      if (toons.special_name_2 === undefined) {
	 // document.getElementById("stable2").style.display="none";
	 }
	  else{sp2name.value = toons.special_name_2;}
     if (toons.special_url_2 === undefined) {
	  sp2image.value = "";}
	  else{sp2image.value =toons.special_url_2;}
     if (toons.special_description_2 === undefined) {
	  sp2txt.value = "";}
	  else{sp2txt.value = toons.special_description_2;}
   if (toons.special_damage_2 === undefined) {
	  sp2damage.value = "";}
	  else{sp1damage.value = toons.special_damage_2;}
  if (toons.cooldown_special_2 === undefined) {
	  sp2cd.value = "";}
	  else{sp2cd.value = toons.cooldown_special_2+" turn cooldown";}
     if (toons.special2_ability_image === undefined) {
	  sp2lzeta.value = "";}
	  else{sp2lzeta.value = '<img src="img/'+toons.special2_ability_image+'.jpg" width="25px"/>';}
  //special 3 ability
  if (toons.special_level_3 === undefined) {
	  sp3lvl.value = "";}
	  else{  sp3lvl.value = "Special: level " + toons.special_level_3;}
   if (toons.special_name_3 === undefined) {
	  ;}
	  else{ sp3name.value = toons.special_name_3;}
   if (toons.special_url_3 === undefined) {
	  sp3image.value = "";}
	  else{  sp3image.value = '<img src="' + toons.special_url_3 + '"/>';}
    if (toons.special_description_3 === undefined) {
	  sp3txt.value = "";}
	  else{ sp3txt.value = toons.special_description_3;}
  if (toons.special_damage_3 === undefined) {
	  sp3damage.value = "";}
	  else{sp3damage.value = toons.special_damage_3;}
  if (toons.cooldown_special_3 === undefined) {
	  sp3cd.value = "";}
	  else{sp3cd.value = toons.cooldown_special_3+" turn cooldown";}
   if (toons.special3_ability_image === undefined) {
	  sp3lzeta.value = "";}
	  else{ sp3lzeta.value = '<img src="img/'+toons.special3_ability_image+'.jpg" width="25px"/>';}
  //leader ability
  if (toons.leader_level === undefined) {
	  leadLvl1.value = "";}
	  else{leadLvl1.value =toons.leader_level;}
 if (toons.leader_name === undefined) {
	  }
	  else{ leadName1.value = toons.leader_name;}
   if (toons.leader_url === undefined) {
	  leadimage.value = "";}
	  else{ leadimage.value = toons.leader_url;}
   if (toons.leader_description === undefined) {
	  leadTxt1.value = "";}
	  else{ leadTxt1.value = toons.leader_description;}
   if (toons.leader_ability_image === undefined) {
	  leadzeta.value = "";}
	  else{ leadzeta.value = toons.leader_ability_image;}
  //unique 1 ability
  if (toons.unique_level === undefined) {
	  u1Lvl1.value = "";}
	  else{u1Lvl1.value =toons.unique_level;}
	if (toons.unique_name === undefined) {
	  }
	  else{u1Name1.value = toons.unique_name;}
   if (toons.unique_url === undefined) {
	  u1image.value = "";}
	  else{ u1image.value = toons.unique_url;}
   if (toons.unique_description === undefined) {
	  u1Txt1.value = "";}
	  else{ u1Txt1.value = toons.unique_description;}
   if (toons.unique1_ability_image === undefined) {
	  u1zeta.value = "";}
	  else{ u1zeta.value = toons.unique1_ability_image;}
  //unique 2 ability
   if (toons.unique_level_2 === undefined) {
	  u2Lvl1.value = "";}
	  else{ u2Lvl1.value =toons.unique_level_2;}
   if (toons.unique_name_2 === undefined) {
	  }
	  else{ u2Name1.value = toons.unique_name_2;}
    if (toons.unique_url_2 === undefined) {
	  u2image.value = "";}
	  else{u2image.value = toons.unique_url_2;}
    if (toons.unique_description_2 === undefined) {
	  u2Txt1.value = "";}
	  else{u2Txt1.value = toons.unique_description_2;}
   if (toons.unique2_ability_image === undefined) {
	  u2zeta.value = "";}
	  else{ u2zeta.value = toons.unique2_ability_image;}
});

}




