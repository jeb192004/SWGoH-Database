var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
};
	var memberName = urlParam('memberName').split("_").join(" ");
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
		var modspeed = 0;
		var modhealth = 0;
		var modhealthper = 0;
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
				
				var mod1 = doc.data().MODSET1;
				var mod2 = doc.data().MODSET2;
				var mod3 = doc.data().MODSET3;
				var mod4 = doc.data().MODSET4;
				var mod5 = doc.data().MODSET5;
				var mod6 = doc.data().MODDET6;
				
				if(mod1 != '" "'){
				var modSet1 = JSON.parse(mod1).stat;
				var arrayLength = modSet1.length;
					for (var i = 0; i < arrayLength; i++) {
						if(modSet1[i].includes("UNITSTATSPEED")){
    					modspeed += modSet1[i][1];
   						 }if(modSet1[i].includes("UNITSTATMAXHEALTH")){
    					modhealth = modSet1[i][1];
   						 }if(modSet1[i].includes("UNITSTATMAXHEALTHPERCENTADDITIVE")){
    					modhealthper = Math.round(100*modSet1[i][1])/100;
   						 }
						}}else{}
				if(mod2 != '" "'){
				var modSet2 = JSON.parse(doc.data().MODSET2).stat;
				var arrayLength2 = modSet2.length;
					for (var i = 0; i < arrayLength2; i++) {
						if(modSet2[i].includes("UNITSTATSPEED")){
    					modspeed += modSet2[i][1];
						}if(modSet2[i].includes("UNITSTATMAXHEALTH")){
    					modhealth = modSet2[i][1];
   						 }if(modSet2[i].includes("UNITSTATMAXHEALTHPERCENTADDITIVE")){
    					modhealthper = Math.round(100*modSet2[i][1])/100;
   						 }
						}}
				if(mod3 != '" "'){
				var modSet3 = JSON.parse(doc.data().MODSET3).stat;
				var arrayLength3 = modSet3.length;
					for (var i = 0; i < arrayLength3; i++) {
						if(modSet3[i].includes("UNITSTATSPEED")){
    					modspeed += modSet3[i][1];
   						 }if(modSet3[i].includes("UNITSTATMAXHEALTH")){
    					modhealth = modSet3[i][1];
   						 }if(modSet3[i].includes("UNITSTATMAXHEALTHPERCENTADDITIVE")){
    					modhealthper = Math.round(100*modSet3[i][1])/100;
   						 }
						}}
				if(mod4 != '" "'){
				var modSet4 = JSON.parse(doc.data().MODSET4).stat;
				var arrayLength4 = modSet4.length;
					for (var i = 0; i < arrayLength4; i++) {
						if(modSet4[i].includes("UNITSTATSPEED")){
    					modspeed += modSet4[i][1];
   						 }if(modSet4[i].includes("UNITSTATMAXHEALTH")){
    					modhealth = modSet4[i][1];
   						 }if(modSet4[i].includes("UNITSTATMAXHEALTHPERCENTADDITIVE")){
    					modhealthper = Math.round(100*modSet4[i][1])/100;
   						 }
						}}
				if(mod5 != '" "'){
				var modSet5 = JSON.parse(doc.data().MODSET5).stat;
				var arrayLength5 = modSet5.length;
					for (var i = 0; i < arrayLength5; i++) {
						if(modSet5[i].includes("UNITSTATSPEED")){
    					modspeed += modSet5[i][1];
   						 }if(modSet5[i].includes("UNITSTATMAXHEALTH")){
    					modhealth = modSet5[i][1];
   						 }if(modSet5[i].includes("UNITSTATMAXHEALTHPERCENTADDITIVE")){
    					modhealthper = Math.round(100*modSet5[i][1])/100;
   						 }
						}}
				if(mod6 != '" "'){
				var modSet6 = JSON.parse(doc.data().MODDET6).stat;
				var arrayLength6 = modSet6.length;
					for (var i = 0; i < arrayLength6; i++) {
						if(modSet6[i].includes("UNITSTATSPEED")){
    					modspeed += modSet6[i][1];
   						 }if(modSet6[i].includes("UNITSTATMAXHEALTH")){
    					modhealth = modSet6[i][1];
   						 }if(modSet6[i].includes("UNITSTATMAXHEALTHPERCENTADDITIVE")){
    					modhealthper = Math.round(100*modSet6[i][1])/100;
   						 }
						}}
						
						//var toonHealth = (modhealth/100000000) + toonhealth;
						var toonSpeed = modspeed/100000000 + toonspeed;
				
				
		
				
				
				document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toonname,toonslvl, toonlvl, toonglvl,toonz, toongp, toonSpeed, toonhealth, toonprotection);
          
	$('#loading').hide();
	});
			      
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


function contactHtmlFromObject(toonname, toonslvl, toonlvl, toonglvl, toonz, toongp, toonspeed, toonhealth, toonprotection ){
  //console.log( toons );
  var html = '';
  html += '<li  class="list-group-item contact">';
    html += '<div class="toonlist">';
      /*
      html += '<p>'+'<div class="img_container">'
	 	   + '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
	  	   + '</div>'+'</p>';*/
		   html += '<div style="text-align:center"> <p class="lead"><b><font color="black">'+toonname+'</font></b></p>';
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
		   html += '</div>';
		   html += '<div style="padding:5px;" >';
		   
		   html += '<div style="float:left">';
	            html += '<p><b><font color="black">Level: </font></b>'+toonlvl+'</p>';
                html += '<p><b><font color="black">Gear Lvl: </font></b>'+toonglvl+'</p>';
				html += '<p><b><font color="black">Power: </font></b>'+toongp+'</p>';
		   html += '</div>';	
			
		   html += '<div style="float:right; text-align:right; " >';
	            html += '<p><b><font color="black">Speed: </font></b>'+toonspeed+'</p>';
                html += '<p><b><font color="black">Health: </font></b>'+toonhealth+'</p>';
				html += '<p><b><font color="black">Protection: </font></b>'+toonprotection+'</p>';
		   html += '</div>';	
				
			html += '</div>';	
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
db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName).
collection("Toons").orderBy(shard_loc,"desc")
.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
		var modspeed1=0, modspeed2=0, modspeed3=0, modspeed4=0, modspeed5=0, modspeed6=0;	
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
				
				var mod1 = doc.data().MODSET1;
				var mod2 = doc.data().MODSET2;
				var mod3 = doc.data().MODSET3;
				var mod4 = doc.data().MODSET4;
				var mod5 = doc.data().MODSET5;
				var mod6 = doc.data().MODDET6;
				
				if(mod1 != '" "'){
				var modSet1 = JSON.parse(mod1).stat;
				var arrayLength = modSet1.length;
					for (var i = 0; i < arrayLength; i++) {
						if(modSet1[i].includes("UNITSTATSPEED")){
    					modspeed1 = modSet1[i][1];
					
   						 }
						}}else{}
				if(mod2 != '" "'){
				var modSet2 = JSON.parse(doc.data().MODSET2).stat;
				var arrayLength2 = modSet2.length;
					for (var i = 0; i < arrayLength2; i++) {
						if(modSet2[i].includes("UNITSTATSPEED")){
    					modspeed2 = modSet2[i][1];
						
   						 }
						}}
				if(mod3 != '" "'){
				var modSet3 = JSON.parse(doc.data().MODSET3).stat;
				var arrayLength3 = modSet3.length;
					for (var i = 0; i < arrayLength3; i++) {
						if(modSet3[i].includes("UNITSTATSPEED")){
    					modspeed3 = modSet3[i][1];
						
   						 }
						}}
				if(mod4 != '" "'){
				var modSet4 = JSON.parse(doc.data().MODSET4).stat;
				var arrayLength4 = modSet4.length;
					for (var i = 0; i < arrayLength4; i++) {
						if(modSet4[i].includes("UNITSTATSPEED")){
    					modspeed4 = modSet4[i][1];
						
   						 }
						}}
				if(mod5 != '" "'){
				var modSet5 = JSON.parse(doc.data().MODSET5).stat;
				var arrayLength5 = modSet5.length;
					for (var i = 0; i < arrayLength5; i++) {
						if(modSet5[i].includes("UNITSTATSPEED")){
    					modspeed5 = modSet5[i][1];
						
   						 }
						}}
				if(mod6 != '" "'){
				var modSet6 = JSON.parse(doc.data().MODDET6).stat;
				var arrayLength6 = modSet6.length;
					for (var i = 0; i < arrayLength6; i++) {
						if(modSet6[i].includes("UNITSTATSPEED")){
    					modspeed6 = modSet6[i][1];
						
   						 }
						}}
						
						//alert(modspeed1, modspeed2, modspeed3, modspeed4,modspeed5, modspeed6);
						var totalmodspeed = modspeed1 + modspeed2 + modspeed3 + modspeed4 + modspeed5 + modspeed6;
						var modspeed = totalmodspeed/100000000;
						var toonSpeed = modspeed + toonspeed;
				
				
  console.log(toonagility, toonarmor, toonarmorpen, toonhealth, toonhealthsteal, toonphycritrat, toonphysicaldamage,
  				toonpotency, toonresistance, toonrespen, toonspcritrat, toonspdmg, toonSpeed, toonstrength,
				toontenacity, toonprotection, toontactic);
				
		
				
				
				document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toonname,toonslvl, toonlvl, toonglvl,toonz, toongp, toonSpeed, toonhealth, toonprotection);
          
	$('#loading').hide();
	});
			      
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



