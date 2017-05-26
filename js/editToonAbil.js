
var provider = new firebase.auth.FacebookAuthProvider();
firebase.auth().getRedirectResult().then(function(result) {
  if (result.credential) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var token = result.credential.accessToken;
    // ...
  }
  // The signed-in user info.
  var user = result.user;
});


var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');

var contactsRef = dbRef.child('Bistan');





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
document.getElementById("save").onclick = function () { 

	var dbRef = new Firebase('https://swgoh-campanion.firebaseio.com/');
var toonAbil = dbRef.child('Ezra Bridger');

	var movieName = document.getElementById('bname').value;
	alert(movieName);
document.getElementById('bname').value = '';
toonAbil.set({
  path: movieName,
  arrivedAt: movieName,
  userAgent: movieName
});
	};


document.getElementById("s2btn").onclick = function () { 
	document.getElementById("s2layout").style.display="block"; };
document.getElementById("s3btn").onclick = function () { 
	document.getElementById("s3layout").style.display="block"; };
document.getElementById("u2btn").onclick = function () { 
	document.getElementById("u2layout").style.display="block"; };
	
	
