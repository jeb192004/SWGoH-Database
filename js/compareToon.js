//create firebase reference
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var toon01 = sessionStorage.getItem('toon1');
var toon02 = sessionStorage.getItem('toon2');
firstToon(toon01);
secondToon(toon02);

//home button
$('#home').click(function(){
    window.location = 'index.html';
});
$('#edit').click(function(){
    window.location = 'editToonAbil.html';
});


    
//Function To Display Popup
function div_show() {
	document.getElementById('compareToonAbility').style.display = "block";
var toon002 = dbRef.child('toons');

//load older conatcts as well as any newly added one...
toon002.on("child_added", function(snap04) {
  console.log("added", snap04.key(), snap04.val());
  document.querySelector('#toons2')
    .innerHTML += contactHtmlFromObject(snap04.val());
	$(".list-group li").on("click", function() {
    //alert($(this).find("p.lead").html());
	var toon01 = $(this).find("p.lead2").html();
  document.getElementById('compareToonAbility').style.display = "none";
 firstToon(toon01);
 $(".list-group li").remove();
});
      
var mylist = $('.list-group');
var listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
});
$.each(listitems, function(idx, itm) { mylist.append(itm); });


});

//prepare conatct object's HTML
function contactHtmlFromObject(toons){
  console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div class="toonlist">';
		   html += '<p class="lead2">'+toons.name+'</p>';
    html += '</div>';
  html += '</li>';
  return html;
}
}

function div_show2() {
	document.getElementById('compareToonAbility2').style.display = "block";
var toon002 = dbRef.child('toons');

//load older conatcts as well as any newly added one...
toon002.on("child_added", function(snap03) {
  console.log("added", snap03.key(), snap03.val());
  document.querySelector('#toons3')
    .innerHTML += contactHtmlFromObject(snap03.val());
	$(".list-group3 li").on("click", function() {
    //alert($(this).find("p.lead").html());
	var toon02 = $(this).find("p.lead2").html();
	
  document.getElementById('compareToonAbility2').style.display = "none";
 secondToon(toon02);
 $(".list-group3 li").remove();
});
      
var mylist = $('.list-group3');
var listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
});
$.each(listitems, function(idx, itm) { mylist.append(itm); });


});

//prepare conatct object's HTML
function contactHtmlFromObject(toons){
  console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div class="toonlist">';
		   html += '<p class="lead2">'+toons.name+'</p>';
    html += '</div>';
  html += '</li>';
  return html;
  
}

}

function firstToon(toon01){
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var toon1 = dbRef.child(toon01);
document.getElementById("toon1").innerHTML=toon01;
//load older conatcts as well as any newly added one...
toon1.once("value", function(snap) {
  console.log("added", snap.key(), snap.val());
  var toons = snap.val();
  //description-power-speed-health
  
     document.getElementById("power").innerHTML = toons.power;
  document.getElementById("speed").innerHTML = toons.speed;
  document.getElementById("health").innerHTML = toons.health;
  //basic ability
  document.getElementById("basicLevel").innerHTML = "Basic: level " + toons.basic_level;
  document.getElementById("basicName").innerHTML = toons.basic_name;
  
  document.getElementById("basicDescription").innerHTML = toons.basic_description;
  document.getElementById("basicDmg").innerHTML = "Damage: " + toons.basic_damage;
  document.getElementById("basicAbilImg").innerHTML = '<img src="img/'+toons.basic_ability_image+'.jpg" width="25px"/>';
  //special 1 ability
  document.getElementById("sp1Level").innerHTML = "Special: level " + toons.special_level;
  document.getElementById("sp1Name").innerHTML = toons.special_name;
  
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
	  document.getElementById("sp2Name").innerHTML = "";}
	  else{document.getElementById("sp2Name").innerHTML = toons.special_name_2;}
     
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
	  document.getElementById("sp3Name").innerHTML = "";}
	  else{ document.getElementById("sp3Name").innerHTML = toons.special_name_3;}
   
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
	  document.getElementById("leadName").innerHTML = "";}
	  else{ document.getElementById("leadName").innerHTML = toons.leader_name;}
   
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
	  document.getElementById("unique1Name").innerHTML = "";}
	  else{document.getElementById("unique1Name").innerHTML = toons.unique_name;}
   
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
	  document.getElementById("unique2Name").innerHTML = "";}
	  else{ document.getElementById("unique2Name").innerHTML = toons.unique_name_2;}
    
    if (toons.unique_description_2 === undefined) {
	  document.getElementById("unique2Description").innerHTML = "";}
	  else{document.getElementById("unique2Description").innerHTML = toons.unique_description_2;}
   if (toons.unique2_ability_image === undefined) {
	  document.getElementById("unique2AbilImg").innerHTML = "";}
	  else{ document.getElementById("unique2AbilImg").innerHTML = '<img src="img/'+toons.unique2_ability_image+'.jpg" width="25px"/>';}
 });
}


function secondToon(toon02){
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var toon2 = dbRef.child(toon02);
document.getElementById("toon2").innerHTML=toon02;
//load older conatcts as well as any newly added one...
toon2.once("value", function(snap) {
  console.log("added", snap.key(), snap.val());
  var toons = snap.val();
  //description-power-speed-health
  
     document.getElementById("power2").innerHTML = toons.power;
  document.getElementById("speed2").innerHTML = toons.speed;
  document.getElementById("health2").innerHTML = toons.health;
  //basic ability
  document.getElementById("basicLevel2").innerHTML = "Basic: level " + toons.basic_level;
  document.getElementById("basicName2").innerHTML = toons.basic_name;
  
  document.getElementById("basicDescription2").innerHTML = toons.basic_description;
  document.getElementById("basicDmg2").innerHTML = "Damage: " + toons.basic_damage;
  document.getElementById("basicAbilImg2").innerHTML = '<img src="img/'+toons.basic_ability_image+'.jpg" width="25px"/>';
  //special 1 ability
  document.getElementById("sp1Level2").innerHTML = "Special: level " + toons.special_level;
  document.getElementById("sp1Name2").innerHTML = toons.special_name;
  
  document.getElementById("sp1Description2").innerHTML = toons.special_description;
  if (toons.special_damage === undefined) {
	  document.getElementById("sp1Dmg2").innerHTML = "";}
	  else{document.getElementById("sp1Dmg2").innerHTML = "Damage: "+toons.special_damage;}
  if (toons.cooldown_special === undefined) {
	  document.getElementById("sp1cooldown2").innerHTML = "";}
	  else{document.getElementById("sp1cooldown2").innerHTML = toons.cooldown_special+" turn cooldown";}
  document.getElementById("sp1AbilImg2").innerHTML = '<img src="img/'+toons.special1_ability_image+'.jpg" width="25px"/>';
  //special 2 ability
    if (toons.special_level_2 === undefined) {
	  document.getElementById("sp2Level2").innerHTML = "";}
	  else{ document.getElementById("sp2Level2").innerHTML = "Special: level " + toons.special_level_2;}
      if (toons.special_name_2 === undefined) {
	  document.getElementById("sp2Name2").innerHTML = "";}
	  else{document.getElementById("sp2Name2").innerHTML = toons.special_name_2;}
     
     if (toons.special_description_2 === undefined) {
	  document.getElementById("sp2Description2").innerHTML = "";}
	  else{document.getElementById("sp2Description2").innerHTML = toons.special_description_2;}
   if (toons.special_damage_2 === undefined) {
	  document.getElementById("sp2Dmg2").innerHTML = "";}
	  else{document.getElementById("sp2Dmg2").innerHTML = "Damage: "+ toons.special_damage_2;}
  if (toons.cooldown_special_2 === undefined) {
	  document.getElementById("sp2cooldown2").innerHTML = "";}
	  else{document.getElementById("sp2cooldown2").innerHTML = toons.cooldown_special_2+" turn cooldown";}
     if (toons.special2_ability_image === undefined) {
	  document.getElementById("sp2AbilImg2").innerHTML = "";}
	  else{document.getElementById("sp2AbilImg2").innerHTML = '<img src="img/'+toons.special2_ability_image+'.jpg" width="25px"/>';}
  //special 3 ability
  if (toons.special_level_3 === undefined) {
	  document.getElementById("sp3Level2").innerHTML = "";}
	  else{  document.getElementById("sp3Level2").innerHTML = "Special: level " + toons.special_level_3;}
   if (toons.special_name_3 === undefined) {
	  document.getElementById("sp3Name2").innerHTML = "";}
	  else{ document.getElementById("sp3Name2").innerHTML = toons.special_name_3;}
   
    if (toons.special_description_3 === undefined) {
	  document.getElementById("sp3Description2").innerHTML = "";}
	  else{ document.getElementById("sp3Description2").innerHTML = toons.special_description_3;}
  if (toons.special_damage_3 === undefined) {
	  document.getElementById("sp3Dmg2").innerHTML = "";}
	  else{document.getElementById("sp3Dmg2").innerHTML = toons.special_damage_3;}
  if (toons.cooldown_special_3 === undefined) {
	  document.getElementById("sp3cooldown2").innerHTML = "";}
	  else{document.getElementById("sp3cooldown2").innerHTML = toons.cooldown_special_3+" turn cooldown";}
   if (toons.special3_ability_image === undefined) {
	  document.getElementById("sp3AbilImg2").innerHTML = "";}
	  else{ document.getElementById("sp3AbilImg2").innerHTML = '<img src="img/'+toons.special3_ability_image+'.jpg" width="25px"/>';}
  //leader ability
  if (toons.leader_level === undefined) {
	  document.getElementById("leadLevel2").innerHTML = "";}
	  else{document.getElementById("leadLevel2").innerHTML = "Leader: level " + toons.leader_level;}
 if (toons.leader_name === undefined) {
	  document.getElementById("leadName2").innerHTML = "";}
	  else{ document.getElementById("leadName2").innerHTML = toons.leader_name;}
   
   if (toons.leader_description === undefined) {
	  document.getElementById("leadDescription2").innerHTML = "";}
	  else{ document.getElementById("leadDescription2").innerHTML = toons.leader_description;}
   if (toons.leader_ability_image === undefined) {
	  document.getElementById("leadAbilImg2").innerHTML = "";}
	  else{ document.getElementById("leadAbilImg2").innerHTML = '<img src="img/'+toons.leader_ability_image+'.jpg" width="25px"/>';}
  //unique 1 ability
  if (toons.unique_level === undefined) {
	  document.getElementById("unique1Level2").innerHTML = "";}
	  else{document.getElementById("unique1Level2").innerHTML = "Unique: level " + toons.unique_level;}
	if (toons.unique_name === undefined) {
	  document.getElementById("unique1Name2").innerHTML = "";}
	  else{document.getElementById("unique1Name2").innerHTML = toons.unique_name;}
   
   if (toons.unique_description === undefined) {
	  document.getElementById("unique1Description2").innerHTML = "";}
	  else{ document.getElementById("unique1Description2").innerHTML = toons.unique_description;}
   if (toons.unique1_ability_image === undefined) {
	  document.getElementById("unique1AbilImg2").innerHTML = "";}
	  else{ document.getElementById("unique1AbilImg2").innerHTML = '<img src="img/'+toons.unique1_ability_image+'.jpg" width="25px"/>';}
  //unique 2 ability
   if (toons.unique_level_2 === undefined) {
	  document.getElementById("unique2Level2").innerHTML = "";}
	  else{ document.getElementById("unique2Level2").innerHTML = "Unique: level " + toons.unique_level_2;}
   if (toons.unique_name_2 === undefined) {
	  document.getElementById("unique2Name2").innerHTML = "";}
	  else{ document.getElementById("unique2Name2").innerHTML = toons.unique_name_2;}
    
    if (toons.unique_description_2 === undefined) {
	  document.getElementById("unique2Description2").innerHTML = "";}
	  else{document.getElementById("unique2Description2").innerHTML = toons.unique_description_2;}
   if (toons.unique2_ability_image === undefined) {
	  document.getElementById("unique2AbilImg2").innerHTML = "";}
	  else{ document.getElementById("unique2AbilImg2").innerHTML = '<img src="img/'+toons.unique2_ability_image+'.jpg" width="25px"/>';}
 });}
