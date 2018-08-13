var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
};
	//var guildName = urlParam('guildName').replace(/_/g, ' ');
	var guildName = "Relentless";

	$(document).ready(function() {

      // Initialize the plugin
      $('#my_popup').popup();

    });
	
var toonsArray = [];
var strp1jtr = [];

var init = function () {
    //get scroll position in session storage
   	$(window).scrollTop(sessionStorage.scrollPos);
	//console.log(sessionStorage.scrollPos);
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

var toon, trait, info, toon1, img;

    var  db = firebase.firestore();
	var guildref = db.collection("Guilds").doc(guildName);
	  loadList();



function loadList(){

 
 guildref.collection("Members")
  
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
			toon1 = `${doc.data().Name}`;
			toonsArray = [];
			if(doc.data().GK){
			   toonsArray.push("GK");
		   }if(doc.data().RaidHan){
			   toonsArray.push("Han Solo(Raid Han)");
		   }
		
		   getstrteam(toon1, toonsArray);
			
	

	
	
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
	
}

function getstrteam(member, toonsarray){
	
	guildref.collection("STR").doc("P1").collection("members").doc(member)
    .get().then(function(doc1) {

			strp1jtr = [];
			var jtrname = doc1.data().JTRName;
			var jtrslvl = doc1.data().JTRSLVL;
			var jtrlvl = doc1.data().JTRLVL;
			var jtrglvl = doc1.data().JTRGLVL;
			var jtrzl = doc1.data().JTRZL;
			var jtrzu1 = doc1.data().JTRZU1;
			var jtrzu2 = doc1.data().JTRZU2;
			var jtrgp = doc1.data().JTRGP.toLocaleString();
			
			var bb8name = doc1.data().BB8NAME;
			var bb8slvl = doc1.data().BB8SLVL;
			var bb8lvl = doc1.data().BB8LVL;
			var bb8glvl = doc1.data().BB8GLVL;
			var bb8zu1 = doc1.data().BB8ZU1;
			var bb8zu2 = doc1.data().BB8ZU2;
			var bb8gp = doc1.data().BB8GP.toLocaleString();
			
			var r2name = doc1.data().R2NAME;
			var r2slvl = doc1.data().R2SLVL;
			var r2lvl = doc1.data().R2LVL;
			var r2glvl = doc1.data().R2GLVL;
			var r2zu1 = doc1.data().R2ZU1;
			var r2zu2 = doc1.data().R2ZU2;
			var r2gp = doc1.data().R2GP.toLocaleString();
			
			var rtname = doc1.data().RTNAME;
			var rtslvl = doc1.data().RTSLVL;
			var rtlvl = doc1.data().RTLVL;
			var rtglvl = doc1.data().RTGLVL;
			var rtgp = doc1.data().RTGP.toLocaleString();
			
			var reyname = doc1.data().REYNAME;
			var reyslvl = doc1.data().REYSLVL;
			var reylvl = doc1.data().REYLVL;
			var reyglvl = doc1.data().REYGLVL;
			var reyzu1 = doc1.data().REYZU1;
			var reygp = doc1.data().REYGP.toLocaleString();
			
			if(jtrname){
			strp1jtr.push(jtrname);}
			if(bb8name){
			strp1jtr.push(bb8name);}
			if(r2name){
			strp1jtr.push(r2name);}
			if(rtname){
			strp1jtr.push(rtname);}
			if(reyname){
			strp1jtr.push(reyname);}
			document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(member, toonsarray,
										jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
										bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
										r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
										rtname,rtslvl, rtlvl, rtglvl, rtgp,
										reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp
										);	
	//rey jedi training click
	$(".list-group li .jtrname").on("click", function() {
	var jtrslvl1 = $(this).attr("data-jtrslvl");
	var jtrlvl1 = $(this).attr("data-jtrlvl");
	var jtrglvl1 = $(this).attr("data-jtrglvl");
	var jtrzl1 = $(this).attr("data-jtrzl");
	var jtrzu11 = $(this).attr("data-jtrzu1");
	var jtrzu21 = $(this).attr("data-jtrzu2");
	var jtrgp1 = $(this).attr("data-jtrgp");
	var jtrName = $(this).html();
	info(jtrslvl1, jtrlvl1, jtrglvl1, jtrzu11, jtrzu11, jtrzu21, jtrgp1, jtrName);
	});
	//bb8 click
	$(".list-group li .bb8name").on("click", function() {
	var bb8slvl1 = $(this).attr("data-bb8slvl");
	var bb8lvl1 = $(this).attr("data-bb8lvl");
	var bb8glvl1 = $(this).attr("data-bb8glvl");
	var bb8zu11 = $(this).attr("data-bb8zu1");
	var bb8zu21 = $(this).attr("data-bb8zu2");
	var bb8gp1 = $(this).attr("data-bb8gp");
	var bb8Name = $(this).html();
	info(bb8slvl1, bb8lvl1, bb8glvl1, "", bb8zu11, bb8zu21, bb8gp1, bb8Name);
	});
	//r2d2 click
	$(".list-group li .r2name").on("click", function() {
	var r2slvl1 = $(this).attr("data-r2slvl");
	var r2lvl1 = $(this).attr("data-r2lvl");
	var r2glvl1 = $(this).attr("data-r2glvl");
	var r2zu11 = $(this).attr("data-r2zu1");
	var r2zu21 = $(this).attr("data-r2zu2");
	var r2gp1 = $(this).attr("data-r2gp");
	var r2Name = $(this).html();
	info(r2slvl1, r2lvl1, r2glvl1,"", r2zu11, r2zu21, r2gp1, r2Name);
	});
	//resistance trooper click
	$(".list-group li .rtname").on("click", function() {
	var rtslvl1 = $(this).attr("data-rtslvl");
	var rtlvl1 = $(this).attr("data-rtlvl");
	var rtglvl1 = $(this).attr("data-rtglvl");
	var rtgp1 = $(this).attr("data-rtgp");
	var rtName = $(this).html();
	info(rtslvl1, rtlvl1, rtglvl1, "", "", "", rtgp1, rtName);
	});
	//rey click
	$(".list-group li .reyname").on("click", function() {
	var reyslvl1 = $(this).attr("data-reyslvl");
	var reylvl1 = $(this).attr("data-reylvl");
	var reyglvl1 = $(this).attr("data-reyglvl");
	var reyzu11 = $(this).attr("data-reyzu1");
	var reyzu21 = $(this).attr("data-reyzu2");
	var reygp1 = $(this).attr("data-reygp");
	var reyName = $(this).html();
	info(reyslvl1, reylvl1, reyglvl1, "", reyzu11, "", reygp1, reyName);
	});
	
		});/*.catch(function(error) {
    console.log("Error getting document:", error);
});*/
}



function contactHtmlFromObject(toons, toonsArray,
										jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
										bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
										r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
										rtname,rtslvl, rtlvl, rtglvl, rtgp,
										reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp
										){
  //console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact" >';
    html += '<div class="toonlist"style="margin-left:5px; margin-bottom:5px;">';
      
    html += '<p>'+'<div class="img_container"style="display:none">'
	 	 //+ '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
	  	 + '</div>'+'</p>';
	html += '<div> <p class="lead">'+toons+'</p>';
	html += '<p><b><font color="black">7* Raid Characters: </font></b>'+toonsArray+'</p>';
    //html += '<p class="strjtr" ><b><font color="black">STR P1 Team: </font></b>'+strp1+'</p></div>';
    html += '<div><b><font color="black">STR P1 Team: </font></b>';
	if(jtrname){
	html +='<a class="jtrname" data-jtrslvl="'+jtrslvl+'" data-jtrlvl="'+jtrlvl+'" data-jtrglvl="'+jtrglvl+'"data-jtrzl="'+jtrzl+'" data-jtrzu1="'+jtrzu1+'"data-jtrzu2="'+jtrzu2+'" data-jtrgp="'+jtrgp+'"  >'+jtrname+'</a>, ';}
	
	if(bb8name){
	html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'"data-bb8zu2="'+bb8zu2+'" data-bb8gp="'+bb8gp+'" >'+bb8name+'</a>, ';}
	 
	if(r2name){
	html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'" data-r2gp="'+r2gp+'">'+r2name+'</a>, ';}
	if(rtname){
	html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'" data-rtgp="'+rtgp+'">'+rtname+'</a>, ';}
	if(reyname){
	html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" data-reyzu1="'+reyzu1+'" data-reygp="'+reygp+'">'+reyname+'</a> ';}
	
	html +=	'</div>';
	
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
		}if(item.innerHTML === "Characters/Home"){
			window.location = "index.html";
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
	
	if(shard_loc === "all_members"){
		loadList();
	}if(shard_loc === "jtr"){
		var shardLoc = "JTR";
		filterList(shardLoc);
	}if(shard_loc === "gk"){
		var shardLoc = "GK";
		filterList(shardLoc);
	}if(shard_loc === "raidhan"){
		var shardLoc = "RaidHan";
		filterList(shardLoc);
	}/*if(shard_loc === "shipments"){
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
	}*/
	
	else{
  
	}
	}
	
	function filterList(shardLoc){
		db.collection("Guilds").doc("Relentless").collection("Members")
  .where(shardLoc, "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
           toon1 = `${doc.data().Name}`;
				if(doc.data().GK){
			   toonsArray.push("GK");
		   }if(doc.data().RaidHan){
			   toonsArray.push("Han Solo(Raid Han)");
		   }
			document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(toon1, toonsArray, "", "");	
	toonsArray = [];
	p1jtr = "";
	/*
	$(".list-group li").on("click", function() {
	var toonName = $(this).find("p.lead").html();
	toonName = toonName.replace(/\s+/g, '').replace(/\./g,'').toLowerCase();
	window.location = 'characters/'+toonName+'.html';
	});*/
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
		
	}
	
	
function info(slvl, lvl, glvl, zl, zu1, zu2, gp, name){
	$('#my_popup').popup({
  color: 'white',
  opacity: 1,
  transition: '0.3s',
  scrolllock: true,
  vertical:'center'
});
	$('#my_popup').popup('show');

	document.getElementById('name').innerHTML = name;
	document.getElementById('slvl').innerHTML = "Stars: " +slvl;
	document.getElementById('lvl').innerHTML = "Lvl: "+ lvl;
	document.getElementById('glvl').innerHTML = "Gear Lvl: "+ glvl;
	if(zl){
	document.getElementById('zl').innerHTML = "Leader: Zeta";}
	if(zu1){
	document.getElementById('zu1').innerHTML = "Unique: Zeta";}
	if(zu2){
	document.getElementById('zu2').innerHTML = "Unique: Zeta";}
	document.getElementById('gp').innerHTML = "GP: "+ gp;
	

}	
	
	
	
	// Register service worker to control making site work offline

if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}

