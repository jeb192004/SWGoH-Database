//create firebase reference
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var toon = localStorage.getItem('toon');
var contactsRef = dbRef.child(toon);


document.getElementById("header").innerHTML = sessionStorage.getItem('toon');


//load older conatcts as well as any newly added one...
contactsRef.on("value", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(snap.val());
	
     
    

// For each <li> inside #links
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.onclick = myFunction;
}
});

$('#home').click(function(){
    window.location = 'index.html';
});

//prepare conatct object's HTML
function contactHtmlFromObject(toons){
  console.log( toons );
  
  //description-power-speed-health
  document.getElementById("toon-description").innerHTML = toons.toon_description;
  document.getElementById("power").innerHTML = toons.power;
  document.getElementById("speed").innerHTML = toons.speed;
  document.getElementById("health").innerHTML = toons.health;
  //basic ability
  document.getElementById("basicLevel").innerHTML = "Basic: level " + toons.basic_level;
  document.getElementById("basicName").innerHTML = toons.basic_name;
  document.getElementById("basicImg").innerHTML = '<img src="' + toons.basic_url + '"/>';
  document.getElementById("basicDescription").innerHTML = toons.basic_description;
  document.getElementById("basicDmg").innerHTML = "Damage: " + toons.basic_damage;
  document.getElementById("basicAbilImg").innerHTML = '<img src="'+toons.basic_ability_image+'"/>';
  //special 1 ability
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
  document.getElementById("sp1AbilImg").innerHTML = '<img src="'+toons.special1_ability_image+'"/>';
  //special 2 ability
    if (toons.special_level_2 === undefined) {
	  document.getElementById("sp2Level").innerHTML = "";}
	  else{ document.getElementById("sp2Level").innerHTML = "Special: level " + toons.special_level_2;}
      if (toons.special_name_2 === undefined) {
	  document.getElementById("sp2Name").innerHTML = "";}
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
	  else{document.getElementById("sp2AbilImg").innerHTML = '<img src="'+toons.special2_ability_image+'"/>';}
  //special 3 ability
  if (toons.special_level_3 === undefined) {
	  document.getElementById("sp3Level").innerHTML = "";}
	  else{  document.getElementById("sp3Level").innerHTML = "Special: level " + toons.special_level_3;}
   if (toons.special_name_3 === undefined) {
	  document.getElementById("sp3Name").innerHTML = "";}
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
	  else{ document.getElementById("sp3AbilImg").innerHTML = '<img src="'+toons.special3_ability_image+'"/>';}
  //leader ability
  if (toons.leader_level === undefined) {
	  document.getElementById("leadLevel").innerHTML = "";}
	  else{document.getElementById("leadLevel").innerHTML = "Unique: level " + toons.leader_level;}
 if (toons.leader_name === undefined) {
	  document.getElementById("leadName").innerHTML = "";}
	  else{ document.getElementById("leadName").innerHTML = toons.leader_name;}
   if (toons.leader_url === undefined) {
	  document.getElementById("leadImg").innerHTML = "";}
	  else{ document.getElementById("leadImg").innerHTML = '<img src="' + toons.leader_url + '"/>';}
   if (toons.leader_description === undefined) {
	  document.getElementById("leadDescription").innerHTML = "";}
	  else{ document.getElementById("leadDescription").innerHTML = toons.leader_description;}
   if (toons.leader_ability_image === undefined) {
	  document.getElementById("leadAbilImg").innerHTML = "";}
	  else{ document.getElementById("leadAbilImg").innerHTML = '<img src="'+toons.leader_ability_image+'"/>';}
  //unique 1 ability
  if (toons.unique_level === undefined) {
	  document.getElementById("unique1Level").innerHTML = "";}
	  else{document.getElementById("unique1Level").innerHTML = "Unique: level " + toons.unique_level;}
	if (toons.unique_name === undefined) {
	  document.getElementById("unique1Name").innerHTML = "";}
	  else{document.getElementById("unique1Name").innerHTML = toons.unique_name;}
   if (toons.unique_url === undefined) {
	  document.getElementById("unique1Img").innerHTML = "";}
	  else{ document.getElementById("unique1Img").innerHTML = '<img src="' + toons.unique_url + '"/>';}
   if (toons.unique_description === undefined) {
	  document.getElementById("unique1Description").innerHTML = "";}
	  else{ document.getElementById("unique1Description").innerHTML = toons.unique_description;}
   if (toons.unique1_ability_image === undefined) {
	  document.getElementById("unique1AbilImg").innerHTML = "";}
	  else{ document.getElementById("unique1AbilImg").innerHTML = '<img src="'+toons.unique1_ability_image+'"/>';}
  //unique 2 ability
   if (toons.unique_level_2 === undefined) {
	  document.getElementById("unique2Level").innerHTML = "";}
	  else{ document.getElementById("unique2Level").innerHTML = "Unique: level " + toons.unique_level_2;}
   if (toons.unique_name_2 === undefined) {
	  document.getElementById("unique2Name").innerHTML = "";}
	  else{ document.getElementById("unique2Name").innerHTML = toons.unique_name_2;}
    if (toons.unique_url_2 === undefined) {
	  document.getElementById("unique2Img").innerHTML = "";}
	  else{document.getElementById("unique2Img").innerHTML = '<img src="' + toons.unique_url_2 + '"/>';}
    if (toons.unique_description_2 === undefined) {
	  document.getElementById("unique2Description").innerHTML = "";}
	  else{document.getElementById("unique2Description").innerHTML = toons.unique_description_2;}
   if (toons.unique2_ability_image === undefined) {
	  document.getElementById("unique2AbilImg").innerHTML = "";}
	  else{ document.getElementById("unique2AbilImg").innerHTML = '<img src="'+toons.unique2_ability_image+'"/>';}
  
  
  
  
  
  
  return html;
}
 var cars = document.querySelector(".list-group");

cars.addEventListener("click", function(e)
{
  //alert("Available colors: " + e.target.textHTML);
  window.location = 'toonInfo.html';
	
	

});
