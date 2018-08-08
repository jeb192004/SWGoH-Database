
var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
};
	var characterName = urlParam('character').replace(/_/g, ' ');
	//var characterName = "Commander Luke Skywalker";
document.getElementById('name').innerHTML = characterName;
if (localStorage.getItem("namesArray")) {
  // Restore the contents of the text field
    var namesArray = localStorage.getItem("namesArray");
	var namesArray2 = JSON.parse(namesArray);
	var currentCharacter = namesArray2.indexOf(characterName);
	
}

var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
var firebase = firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var head = document.getElementById('img');
var getName = document.getElementById('name').innerText;

var cardSp2 = document.getElementById('cardSp2');
cardSp2.style.display ="none";
var cardSp3 = document.getElementById('cardSp3');
cardSp3.style.display ="none";
var cardlead = document.getElementById('cardlead');
cardlead.style.display ="none";
var cardU1 = document.getElementById('cardU1');
cardU1.style.display ="none";
var cardU2 = document.getElementById('cardU2');
cardU2.style.display ="none";

var abilName1 = document.getElementById('abil1');
var abilLvl1 = document.getElementById('abilLvl1');
var abilTxt1 = document.getElementById('abilTxt1');
var abilImg1 = document.getElementById('abil_img1');
var abilDamage1 = document.getElementById('abilDamage1');
var abilZeta1 = document.getElementById('abilZeta1');

var spName1 = document.getElementById('spName1');
var spLvl1 = document.getElementById('spLvl1');
var spTxt1 = document.getElementById('spTxt1');
var spImg1 = document.getElementById('sp_img1');
var spDamage1 = document.getElementById('spDamage1');
var spCd1 = document.getElementById('spCd1');
var spZeta1 = document.getElementById('spZeta1');

var spName2 = document.getElementById('spName2');
var spLvl2 = document.getElementById('spLvl2');
var spTxt2 = document.getElementById('spTxt2');
var spImg2 = document.getElementById('sp_img2');
var spDamage2 = document.getElementById('spDamage2');
var spCd2 = document.getElementById('spCd2');
var spZeta2 = document.getElementById('spZeta2');

var spName3 = document.getElementById('spName3');
var spLvl3 = document.getElementById('spLvl3');
var spTxt3 = document.getElementById('spTxt3');
var spImg3 = document.getElementById('sp_img3');
var spDamage3 = document.getElementById('spDamage3');
var spCd3 = document.getElementById('spCd3');
var spZeta3 = document.getElementById('spZeta3');

var leadName = document.getElementById('leadName');
var leadLvl = document.getElementById('leadLvl');
var leadTxt = document.getElementById('leadTxt');
var leadImg = document.getElementById('lead_img');
var leadZeta = document.getElementById('leadZeta');

var uName1 = document.getElementById('uName1');
var uLvl1 = document.getElementById('uLvl1');
var uTxt1 = document.getElementById('uTxt1');
var uImg1 = document.getElementById('u_img1');
var uZeta1 = document.getElementById('uZeta1');

var uName2 = document.getElementById('uName2');
var uLvl2 = document.getElementById('uLvl2');
var uTxt2 = document.getElementById('uTxt2');
var uImg2 = document.getElementById('u_img2');
var uZeta2 = document.getElementById('uZeta2');


var factionAbil1;
var factionAbil2;

  //$('.abil_upgrade_layout').hide();

var db = firebase.firestore();
firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      var db = firebase.firestore();
  })
  .catch(function(err) {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });

db.collection("Toons").doc(characterName).collection("Abilities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
		
		head.src = doc.data().head;
		
		abilName1.innerHTML = doc.data().abilName1;
		abilLvl1.innerHTML = doc.data().abilLvl1;
		abilTxt1.textContent = doc.data().abilTxt1;
		abilImg1.src = doc.data().abilImg1;
		abilDamage1.innerHTML = "Damage: "+doc.data().abildamage;
		abilZeta1.src =  "img/"+doc.data().abilzeta+".jpg";
		
		spName1.innerHTML = doc.data().sp1name;
		spLvl1.innerHTML = doc.data().sp1lvl;
		spTxt1.textContent = doc.data().sp1txt;
		spImg1.src = doc.data().sp1image;
		spDamage1.innerHTML = "Damage: "+doc.data().sp1damage;
		spCd1.innerHTML = "Cooldown: "+doc.data().sp1cd;
		spZeta1.src =  "img/"+doc.data().sp1lzeta+".jpg";
		
		if ( doc.data().sp2name == null ){
		}else{
		cardSp2.style.display ="block";
		spName2.innerHTML = doc.data().sp2name;
		spLvl2.innerHTML = doc.data().sp2lvl;
		spTxt2.textContent = doc.data().sp2txt;
		spImg2.src = doc.data().sp2image;
		spDamage2.innerHTML = "Damage: "+doc.data().sp2damage;
		spCd2.innerHTML = "Cooldown: "+doc.data().sp2cd;
		spZeta2.src =  "img/"+doc.data().sp2lzeta+".jpg";
		}
		if ( doc.data().sp3name == null ){
		}else{
		cardSp3.style.display ="block";
		spName3.innerHTML = doc.data().sp3name;
		spLvl3.innerHTML = doc.data().sp3lvl;
		spTxt3.textContent = doc.data().sp3txt;
		spImg3.src = doc.data().sp3image;
		spDamage3.innerHTML = "Damage: "+doc.data().sp3damage;
		spCd3.innerHTML = "Cooldown: "+doc.data().sp3cd;
		spZeta3.src =  "img/"+doc.data().sp3lzeta+".jpg";
		}
		if ( doc.data().leadName1 == null ){
		}else{
		cardlead.style.display ="block";
		leadName.innerHTML = doc.data().leadName1;
		leadLvl.innerHTML = doc.data().leadLvl1;
		leadTxt.textContent = doc.data().leadTxt1;
		leadImg.src = doc.data().leadimage;
		leadZeta.src =  "img/"+doc.data().leadzeta+".jpg";
		}
		if ( doc.data().u1Name1 == null ){
		}else{
		cardU1.style.display ="block";
		uName1.innerHTML = doc.data().u1Name1;
		uLvl1.innerHTML = doc.data().u1Lvl1;
		uTxt1.textContent = doc.data().u1Txt1;
		uImg1.src = doc.data().u1image;
		uZeta1.src =  "img/"+doc.data().u1AbilLvl+".jpg";
		}
		if ( doc.data().u2name == null ){
		}else{
		cardU2.style.display ="block";
		uName2.innerHTML = doc.data().u2name;
		uLvl2.innerHTML = doc.data().U2lvl;
		uTxt2.textContent = doc.data().u2txt;
		uImg2.src = doc.data().U2image;
		uZeta2.src =  "img/"+doc.data().U2AbilLvl+".jpg";
		}
    });
		
	});
	
	
	
	
	
	var slideout = new Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('menu'),
    'padding': 256,
    'tolerance': 70,
	'side':"right"
  });
function menu(){
	slideout.toggle();
	}
	
  // Toggle button
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });
	
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


$('.menu_item').each(function() {
    
});

function menu_item(item){
		if(item.innerHTML === "Blitz"){
			window.location = "blitz.html";
		}if(item.innerHTML === "Guild"){
			window.location = 'guilds.html?guildName='+"Relentless";
		}if(item.innerHTML === "Characters/Home"){
			window.location = "index.html";
		}
});

		}
	}
	
	
	function next(){
		var toonName01 = namesArray2[currentCharacter+1]
		var Name = toonName01.replace(/ /g,"_");
		window.location = 'toon_details.html?character='+Name;
  	
	}
	
	function prev(){
				var toonName01 = namesArray2[currentCharacter-1]
		var Name = toonName01.replace(/ /g,"_");

		window.location = 'toon_details.html?character='+Name;
  	
	}
