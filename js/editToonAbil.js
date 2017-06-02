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
              document.getElementById("sign-out").style.display="block";
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
	
	alert(description);

toonAbil.set({
 	toon_description: description,
  arrivedAt: description,
  userAgent: description
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
	





