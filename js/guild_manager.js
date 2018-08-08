
var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
  firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();



				
  
var memberName = document.getElementById('member_name');
var jtr = document.getElementById('jtr');
	var gk = document.getElementById('gk');
	var raidhan = document.getElementById('raidhan');
	
	



function addmembertoon(){

db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName.value).set({
	Name:memberName.value,
	JTR:jtr.checked,
	GK:gk.checked,
	RaidHan:raidhan.checked
	
	
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	alert(docRef.id +" "+ "upload finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});


document.getElementById("myform").reset();

}

/*
function get(){
	
		
db.collection("Guilds").doc("Relentless").collection("Members").doc(toonName.value).collection("Toons").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

     jtr.checked = doc.data().JTR;

	
	 
        };});
	
}*/








