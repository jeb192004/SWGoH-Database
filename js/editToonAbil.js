var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');

var contactsRef = dbRef.child('Ezra Bridger');



//load older conatcts as well as any newly added one...
contactsRef.on("value", function(snap) {
  console.log("added", snap.key(), snap.val());
  var toons = snap.val();
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
  document.getElementById("basicAbilImg").innerHTML = '<img src="img/'+toons.basic_ability_image+'.jpg" width="25px"/>';
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
  	var description_1 = description.value;}else{
		description_1 = null;
	}
	var power = document.getElementById('power');
	if (power && power.value) {
  	var power_1 = power.value;}else{
		power_1 = null;
	}
	var speed = document.getElementById('speed');
	if (speed && speed.value) {
  	var speed_1 = speed.value;}else{
		speed_1 = null;
	}
	var health = document.getElementById('health');
	if (health && health.value) {
  	var health_1 = health.value;}else{
		health_1 = null;
	}

	var bname = document.getElementById('bname');
	if (bname && bname.value) {
  	var bname_1 = bname.value;}else{
		bname_1 = null;
	}
	var bdescription = document.getElementById('bdescription');
	if (bdescription && bdescription.value) {
  	var bdescription_1 = bdescription.value;}else{
		bdescription_1 = null;
	}
	var blevel = document.getElementById('blevel');
	if (blevel && blevel.value) {
  	var blevel_1 = blevel.value;}else{
		blevel_1 = null;
	}
	var bdamage = document.getElementById('bdamage');
	if (bdamage && bdamage.value) {
  	var bdamage_1 = bdamage.value;}else{
		bdamage_1 = null;
	}
	
	var sname1 = document.getElementById('sname1');
	if (sname1 && sname1.value) {
  	var sname1_1 = sname1.value;}else{
		sname1_1 = null;
	}
	var sdescription1 = document.getElementById('sdescription1');
	if (sdescription1 && sdescription1.value) {
  	var sdescription1_1 = sdescription1.value;}else{
		sdescription1_1 = null;
	}
	var slevel1 = document.getElementById('slevel1');
	if (slevel1 && slevel1.value) {
  	var slevel1_1 = slevel1.value;}else{
		slevel1_1 = null;
	}
	var sdamage1 = document.getElementById('sdamage1');
	if (sdamage1 && sdamage1.value) {
  	var sdamage1_1 = sdamage1.value;}else{
		sdamage1_1 = null;
	}
	var scooldown1 = document.getElementById('scooldown1');
	if (scooldown1 && scooldown1.value) {
  	var scooldown1_1 = scooldown1.value;}else{
		scooldown1_1 = null;
	}
	
	var sname2 = document.getElementById('sname2');
	if (sname2 && sname2.value) {
  	var sname2_1 = sname2.value;}else{
		sname2_1 = null;
	}
	var sdescription2 = document.getElementById('sdescription2');
	if (sdescription2 && sdescription2.value) {
  	var sdescription2_1 = sdescription2.value;}else{
		sdescription2_1 = null;
	}
	var slevel2 = document.getElementById('slevel2');
	if (slevel2 && slevel2.value) {
  	var slevel2_1 = slevel2.value;}else{
		slevel2_1 = null;
	}
	var sdamage2 = document.getElementById('sdamage2');
	if (sdamage2 && sdamage2.value) {
  	var sdamage2_1 = sdamage2.value;}else{
		sdamage2_1 = null;
	}
	var scooldown2 = document.getElementById('scooldown2');
	if (scooldown2 && scooldown2.value) {
  	var scooldown2_1 = scooldown2.value;}else{
		scooldown2_1 = null;
	}
	
	var sname3 = document.getElementById('sname3');
	if (sname3 && sname3.value) {
  	var sname3_1 = sname3.value;}else{
		sname3_1 = null;
	}
	var sdescription3 = document.getElementById('sdescription3');
	if (sdescription3 && sdescription3.value) {
  	var sdescription3_1 = sdescription3.value;}else{
		sdescription3_1 = null;
	}
	var slevel3 = document.getElementById('slevel3');
	if (slevel3 && slevel3.value) {
  	var slevel3_1 = slevel3.value;}else{
		slevel3_1 = null;
	}
	var sdamage3 = document.getElementById('sdamage3');
	if (sdamage3 && sdamage3.value) {
  	var sdamage3_1 = sdamage3.value;}else{
		sdamage3_1 = null;
	}
	var scooldown3 = document.getElementById('scooldown3');
	if (scooldown3 && scooldown3.value) {
  	var scooldown3_1 = scooldown3.value;}else{
		scooldown3_1 = null;
	}
	
	var lname = document.getElementById('lname');
	if (lname && lname.value) {
  	var lname_1 = lname.value;}else{
		lname_1 = null;
	}
	var ldescription = document.getElementById('ldescription');
	if (ldescription && ldescription.value) {
  	var ldescription_1 = ldescription.value;}else{
		ldescription_1 = null;
	}
	var llevel = document.getElementById('llevel');
	if (llevel && llevel.value) {
  	var llevel_1 = llevel.value;}else{
		llevel_1 = null;
	}
	
	var uname1 = document.getElementById('uname1');
	if (uname1 && uname1.value) {
  	var uname1_1 = uname1.value;}else{
		uname1_1 = null;
	}
	var udescription1 = document.getElementById('udescription1');
	if (udescription1 && udescription1.value) {
  	var udescription1_1 = udescription1.value;}else{
		udescription1_1 = null;
	}
	var ulevel1 = document.getElementById('ulevel1');
	if (ulevel1 && ulevel1.value) {
  	var ulevel1_1 = ulevel1.value;}else{
		ulevel1_1 = null;
	}
	
	var uname2 = document.getElementById('uname2');
	if (uname2 && uname2.value) {
  	var uname2_1 = uname2.value;}else{
		uname2_1 = null;
	}
	var udescription2 = document.getElementById('udescription2');
	if (udescription2 && udescription2.value) {
  	var udescription2_1 = udescription2.value;}else{
		udescription2_1 = null;
	}
	var ulevel2 = document.getElementById('ulevel2');
	if (ulevel2 && ulevel2.value) {
  	var ulevel2_1 = ulevel2.value;}else{
		ulevel2_1 = null;
	}


	
	alert("data saved!!!");

toonAbil.set({
 	toon_description: description_1,
  	power: power_1,
  	speed: speed_1,
	health: health_1,
	basic_name: bname_1,
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
	unique_description_2: udescription2_1,/**
	basic_ability_image: bAbilImg_1,
	special1_ability_image: sAbilImg1_1,
	special2_ability_image: sAbilImg2_1,
	special3_ability_image: sAbilImg3_1,
	leader_ability_image: lAbilImg_1,
	unique1_ability_image: uAbilImg1_1,
	unique2_ability_image: uAbilImg2_1,
**/
});

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
	





