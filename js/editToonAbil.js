


var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');

var contactsRef = dbRef.child('Ezra Bridger');


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
	
	
	
	$('#save').click(function(){
    var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');
var toonAbil = dbRef.child('Ezra Bridger');

	var movieName = document.getElementById('bname').value;
	alert(movieName);

toonAbil.set({
 	toon_description: movieName,
  arrivedAt: movieName,
  userAgent: movieName
});
document.getElementById('bname').value = '';
});
$('#home').click(function(){
    window.location='index.html';
});
	
