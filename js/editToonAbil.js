


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
	
