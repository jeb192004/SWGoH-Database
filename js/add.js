

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

var abilName2 = document.getElementById('abil2name');
var abilTxt2 = document.getElementById('abil2txt');
var abilLvl2 = document.getElementById('abil2lvl');

var abilName3 = document.getElementById('abil3name');
var abilTxt3 = document.getElementById('abil3txt');
var abilLvl3 = document.getElementById('abil3lvl');

var abilName4 = document.getElementById('abil4name');
var abilTxt4 = document.getElementById('abil4txt');
var abilLvl4 = document.getElementById('abil4lvl');



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
	
	
	
	var basicOrb = document.getElementById('Basic Orb');
	var premiumOrb = document.getElementById('Premium Orb');
	var ultimusOrb = document.getElementById('Ultimus Orb');
	var infinityOrb = document.getElementById('Infinity Orb');
	
	var warriorKingOrb1 = document.getElementById('Warrior King Orb');
	var widowBiteOrb = document.getElementById("Widow's Bite Orb");
	var immortalProtectorOrb = document.getElementById('Immortal Protector Orb');
	var warriorKingBlitz1 = document.getElementById('Warrior King Blitz');
	var widowBiteBlitz = document.getElementById("Widow's Bite Blitz");
	



function add(){
/*
db.collection("Toons").doc(toonName.value).collection("Abilities").doc("Abilities").set({
	head: toonImgUrl.value,
	
    abilName1_7: abilName1.value,
    abilTxt1_7: abilTxt1.value,
    abilLvl1_7: abilLvl1.value,
	
	abilName2_7: abilName2.value,
    abilTxt2_7: abilTxt2.value,
    abilLvl2_7: abilLvl2.value,
	
	abilName3_7: abilName3.value,
    abilTxt3_7: abilTxt3.value,
    abilLvl3_7: abilLvl3.value,
	
	abilName4_5: abilName4.value,
    abilTxt4_5: abilTxt4.value,
    abilLvl4_5: abilLvl4.value,
	
	factionAbilAll:factionAbilAllTxt.value,
	factionAbil1:factionAbil1Txt.value,
	factionAbil2:factionAbil2Txt.value
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	//alert(docRef.id +" "+ "upload finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);
	//alert(error);
});
*/
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
}


function get(){
	
var docRef = db.collection("Toons").doc(toonName.value);

docRef.get().then(function(doc) {
     if (doc.exists) {
        console.log("Document data:", doc.data());
		toonImgUrl.value = doc.data().Image;
		toonInfo.value = doc.data().Info;
		toonTraits.value = doc.data().Traits;
		
		
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
	alert(toonName.value);
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
  abilimage.value = toons.basic_url;
  abilTxt1.value = toons.basic_description;
  abildamage.value = toons.basic_damage;
  abilzeta.value = toons.basic_ability_image;
  //special 1 ability
  /*
  document.getElementById("sp1Level").innerHTML = "Special: level " + toons.special_level;
  document.getElementById("sp1Name").innerHTML = toons.special_name;
  document.getElementById("sp1Img").innerHTML = '<img src="' + toons.special_url + '"/>';
  document.getElementById("sp1Description").innerHTML = toons.special_description;
  if (toons.special_damage === undefined) {
	  document.getElementById("sp1Dmg").innerHTML = "";}
	  else{document.getElementById("sp1Dmg").innerHTML = "Damage: "+toons.special_damage;}
  if (toons.cooldown_special === undefined) {
	  document.getElementById("sp1cooldown").innerHTML = "";}
	  else{document.getElementById("sp1cooldown").innerHTML = toons.cooldown_special+" turn cooldown";}
  document.getElementById("sp1AbilImg").innerHTML = '<img src="img/'+toons.special1_ability_image+'.jpg" width="25px"/>';
  //special 2 ability
    if (toons.special_level_2 === undefined) {
	  document.getElementById("sp2Level").innerHTML = "";}
	  else{ document.getElementById("sp2Level").innerHTML = "Special: level " + toons.special_level_2;}
      if (toons.special_name_2 === undefined) {
	  document.getElementById("stable2").style.display="none";}
	  else{document.getElementById("sp2Name").innerHTML = toons.special_name_2;}
     if (toons.special_url_2 === undefined) {
	  document.getElementById("sp2Img").innerHTML = "";}
	  else{document.getElementById("sp2Img").innerHTML = '<img src="' + toons.special_url_2 + '"/>';}
     if (toons.special_description_2 === undefined) {
	  document.getElementById("sp2Description").innerHTML = "";}
	  else{document.getElementById("sp2Description").innerHTML = toons.special_description_2;}
   if (toons.special_damage_2 === undefined) {
	  document.getElementById("sp2Dmg").innerHTML = "";}
	  else{document.getElementById("sp2Dmg").innerHTML = "Damage: "+ toons.special_damage_2;}
  if (toons.cooldown_special_2 === undefined) {
	  document.getElementById("sp2cooldown").innerHTML = "";}
	  else{document.getElementById("sp2cooldown").innerHTML = toons.cooldown_special_2+" turn cooldown";}
     if (toons.special2_ability_image === undefined) {
	  document.getElementById("sp2AbilImg").innerHTML = "";}
	  else{document.getElementById("sp2AbilImg").innerHTML = '<img src="img/'+toons.special2_ability_image+'.jpg" width="25px"/>';}
  //special 3 ability
  if (toons.special_level_3 === undefined) {
	  document.getElementById("sp3Level").innerHTML = "";}
	  else{  document.getElementById("sp3Level").innerHTML = "Special: level " + toons.special_level_3;}
   if (toons.special_name_3 === undefined) {
	  document.getElementById("stable3").style.display="none";}
	  else{ document.getElementById("sp3Name").innerHTML = toons.special_name_3;}
   if (toons.special_url_3 === undefined) {
	  document.getElementById("sp3Img").innerHTML = "";}
	  else{  document.getElementById("sp3Img").innerHTML = '<img src="' + toons.special_url_3 + '"/>';}
    if (toons.special_description_3 === undefined) {
	  document.getElementById("sp3Description").innerHTML = "";}
	  else{ document.getElementById("sp3Description").innerHTML = toons.special_description_3;}
  if (toons.special_damage_3 === undefined) {
	  document.getElementById("sp3Dmg").innerHTML = "";}
	  else{document.getElementById("sp3Dmg").innerHTML = toons.special_damage_3;}
  if (toons.cooldown_special_3 === undefined) {
	  document.getElementById("sp3cooldown").innerHTML = "";}
	  else{document.getElementById("sp3cooldown").innerHTML = toons.cooldown_special_3+" turn cooldown";}
   if (toons.special3_ability_image === undefined) {
	  document.getElementById("sp3AbilImg").innerHTML = "";}
	  else{ document.getElementById("sp3AbilImg").innerHTML = '<img src="img/'+toons.special3_ability_image+'.jpg" width="25px"/>';}
  //leader ability
  if (toons.leader_level === undefined) {
	  document.getElementById("leadLevel").innerHTML = "";}
	  else{document.getElementById("leadLevel").innerHTML = "Leader: level " + toons.leader_level;}
 if (toons.leader_name === undefined) {
	  document.getElementById("ltable").style.display="none";}
	  else{ document.getElementById("leadName").innerHTML = toons.leader_name;}
   if (toons.leader_url === undefined) {
	  document.getElementById("leadImg").innerHTML = "";}
	  else{ document.getElementById("leadImg").innerHTML = '<img src="' + toons.leader_url + '"/>';}
   if (toons.leader_description === undefined) {
	  document.getElementById("leadDescription").innerHTML = "";}
	  else{ document.getElementById("leadDescription").innerHTML = toons.leader_description;}
   if (toons.leader_ability_image === undefined) {
	  document.getElementById("leadAbilImg").innerHTML = "";}
	  else{ document.getElementById("leadAbilImg").innerHTML = '<img src="img/'+toons.leader_ability_image+'.jpg" width="25px"/>';}
  //unique 1 ability
  if (toons.unique_level === undefined) {
	  document.getElementById("unique1Level").innerHTML = "";}
	  else{document.getElementById("unique1Level").innerHTML = "Unique: level " + toons.unique_level;}
	if (toons.unique_name === undefined) {
	  document.getElementById("utable1").style.display="none";}
	  else{document.getElementById("unique1Name").innerHTML = toons.unique_name;}
   if (toons.unique_url === undefined) {
	  document.getElementById("unique1Img").innerHTML = "";}
	  else{ document.getElementById("unique1Img").innerHTML = '<img src="' + toons.unique_url + '"/>';}
   if (toons.unique_description === undefined) {
	  document.getElementById("unique1Description").innerHTML = "";}
	  else{ document.getElementById("unique1Description").innerHTML = toons.unique_description;}
   if (toons.unique1_ability_image === undefined) {
	  document.getElementById("unique1AbilImg").innerHTML = "";}
	  else{ document.getElementById("unique1AbilImg").innerHTML = '<img src="img/'+toons.unique1_ability_image+'.jpg" width="25px"/>';}
  //unique 2 ability
   if (toons.unique_level_2 === undefined) {
	  document.getElementById("unique2Level").innerHTML = "";}
	  else{ document.getElementById("unique2Level").innerHTML = "Unique: level " + toons.unique_level_2;}
   if (toons.unique_name_2 === undefined) {
	  document.getElementById("utable2").style.display="none";}
	  else{ document.getElementById("unique2Name").innerHTML = toons.unique_name_2;}
    if (toons.unique_url_2 === undefined) {
	  document.getElementById("unique2Img").innerHTML = "";}
	  else{document.getElementById("unique2Img").innerHTML = '<img src="' + toons.unique_url_2 + '"/>';}
    if (toons.unique_description_2 === undefined) {
	  document.getElementById("unique2Description").innerHTML = "";}
	  else{document.getElementById("unique2Description").innerHTML = toons.unique_description_2;}
   if (toons.unique2_ability_image === undefined) {
	  document.getElementById("unique2AbilImg").innerHTML = "";}
	  else{ document.getElementById("unique2AbilImg").innerHTML = '<img src="img/'+toons.unique2_ability_image+'.jpg" width="25px"/>';}
	  if(toons.unique2_ability_image === undefined){}else{
		document.getElementById('addedBy').innerHTML = "Edited by: "+toons.user_id;
		}*/
})

}
