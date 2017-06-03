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
  /**
  document.getElementById('bname').value = toons.basic_name;
  document.getElementById('bdescription').value = basic_description;
  document.getElementById('blevel').value = basic_level;
  document.getElementById('bdamage').value = basic_damage;
	
	var sname1 = document.getElementById('sname1');
	if (sname1 && sname1.value) {
  	sname1_1 = sname1.value;}
	var sdescription1 = document.getElementById('sdescription1');
	if (sdescription1 && sdescription1.value) {
  	sdescription1_1 = sdescription1.value;}
	var slevel1 = document.getElementById('slevel1');
	if (slevel1 && slevel1.value) {
  	slevel1_1 = slevel1.value;}
	var sdamage1 = document.getElementById('sdamage1');
	if (sdamage1 && sdamage1.value) {
  	sdamage1_1 = sdamage1.value;}
	var scooldown1 = document.getElementById('scooldown1');
	if (scooldown1 && scooldown1.value) {
  	scooldown1_1 = scooldown1.value;}
	
	var sname2 = document.getElementById('sname2');
	if (sname2 && sname2.value) {
  	sname2_1 = sname2.value;}
	var sdescription2 = document.getElementById('sdescription2');
	if (sdescription2 && sdescription2.value) {
  	sdescription2_1 = sdescription2.value;}
	var slevel2 = document.getElementById('slevel2');
	if (slevel2 && slevel2.value) {
  	slevel2_1 = slevel2.value;}
	var sdamage2 = document.getElementById('sdamage2');
	if (sdamage2 && sdamage2.value) {
  	sdamage2_1 = sdamage2.value;}
	var scooldown2 = document.getElementById('scooldown2');
	if (scooldown2 && scooldown2.value) {
  	scooldown2_1 = scooldown2.value;}
	
	var sname3 = document.getElementById('sname3');
	if (sname3 && sname3.value) {
  	sname3_1 = sname3.value;}
	var sdescription3 = document.getElementById('sdescription3');
	if (sdescription3 && sdescription3.value) {
  	sdescription3_1 = sdescription3.value;}
	var slevel3 = document.getElementById('slevel3');
	if (slevel3 && slevel3.value) {
  	slevel3_1 = slevel3.value;}
	var sdamage3 = document.getElementById('sdamage3');
	if (sdamage3 && sdamage3.value) {
  	sdamage3_1 = sdamage3.value;}
	var scooldown3 = document.getElementById('scooldown3');
	if (scooldown3 && scooldown3.value) {
  	scooldown3_1 = scooldown3.value;}
	
	var lname = document.getElementById('lname');
	if (lname && lname.value) {
  	lname_1 = lname.value;}
	var ldescription = document.getElementById('ldescription');
	if (ldescription && ldescription.value) {
  	ldescription_1 = ldescription.value;}
	var llevel = document.getElementById('llevel');
	if (llevel && llevel.value) {
  	llevel_1 = llevel.value;}
	
	var uname1 = document.getElementById('uname1');
	if (uname1 && uname1.value) {
  	uname1_1 = uname1.value;}
	var udescription1 = document.getElementById('udescription1');
	if (udescription1 && udescription1.value) {
  	udescription1_1 = udescription1.value;}
	var ulevel1 = document.getElementById('ulevel1');
	if (ulevel1 && ulevel1.value) {
  	ulevel1_1 = ulevel1.value;}
	
	var uname2 = document.getElementById('uname2');
	if (uname2 && uname2.value) {
  	uname2_1 = uname2.value;}
	var udescription2 = document.getElementById('udescription2');
	if (udescription2 && udescription2.value) {
  	udescription2_1 = udescription2.value;}
	var ulevel2 = document.getElementById('ulevel2');
	if (ulevel2 && ulevel2.value) {
  	ulevel2_1 = ulevel2.value;}
	**/
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
              document.getElementById("sign-out").style.display="block";
			  document.getElementById("status").value=displayName;
            });
          } else {
         document.getElementById("sign-out").style.display="none";
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
            
            
            user.getToken().then(function(accessToken) {
              var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');
			  var toonAbil = dbRef.child('Ezra Bridger');

	
	var description = document.getElementById('description');
	if (description && description.value) {
  	var description_1 = description.value;}
	var power = document.getElementById('power');
	if (power && power.value) {
  	var power_1 = power.value;}
	var speed = document.getElementById('speed');
	if (speed && speed.value) {
  	var speed_1 = speed.value;}
	
	var health = document.getElementById('health');
	if (health && health.value) {
  	var health_1 = health.value;}

	var bname = document.getElementById('bname');
	if (bname && bname.value) {
  	var bname_1 = bname.value;}
	var bdescription = document.getElementById('bdescription');
	if (bdescription && bdescription.value) {
  	bdescription_1 = bdescription.value;}
	var blevel = document.getElementById('blevel');
	if (blevel && blevel.value) {
  	blevel_1 = blevel.value;}
	var bdamage = document.getElementById('bdamage');
	if (bdamage && bdamage.value) {
  	bdamage_1 = bdamage.value;}
	
	var sname1 = document.getElementById('sname1');
	if (sname1 && sname1.value) {
  	sname1_1 = sname1.value;}
	var sdescription1 = document.getElementById('sdescription1');
	if (sdescription1 && sdescription1.value) {
  	sdescription1_1 = sdescription1.value;}
	var slevel1 = document.getElementById('slevel1');
	if (slevel1 && slevel1.value) {
  	slevel1_1 = slevel1.value;}
	var sdamage1 = document.getElementById('sdamage1');
	if (sdamage1 && sdamage1.value) {
  	sdamage1_1 = sdamage1.value;}
	var scooldown1 = document.getElementById('scooldown1');
	if (scooldown1 && scooldown1.value) {
  	scooldown1_1 = scooldown1.value;}
	
	var sname2 = document.getElementById('sname2');
	if (sname2 && sname2.value) {
  	sname2_1 = sname2.value;}
	var sdescription2 = document.getElementById('sdescription2');
	if (sdescription2 && sdescription2.value) {
  	sdescription2_1 = sdescription2.value;}
	var slevel2 = document.getElementById('slevel2');
	if (slevel2 && slevel2.value) {
  	slevel2_1 = slevel2.value;}
	var sdamage2 = document.getElementById('sdamage2');
	if (sdamage2 && sdamage2.value) {
  	sdamage2_1 = sdamage2.value;}
	var scooldown2 = document.getElementById('scooldown2');
	if (scooldown2 && scooldown2.value) {
  	scooldown2_1 = scooldown2.value;}
	
	var sname3 = document.getElementById('sname3');
	if (sname3 && sname3.value) {
  	sname3_1 = sname3.value;}
	var sdescription3 = document.getElementById('sdescription3');
	if (sdescription3 && sdescription3.value) {
  	sdescription3_1 = sdescription3.value;}
	var slevel3 = document.getElementById('slevel3');
	if (slevel3 && slevel3.value) {
  	slevel3_1 = slevel3.value;}
	var sdamage3 = document.getElementById('sdamage3');
	if (sdamage3 && sdamage3.value) {
  	sdamage3_1 = sdamage3.value;}
	var scooldown3 = document.getElementById('scooldown3');
	if (scooldown3 && scooldown3.value) {
  	scooldown3_1 = scooldown3.value;}
	
	var lname = document.getElementById('lname');
	if (lname && lname.value) {
  	lname_1 = lname.value;}
	var ldescription = document.getElementById('ldescription');
	if (ldescription && ldescription.value) {
  	ldescription_1 = ldescription.value;}
	var llevel = document.getElementById('llevel');
	if (llevel && llevel.value) {
  	llevel_1 = llevel.value;}
	
	var uname1 = document.getElementById('uname1');
	if (uname1 && uname1.value) {
  	uname1_1 = uname1.value;}
	var udescription1 = document.getElementById('udescription1');
	if (udescription1 && udescription1.value) {
  	udescription1_1 = udescription1.value;}
	var ulevel1 = document.getElementById('ulevel1');
	if (ulevel1 && ulevel1.value) {
  	ulevel1_1 = ulevel1.value;}
	
	var uname2 = document.getElementById('uname2');
	if (uname2 && uname2.value) {
  	uname2_1 = uname2.value;}
	var udescription2 = document.getElementById('udescription2');
	if (udescription2 && udescription2.value) {
  	udescription2_1 = udescription2.value;}
	var ulevel2 = document.getElementById('ulevel2');
	if (ulevel2 && ulevel2.value) {
  	ulevel2_1 = ulevel2.value;}

	
	
	alert(bname_1);

toonAbil.set({
 	toon_description: description_1,
  	power: power_1,
  	speed: speed_1,
	health: health_1,
	/**basic_name: bname_1,
  	basic_description: bdescription_1,
  	basic_level: blevel_1,
	basic_damage: bdamage_1,
	special_name: sname1_1,
  	special_description: sdescription1_1,
  	special_level: slevel1_1,
	special_damage : sdamage1_1,
	cooldown_special: scooldown1_1,
	special_level_2: slevel2_1,
	cooldown_special_2: scooldown2_1,
	special_damage_2: sdamage2_1,
	special_name_2: sname2_1,
	special_description_2: sdescription2_1,
	special_level_3: slevel3_1,
	cooldown_special_3: scooldown3_1,
	special_damage_3: sdamage3_1,
	special_name_3: sname3_1,
	special_description_3: sdescription3_1,					
	leader_level:llevel_1,
	leader_name: lname_1,
	leader_description: ldescription_1,		
	unique_level: ulevel1_1,
	unique_name:uname1_1,
	unique_description:udescription1_1,
	unique_level_2: ulevel2_1,
	unique_name_2:uname2_1,
	unique_description_2: udescription2_1,
	basic_ability_image: bAbilImg_1,
	special1_ability_image: sAbilImg1_1,
	special2_ability_image: sAbilImg2_1,
	special3_ability_image: sAbilImg3_1,
	leader_ability_image: lAbilImg_1,
	unique1_ability_image: uAbilImg1_1,
	unique2_ability_image: uAbilImg2_1,
	**/
});
//document.getElementById('bname').value = '';
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
	





