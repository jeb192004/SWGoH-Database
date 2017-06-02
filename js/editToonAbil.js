
var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');

var contactsRef = dbRef.child('Ezra Bridger');



//load older conatcts as well as any newly added one...
contactsRef.once("value", function(snap) {
  console.log("added", snap.key(), snap.val());
  var toons = snap.val();
  //description-power-speed-health
  document.getElementById("description").value = toons.toon_description;
     document.getElementById('power').value = toons.power;
  document.getElementById("speed").value = toons.speed;
  document.getElementById("health").value = toons.health;
  });
;


document.getElementById("s2btn").onclick = function () { 
	document.getElementById("s2layout").style.display="block"; };
document.getElementById("s3btn").onclick = function () { 
	document.getElementById("s3layout").style.display="block"; };
document.getElementById("u2btn").onclick = function () { 
	document.getElementById("u2layout").style.display="block"; };
	
	var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
  firebase.initializeApp(config);
  initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            
            user.getToken().then(function(accessToken) {
              
            });
          } else {
         alert("You need to be signed in");
		 window.sessionStorage.setItem('redirect','editToonAbil.html');
		window.location="logIn.html";
          }
        }, function(error) {
          console.log(error);
        });
      };
      window.addEventListener('load', function() {
        initApp();
      });
  
      

	
	$('#save').click(function(){
		   firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            
            user.getToken().then(function(accessToken) {
              var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');
			  var toonAbil = dbRef.child('Ezra Bridger');

	var description = document.getElementById('description').value;
	var power = document.getElementById('power').value;
	var speed = document.getElementById('speed').value;
	var health = document.getElementById('health').value;
	
	var bname = document.getElementById('bname').value;
	var bdescription = document.getElementById('bdescription').value;
	var blevel = document.getElementById('blevel').value;
	var bdamage = document.getElementById('bdamage').value;
	
	var sname1 = document.getElementById('sname1').value;
	var sdescription1 = document.getElementById('sdescription1').value;
	var slevel1 = document.getElementById('slevel1').value;
	var sdamage1 = document.getElementById('sdamage1').value;
	var scooldown1 = document.getElementById('scooldown1').value;
	
	var sname2 = document.getElementById('sname2').value;
	var sdescription2 = document.getElementById('sdescription2').value;
	var slevel2 = document.getElementById('slevel2').value;
	var sdamage2 = document.getElementById('sdamage2').value;
	var scooldown2 = document.getElementById('scooldown2').value;
	
	var sname3 = document.getElementById('sname3').value;
	var sdescription3 = document.getElementById('sdescription3').value;
	var slevel3 = document.getElementById('slevel3').value;
	var sdamage3 = document.getElementById('sdamage3').value;
	var scooldown3 = document.getElementById('scooldown3').value;
	
	var lname = document.getElementById('lname').value;
	var ldescription = document.getElementById('ldescription').value;
	var llevel = document.getElementById('llevel').value;
	
	var uname1 = document.getElementById('uname1').value;
	var udescription1 = document.getElementById('udescription1').value;
	var ulevel1 = document.getElementById('ulevel1').value;
	
	var uname2 = document.getElementById('uname2').value;
	var udescription2 = document.getElementById('udescription2').value;
	var ulevel2 = document.getElementById('ulevel2').value;
	
	
	

toonAbil.push({
 	toon_description: description,
  	power: power,
  	speed: speed,
	health: health,
	basic_name: bname,
  	basic_description: bdescription,
  	basic_level: blevel,
	basic_damage: bdamage,
	special_name: sname1,
  	special_description: sdescription1,
  	special_level: slevel1,
	special_damage: sdamage1,
	cooldown_special: scooldown1,
	special_level_2: slevel2,
	cooldown_special_2: scooldown2,
	special_damage_2: sdamage2,
	special_name_2: sname2,
	special_description_2: sdescription2,
	special_level_3: slevel3,
	cooldown_special_3: scooldown3,
	special_damage_3: sdamage3,
	special_name_3: sname3,
	special_description_3: sdescription3,					
	leader_level:llevel,
	leader_name: lname,
	leader_description: ldescription,		
	unique_level: ulevel1,
	unique_name:uname1,
	unique_description:udescription1,
	unique_level_2: ulevel2,
	unique_name_2:uname2,
	unique_description_2: udescription2,
	basic_ability_image: bAbilImg,
	special1_ability_image: sAbilImg1,
	special2_ability_image: sAbilImg2,
	special3_ability_image: sAbilImg3,
	leader_ability_image: lAbilImg,
	unique1_ability_image: uAbilImg1,
	unique2_ability_image: uAbilImg2,
	user_id: displayName
	
});
document.getElementById('bname').value = '';
            });
          } else {
        alert("You are not signed in");
          }
        }, function(error) {
          console.log(error);
        });
      
});
$('#home').click(function(){
    window.location='index.html';
});
	


