//create firebase reference
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var toon = sessionStorage.getItem('toon');
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
  var y = document.getElementById("toon-description").innerHTML = toons.toon_description;
  var y = document.getElementById("power").innerHTML = toons.power;
  var y = document.getElementById("speed").innerHTML = toons.speed;
  var y = document.getElementById("health").innerHTML = toons.health;
  //basic ability
  var y = document.getElementById("basicLevel").innerHTML = "Basic: level " + toons.basic_level;
  var y = document.getElementById("basicName").innerHTML = toons.basic_name;
  var y = document.getElementById("basicImg").innerHTML = '<img src="' + toons.basic_url + '"/>';
  var y = document.getElementById("basicDescription").innerHTML = toons.basic_description;
  var y = document.getElementById("basicDmg").innerHTML = "Damage: " + toons.basic_damage;
  var y = document.getElementById("basicAbilImg").innerHTML = '<img src="'+toons.basic_ability_image+'"/>';
  //special 1 ability
  var y = document.getElementById("sp1Level").innerHTML = "Basic: level " + toons.special_level;
  var y = document.getElementById("sp1Name").innerHTML = toons.special_name;
  var y = document.getElementById("sp1Img").innerHTML = '<img src="' + toons.special_url + '"/>';
  var y = document.getElementById("sp1Description").innerHTML = toons.special_description;
  var y = document.getElementById("sp1Dmg").innerHTML = toons.cooldown_special+" turn cooldown" +'<br>'+
  "Damage: " + toons.special_damage;
  var y = document.getElementById("sp1AbilImg").innerHTML = '<img src="'+toons.special_ability_image+'"/>';
  
  
  
  return html;
}
 var cars = document.querySelector(".list-group");

cars.addEventListener("click", function(e)
{
  //alert("Available colors: " + e.target.textHTML);
  window.location = 'toonInfo.html';
	
	

});
