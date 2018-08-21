var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
};
	var memberName = urlParam('memberName').replace(/_/g, ' ');
	//var memberName = "Jimmy Burn 2";
	console.log(memberName);

var namesArray = [];

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

var toon, trait, info, toon1, img;

    var  db = firebase.firestore();
	  loadList();
 


function loadList(){
db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName).
collection("Toons").orderBy("POWER","desc")
.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
			
				//unit
				var toonname = doc.data().NAME;
				var toonslvl = doc.data().STARLVL;
				var toonlvl = doc.data().LVL;
				var toonglvl = doc.data().GLVL;
				var toonz = doc.data().ZETAS;
				var toongp = doc.data().POWER.toLocaleString();
				//base
				var toonagility = doc.data().AGILITY;
				var toonarmor = doc.data().ARMOR;
				var toonarmorpen = doc.data().ARMORPEN;
				var toonhealth = doc.data().HEALTH;
				var toonhealthsteal = doc.data().HEALTHSTEAL;
				var toonphycritrat = doc.data().PHYCRITRAT;
				var toonphysicaldamage = doc.data().PHYDMG;
				var toonpotency = doc.data().POTENCY;
				var toonresistance = doc.data().RESISTANCE;
				var toonrespen = doc.data().RESISTANCEPEN;
				var toonspcritrat = doc.data().SPCRITRAT;
				var toonspdmg = doc.data().SPDMG;
				var toonspeed = doc.data().SPEED;
				var toonstrength = doc.data().STRENGTH;
				var toontenacity = doc.data().TENACITY;
				var toonprotection = doc.data().PROTECTION;
				var toontactic = doc.data().TACTICS;
				
  console.log(toonagility, toonarmor, toonarmorpen, toonhealth, toonhealthsteal, toonphycritrat, toonphysicaldamage,
  				toonpotency, toonresistance, toonrespen, toonspcritrat, toonspdmg, toonspeed, toonstrength,
				toontenacity, toonprotection, toontactic);
				
		
				
				
				document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toonname,toonslvl, toonlvl, toonglvl,toonz, toongp);
            });
			
		  
			
	

	$('#loading').hide();
	
        
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


function contactHtmlFromObject(toonname, toonslvl, toonlvl, toonglvl, toonz, toongp){
  //console.log( toons );
  var html = '';
  html += '<li style="text-align:center" class="list-group-item contact">';
    html += '<div class="toonlist">';
      /*
      html += '<p>'+'<div class="img_container">'
	 	   + '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
	  	   + '</div>'+'</p>';*/
		   html += '<div> <p class="lead"><b><font color="black">'+toonname+'</font></b></p>';
		   if(toonslvl === 1){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>' +'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+ '</div>'+'</p>';
		   } if(toonslvl === 2){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>' +'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+ '</div>'+'</p>';
		   } if(toonslvl === 3){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star2.png"/>' +'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+ '</div>'+'</p>';
		   } if(toonslvl === 4){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>' +'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+ '</div>'+'</p>';
		   } if(toonslvl === 5){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>' +'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+ '</div>'+'</p>';
		   } if(toonslvl === 6){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>' +'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star2.png"/>'+ '</div>'+'</p>';
		   } if(toonslvl === 7){
		   html += '<p>'+'<div class="star">' + '<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>' +'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+'<img id= "starimg" src="img/star.png"/>'+ '</div>'+'</p>';
		   }
	html += '<p><b><font color="black">Level: </font></b>'+toonlvl+'</p>';
                html += '<p><b><font color="black">Gear Lvl: </font></b>'+toonglvl+'</p></div>';
				html += '<p><b><font color="black">Power: </font></b>'+toongp+'</p></div>';
    html += '</div>';
  html += '</li>';
  return html;
  
}

var search1 = "false";
    document.getElementById("searchText").style.display='none';
function search(){
	if(search1 == "false"){
    document.getElementById("searchText").style.display='inline';
	    document.getElementById("searchtxt").focus();

		document.getElementById("area_list").style.display='none';
		search1 ="true";
				if ( $(window).width() > 739) {}else{  	   
  			document.getElementById("header__title").style.display='none';
			}
		}else{
		document.getElementById("searchText").style.display='none';
	    document.getElementById("header__title").style.display='inline';
		if ( $(window).width() > 739) {      
  //Add your javascript for large screens here 
} 
else {
  //Add your javascript for small screens here 
		document.getElementById("area_list").style.display='inline';
	}
		search1 = "false";
		}
}


    
	
	function filter(element) {
        var value = $(element).val();
 value = value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
        return letter.toUpperCase();
 });
        $("#toons > li").each(function() {
            if ($(this).text().search(value) > -1) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    }
	
	function menu_item(item){
		if(item.innerHTML === "Comapare Abilities"){
			window.location = "compareToon.html";
		}
		if(item.innerHTML === "Guild"){
			window.location = 'guilds.html?guildName='+"Relentless";
		}if(item.innerHTML === "Chat"){
			window.location = "chat.html";
		}if(item.innerHTML === "Ships"){
			alert("This page is still under development");
		}
	}
	
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

function shard_loc_item(shard_loc){
	$('#loading').show();
	$('#toons').empty();
	
	var shard1 = shard_loc.innerText || shard_loc.textContent;
	//var shards = shard1.replace(/[.'\s]/g, '');
	
	if(shard_loc === "all_toons"){
		loadList();
	}else{
		
		filterList(shard_loc);
	}
	}
	
	function filterList(shard_loc){
db.collection("Guilds").doc("Relentless").collection("Members").doc("Jimmy Burn 2").
collection("Toons").orderBy(shard_loc,"desc")
.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
			
				//unit
				var toonname = doc.data().NAME;
				var toonslvl = doc.data().STARLVL;
				var toonlvl = doc.data().LVL;
				var toonglvl = doc.data().GLVL;
				var toonz = doc.data().ZETAS;
				var toongp = doc.data().POWER;
				//base
				var toonagility = doc.data().AGILITY;
				var toonarmor = doc.data().ARMOR;
				var toonarmorpen = doc.data().ARMORPEN;
				var toonhealth = doc.data().HEALTH;
				var toonhealthsteal = doc.data().HEALTHSTEAL;
				var toonphycritrat = doc.data().PHYCRITRAT;
				var toonphysicaldamage = doc.data().PHYDMG;
				var toonpotency = doc.data().POTENCY;
				var toonresistance = doc.data().RESISTANCE;
				var toonrespen = doc.data().RESISTANCEPEN;
				var toonspcritrat = doc.data().SPCRITRAT;
				var toonspdmg = doc.data().SPDMG;
				var toonspeed = doc.data().SPEED;
				var toonstrength = doc.data().STRENGTH;
				var toontenacity = doc.data().TENACITY;
				var toonprotection = doc.data().PROTECTION;
				var toontactic = doc.data().TACTICS;
				
  console.log(toonagility, toonarmor, toonarmorpen, toonhealth, toonhealthsteal, toonphycritrat, toonphysicaldamage,
  				toonpotency, toonresistance, toonrespen, toonspcritrat, toonspdmg, toonspeed, toonstrength,
				toontenacity, toonprotection, toontactic);
				
				document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toonname,toonslvl, toonlvl, toonglvl,toonz, toongp);
            });
        $('#loading').hide();
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
		
	}
	
	
	
	// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}



