// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('SWGoH-Database/js/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}


var namesArray = [];

var init = function () {
    //get scroll position in session storage
   	$(window).scrollTop(sessionStorage.scrollPos);
	console.log(sessionStorage.scrollPos);
};
window.onload = init;

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
var db;
var toon, trait, info, toon1, img;
firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      db = firebase.firestore();
	  loadList();
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



function loadList(){
db.collection("Toons").onSnapshot({ includeQueryMetadataChanges: true }, function(snapshot) {
      snapshot.docChanges.forEach(function(change) {
          if (change.type === "added") {
              //console.log("New city: ", change.doc.data());
			  
          }

          var source = snapshot.metadata.fromCache ? "local cache" : "server";
          //console.log("Data came from " + source);
    		//querySnapshot.forEach((doc) => {
				toon1 = `${change.doc.data().Name}`;
				info = `${change.doc.data().Info}`;
				trait = `${change.doc.data().Traits}`;
				img = `${change.doc.data().Image}`;
				namesArray.push(toon1);
		document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toon1, trait, info, img);	
	$(".list-group li").on("click", function() {

    //set scroll position in session storage
    sessionStorage.scrollPos = $(window).scrollTop();
	//alert(sessionStorage.scrollPos);
	console.log(sessionStorage.scrollPos);
	var toonName = $(this).find("p.lead").html();
	
	
	var characterName = toonName.replace(/ /g,"_");
	toonName = toonName.replace(/\s+/g, '').replace(/\./g,'').toLowerCase();
	window.localStorage.setItem('namesArray',JSON.stringify(namesArray));
	
	window.location = 'toon_details.html?character='+characterName;
  	//window.location = 'toon_details.html';
  
  });
    });});
}
function contactHtmlFromObject(toons, traits, info1, img1){
  //console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div class="toonlist">';
      
      html += '<p>'+'<div class="img_container">'
	 	   + '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
	  	   + '</div>'+'</p>';
		   html += '<div> <p class="lead">'+toons+'</p>';
	html += '<p>'+traits+'</p>';
                html += '<p>'+info1+'</p></div>';
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
		if(item.innerHTML === "Team Builder"){
			alert("This page is still under development");
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
	
	$('#toons').empty();
	
	var shard1 = shard_loc.innerText || shard_loc.textContent;
	//var shards = shard1.replace(/[.'\s]/g, '');
	
	if(shard_loc === "all_toons"){
		loadList();
	}if(shard_loc === "cantina_battles"){
		var shardLoc = "CantinaBattles";
		filterList(shardLoc);
	}if(shard_loc === "light_side"){
		var shardLoc = "LSBattles";
		filterList(shardLoc);
	}if(shard_loc === "dark_side"){
		var shardLoc = "DSBattles";
		filterList(shardLoc);
	}if(shard_loc === "shipments"){
		var shardLoc = "Shipments";
		filterList(shardLoc);
	}if(shard_loc === "squad_arena_store"){
		var shardLoc = "SquadArenaStore";
		filterList(shardLoc);
	}if(shard_loc === "fleet_arena_store"){
		var shardLoc = "FleetArenaStore";
		filterList(shardLoc);
	}if(shard_loc === "cantina_battles_store"){
		var shardLoc = "CantinaBattlesStore";
		filterList(shardLoc);
	}if(shard_loc === "galactic_war_store"){
		var shardLoc = "GalacticWarStore";
		filterList(shardLoc);
	}if(shard_loc === "guild_store"){
		var shardLoc = "GuildStore";
		filterList(shardLoc);
	}if(shard_loc === "guild_events_store"){
		var shardLoc = "GuildEventsStore";
		filterList(shardLoc);
	}if(shard_loc === "shard_store"){
		var shardLoc = "ShardStore";
		filterList(shardLoc);
	}
	
	else{
  
	}
	}
	
	function filterList(shardLoc){
		db.collection("Toons").where(shardLoc, "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           toon1 = `${doc.data().Name}`;
				info = `${doc.data().Info}`;
				trait = `${doc.data().Traits}`;
				img = `${doc.data().Image}`;
		
			document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toon1, trait, info, img);	
	$(".list-group li").on("click", function() {
	var toonName = $(this).find("p.lead").html();
	toonName = toonName.replace(/\s+/g, '').replace(/\./g,'').toLowerCase();
	window.location = 'characters/'+toonName+'.html';
	});
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
		
	}
	
	
	
	
