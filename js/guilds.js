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
	
var toonsArray = [], jtr, gk, solo, otchew,
ep, r2d2, cls, thrawn, bb8, gmy, revan, strP1;
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



    var  db = firebase.firestore();
	var guildref = db.collection("Guilds").doc(guildName);
	var roster, bb8;
	//  loadList();

load_guild();

	
	function load_guild(){
	
		var allycodes = [];
	db.collection("Guild").doc("Relentless").get()
    .then(function(doc) {
        //querySnapshot.forEach(function(doc) {
		//	allycodes = doc.data().ALLYCODES;
			var desc = doc.data().DESCRIPTION;
			var gp = doc.data().GP;
			var guild = doc.data().GUILD;
			var members = doc.data().MEMBERS;
			var message = doc.data(). MESSAGE;
			var raid = doc.data().RAID;
			roster = JSON.parse(doc.data().ROSTER);
			var updated = doc.data().UPDATED;
			bb8 = doc.data().BB8;
			jtr = doc.data().JTR;
		  gk = doc.data().GK; 
		  solo = doc.data().SOLO;
		 otchew = doc.data().CHEWIE;
      ep = doc.data().EP;
      r2d2 = doc.data().R2D2;
      cls = doc.data().CLS;
      thrawn = doc.data().THRAWN;
      gmy = doc.data().GMY;
		  revan = doc.data().REVAN;
		  strP1 = doc.data().STRP1;
		
			document.querySelector('#header_container')
    .innerHTML += guildHtml(guild, desc, gp, members, raid, roster, message);


			
			roster.forEach(function (roster){
			
				var mGp = roster.gp;
				var mGpChar = roster.gpChar;
				var mGpShip = roster.gpShip;
				var pos = roster.titles;
				var level = roster.level;
				var name = roster.name;
				
				document.querySelector('#toons')
    .innerHTML += guildMemberHtml(mGp, mGpChar, mGpShip, pos, level, name);

			});
  
//	});
			      
    })
    .catch(function(error) {
        alert("Error getting documents: "+ error);
    });
	}
	
	function guildMemberHtml(mGp, mGpChar, mGpShip, pos, level, name){
$('#loading').hide();
  var html = '';
  html += '<li  class="list-group-item contact">';
    html += '<div class="toonlist">';
    
		   html += '<div style="text-align:center"> <p class="lead"><b><font color="black">'+name+'</font></b></p>';
		    if(pos === 2){
		   html += '<p>Member</p>';
		   } if(pos === 3){
		   html += '<p>Officer</p>';
		   }if(pos === 4){
		   html += '<p>Leader</p>';
		   }
		   html += '</div>';
		   html += '<div style="padding:5px;" >';
		   
		   html += '<div style="float:left">';
	            html += '<p><b><font color="black">Level: </font></b>'+level+'</p>';
                html += '<p><b><font color="black">GP: </font></b>'+mGp.toLocaleString()+'</p>';
		   html += '</div>';	
			
		   html += '<div style="float:right; text-align:right; " >';
	            html += '<p><b><font color="black">Character GP: </font></b>'+mGpChar.toLocaleString()+'</p>';
                html += '<p><b><font color="black">Ship GP: </font></b>'+mGpShip.toLocaleString()+'</p>';
		   html += '</div>';	
				
			html += '</div>';	
    html += '</div>';
  html += '</li>';
  return html;
  
}

	
	function guildHtml(guild, desc, gp, members, raid, roster, message){
		$('#loading').hide();
		var raid1 = [];
		if(JSON.stringify(raid).includes("rancor")){
			raid1.push("HPIT");
			}
		if(JSON.stringify(raid).includes("aat")){
			raid1.push("HAAT");
			}/*if(JSON.stringify(raid).includes("sith")){
			raid1.push("STR");
			}*/
		
		var html = '';
	html += '<header class="guild_header" >';
   
      html += '<p id="guild_name"><b><font color="white">'+ guild +'</font></b></p>';
html += '<div id="guild_info">';
html += '<p id="guild_desc"><b><font color="white">'+ desc +'</font></b></p>';
html += '<p id="guild_message"><b><font color="white">'+ message +'</font></b></p>';
html += '<p id="guild_raid"><b><font color="white">Current Raids: '+ raid1 +'</font></b></p>';
html += '<div id="guild_gp_members">';
				html += '<p id ="guild_gp">GP: '+gp.toLocaleString()+'</p>';
				html += '<p id="guild_members">Members: '+members+'</p>';
html += '</div>';
html += '</div>';

html += '</header>';

			return html;
	}
	
	

function loadList(){

 jtrArray =[], gkArray =[], hanArray = [], chewieArray =[], 
 epArray =[], r2Array=[], clsArray=[], thrawnArray=[], bb8Array=[],
 gmyArray=[];
 guildref.collection("Members")
  
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
			var toon1 = doc.data().Name;
			var lvl = doc.data().LVL;
			var gp = doc.data().GP;//.toLocaleString();
			toonsArray = [];
			legendArray = [];
			if(doc.data().GK){
			   toonsArray.push("GK");
			   gkArray.push("gk");
		   }if(doc.data().RaidHan){
			   toonsArray.push("Han Solo(Raid Han)");
			   hanArray.push("han");
		   }if(doc.data().GMY){
			   legendArray.push("Grand Master Yoda");
			   gmyArray.push("gmy");
		   }if(doc.data().EP){
			   legendArray.push("Emperor Palpatine");
			   epArray.push("ep");
		   }if(doc.data().R2D2){
			   legendArray.push("R2D2");
			   r2Array.push("r2");
		   }if(doc.data().CLS){
			   legendArray.push("Commander Luke Skywalker");
			   clsArray.push("cls");
		   }if(doc.data().THRAWN){
			   legendArray.push("Grand Admiral Thrawn");
			   thrawnArray.push("thrawn");
		   }if(doc.data().BB8){
			   legendArray.push("BB8");
			   bb8Array.push("bb8");
		   }if(doc.data().JTR){
			   legendArray.push("Rey(Jedi Training)");
			   jtrArray.push("rey");
		   }if(doc.data().CHEWIE){
			   legendArray.push("Chewbacca(OT)");
			   chewieArray.push("chewie");
		   }
		
		   getstrteam(toon1, toonsArray, lvl, gp, legendArray);
			//getNewToons(toon1, lvl, gp, doc.data().GK, doc.data().RaidHan);
	

	
	
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: "+doc.id, error);
    });
	
}


	







function strp4nihilus(member, toonsarray, legendArray,
										jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
										bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
										r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
										rtname,rtslvl, rtlvl, rtglvl, rtgp,
										reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp,
										
										lvl, gp){
	
					
	$(".list-group li .lead").on("click", function() {
	//var lvl = $(this).attr("data-lvl");
	//var gp = $(this).attr("data-gp");
	var name = $(this).html();
	var name2 = name.split(" ").join("_");
	window.location = 'player.html?memberName='+name2;
	//info(null, lvl, null, null, null, null, gp, name);
	});
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
	info(jtrslvl1, jtrlvl1, jtrglvl1, jtrzl1, jtrzu11, jtrzu21, jtrgp1, jtrName);
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
	var reygp1 = $(this).attr("data-reygp");
	var reyName = $(this).html();
	info(reyslvl1, reylvl1, reyglvl1, "", reyzu11, "", reygp1, reyName);
	});					
	// asajj click
	$(".list-group li .avname").on("click", function() {
	var avslvl1 = $(this).attr("data-avslvl");
	var avlvl1 = $(this).attr("data-avlvl");
	var avglvl1 = $(this).attr("data-avglvl");
	var avzl1 = $(this).attr("data-avzl");
	var avzu11 = $(this).attr("data-avzu1");
	var avgp1 = $(this).attr("data-avgp");
	var avName = $(this).html();
	info(avslvl1, avlvl1, avglvl1, avzl1, avzu11, null, avgp1, avName);
	});
	//mother talzin click
	$(".list-group li .mtname").on("click", function() {
	var mtslvl1 = $(this).attr("data-mtslvl");
	var mtlvl1 = $(this).attr("data-mtlvl");
	var mtglvl1 = $(this).attr("data-mtglvl");
	var mtzl1 = $(this).attr("data-mtzl");
	var mtzu11 = $(this).attr("data-mtzu1");
	var mtgp1 = $(this).attr("data-mtgp");
	var mtName = $(this).html();
	info(mtslvl1, mtlvl1, mtglvl1, mtzl1, mtzu11, null, mtgp1, mtName);
	});
	//daka click
	$(".list-group li .dakaname").on("click", function() {
	var dakaslvl1 = $(this).attr("data-dakaslvl");
	var dakalvl1 = $(this).attr("data-dakalvl");
	var dakaglvl1 = $(this).attr("data-dakaglvl");
	var dakazu11 = $(this).attr("data-dakazu1");
	var dakagp1 = $(this).attr("data-dakagp");
	var dakaName = $(this).html();
	info(dakaslvl1, dakalvl1, dakaglvl1,null, dakazu11, null, dakagp1, dakaName);
	});
	//zombie click
	$(".list-group li .nszname").on("click", function() {
	var nszslvl1 = $(this).attr("data-nszslvl");
	var nszlvl1 = $(this).attr("data-nszlvl");
	var nszglvl1 = $(this).attr("data-nszglvl");
	var nszgp1 = $(this).attr("data-nszgp");
	var nszName = $(this).html();
	info(nszslvl1, nszlvl1, nszglvl1, null, null, null, nszgp1, nszName);
	});
	//talia click
	$(".list-group li .talianame").on("click", function() {
	var taliaslvl1 = $(this).attr("data-raliaslvl");
	var talialvl1 = $(this).attr("data-talialvl");
	var taliaglvl1 = $(this).attr("data-taliaglvl");
	var taliazu11 = $(this).attr("data-taliazu1");
	var taliagp1 = $(this).attr("data-taliagp");
	var taliaName = $(this).html();
	
	info(taliaslvl1, talialvl1, taliaglvl1,null , taliazu11, null, taliagp1, taliaName);
	});
	
	
}






function strp2(Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										bb8zu1, bb8name, bb8glvl, bb8lvl, bb8slvl,
										r2zu1, r2zu2, r2name,r2glvl, r2lvl, r2slvl,
										rtname, rtglvl, rtlvl, rtslvl,
										reyname,reyglvl,reylvl,reyslvl
										
										/*avname,avslvl,avlvl,avglvl,avzl,avzu1,avgp,
			dakaname,dakaslvl,dakalvl,dakaglvl,dakazu1,dakagp,
			mtname,mtslvl,mtlvl,mtglvl,mtzl,mtzu1,mtgp,
			nszname, nszslvl,nszlvl,nszglvl,nszgp,
			talianame,taliaslvl,talialvl,taliaglvl,taliazu1,taliagp,*/
				
										){
											
  var html = '';
  html += '<li class="list-group-item contact" >';
    html += '<div class="toonlist"style="margin-left:5px; margin-bottom:5px;">';
     
    //html += '<p class="strjtr" ><b><font color="black">STR P1 Team: </font></b>'+strp1+'</p></div>';
    html += '<div><b><font color="black">STR P1 Team: </font></b>';
	if(Jtrname){
		if(Jtrlevel === 85 && Jtrstar === 7 && Jtrgear === 12 && JtrZeta){
	html +='<a class="jtrname" data-jtrslvl="'+Jtrstar+'" data-jtrlvl="'+Jtrlevel+'" data-jtrglvl="'+Jtrgear+'"data-jtrzl="'+JtrZeta+'" ><font color="#00FF00">'+Jtrname+'</font></a>, ';
	}else{
html +='<a class="jtrname" data-jtrslvl="'+Jtrstar+'" data-jtrlvl="'+Jtrlevel+'" data-jtrglvl="'+Jtrgear+'"data-jtrzl="'+JtrZeta+'" >'+Jtrname+'</a>, ';}
	
	}else{html +='<a class="nszname"><font color="#C01111">Rey(Jedi Training)</font></a>, ';}
	if(bb8name){
		if(bb8lvl === 85 && bb8slvl === 7 && bb8glvl === 12 && bb8zu1){
		html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'"><font color="#00FF00">'+bb8name+'</font></a>, ';
	}else{
	html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'">'+bb8name+'</a>, ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">BB-8</font></a>, ';}
	 
	if(r2name){
		if(r2lvl === 85 && r2slvl === 7 && r2glvl === 12 && r2zu2){
		html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'"><font color="#00FF00">'+r2name+'</font></a>, ';
	}else{
	html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'">'+r2name+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">R2-D2</font></a>, ';}
	if(rtname){
		if(rtlvl === 85 && rtslvl === 7 && rtglvl === 12){
		html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'"><font color="#00FF00">'+rtname+'</font></a>, ';
	}else{
	html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'">'+rtname+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">Resistance Trooper</font></a>, ';}
	if(reyname){
		if(reylvl === 85 && reyslvl === 7 && reyglvl === 12){
		html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" data-reyzu1="'+reyzu1+'"><font color="#00FF00">'+reyname+'</font></a>, ';
	}else{
	html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" data-reyzu1="'+reyzu1+'">'+reyname+'</a> ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">Rey(Scavenger)</font></a>, ';}
	html +=	'</div>';
// start p4 nihilus
	/*
	html += '<div><b><font color="black">STR P4 DN Team: </font></b>';
	if(avname){
		if(avlvl === 85 && avslvl === 7 && avglvl === 12 && avzl && avzu1){
	html +='<a class="avname" data-avslvl="'+avslvl+'" data-avlvl="'+avlvl+'" data-avglvl="'+avglvl+'"data-avzl="'+avzl+'" data-avzu1="'+avzu1+'" data-avgp="'+avgp+'"  ><font color="#00FF00">'+avname+'</font></a>, ';
	}else{
	html +='<a class="avname" data-avslvl="'+avslvl+'" data-avlvl="'+avlvl+'" data-avglvl="'+avglvl+'"data-avzl="'+avzl+'" data-avzu1="'+avzu1+'" data-avgp="'+avgp+'"  >'+avname+'</a>, ';}
	
	}else{html +='<a class="nszname"><font color="#C01111">Asajj Ventress</font></a>, ';}
	if(mtname){
		if(mtlvl === 85 && mtslvl === 7 && mtglvl === 12 && mtzu1){
		html +='<a class="mtname" data-mtslvl="'+mtslvl+'" data-mtlvl="'+mtlvl+'" data-mtglvl="'+mtglvl+'"data-mtzl="'+mtzl+'" data-mtzu1="'+mtzu1+'" data-mtgp="'+mtgp+'" ><font color="#00FF00">'+mtname+'</font></a>, ';
	}else{
	html +='<a class="mtname" data-mtslvl="'+mtslvl+'" data-mtlvl="'+mtlvl+'" data-mtglvl="'+mtglvl+'" data-mtzl="'+mtzl+'" data-mtzu1="'+mtzu1+'" data-mtgp="'+mtgp+'" >'+mtname+'</a>, ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">Mother Talzin</font></a>, ';}
	if(dakaname){
		if(dakalvl === 85 && dakaslvl === 7 && dakaglvl === 12 && dakazu1){
		html +='<a class="dakaname" data-dakaslvl="'+dakaslvl+'" data-dakalvl="'+dakalvl+'" data-dakaglvl="'+dakaglvl+'" data-dakazu1="'+dakazu1+'" data-dakagp="'+dakagp+'"><font color="#00FF00">'+dakaname+'</font></a>, ';
	}else{
	html +='<a class="dakaname" data-dakaslvl="'+dakaslvl+'" data-dakalvl="'+dakalvl+'" data-dakaglvl="'+dakaglvl+'" data-dakazu1="'+dakazu1+'" data-dakagp="'+dakagp+'">'+dakaname+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">Old Daka</font></a>, ';}
	if(talianame){
		if(talialvl === 85 && taliaslvl === 7 && taliaglvl === 12){
		html +='<a class="talianame" data-raliaslvl="'+taliaslvl+'" data-talialvl="'+talialvl+'" data-taliaglvl="'+taliaglvl+'"data-taliazu1="'+taliazu1+'" data-taliagp="'+taliagp+'"><font color="#00FF00">'+talianame+'</font></a>, ';
	}else{
	html +='<a class="talianame" data-raliaslvl="'+taliaslvl+'" data-talialvl="'+talialvl+'" data-taliaglvl="'+taliaglvl+'"data-taliazu1="'+taliazu1+'" data-taliagp="'+taliagp+'">'+talianame+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">Talia</font></a>, ';}
	if(nszname){
		if(nszslvl === 7){
		html +='<a class="nszname" data-nszslvl="'+nszslvl+'" data-nszlvl="'+nszlvl+'" data-nszglvl="'+nszglvl+'" data-nszgp="'+nszgp+'"><font color="#00FF00">'+nszname+'</font></a>, ';
	}else{
	html +='<a class="nszname" data-nszslvl="'+nszslvl+'" data-nszlvl="'+nszlvl+'" data-nszglvl="'+nszglvl+'"  data-nszgp="'+nszgp+'">'+nszname+'</a> ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">Nightsister Zombie</font></a>, ';}
	html +=	'</div>';
	*/
	
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
		}if(item.innerHTML === "Home"){
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
	$('.menu_list').hide();
	slideout.on('open', function() { 
	$('.guild_header').hide();
	$('.menu_list').show();
	});
	slideout.on('close', function() { 
	$('.guild_header').show();
	$('.menu_list').hide();
	});
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
	
	if(shard_loc === "all_members"){
		document.getElementById("header__title").innerHTML = "SWGoH";
		roster.forEach(function (roster){
				var mGp = roster.gp;
				var mGpChar = roster.gpChar;
				var mGpShip = roster.gpShip;
				var pos = roster.titles;
				var level = roster.level;
				var name = roster.name;
				document.querySelector('#toons')
    .innerHTML += guildMemberHtml(mGp, mGpChar, mGpShip, pos, level, name);
			});
	}if(shard_loc === "jtr"){
		document.getElementById("header__title").innerHTML = jtr.length;
		jtr.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "gk"){
		document.getElementById("header__title").innerHTML = gk.length;
		gk.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "raidhan"){
		document.getElementById("header__title").innerHTML = solo.length;
		solo.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "chewie"){
		document.getElementById("header__title").innerHTML = otchew.length;
		otchew.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "ep"){
		document.getElementById("header__title").innerHTML = ep.length;
		ep.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "r2"){
		document.getElementById("header__title").innerHTML = r2d2.length;
		r2d2.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "cls"){
		document.getElementById("header__title").innerHTML = cls.length;
		cls.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "thrawn"){
		document.getElementById("header__title").innerHTML = thrawn.length;
		thrawn.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "bb8"){
		document.getElementById("header__title").innerHTML = bb8.length;
		bb8.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "gmy"){
		document.getElementById("header__title").innerHTML = gmy.length;
		gmy.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "revan"){
		document.getElementById("header__title").innerHTML = revan.length;
		revan.forEach(function (roster){		
				var power = roster.power;
				var gearLvl = roster.gearlvl;
				var member = roster.member;
				var star = roster.star;
				var level = roster.level;		
				document.querySelector('#toons')
    .innerHTML += character(power, gearLvl, member, star, level);
			});
	}if(shard_loc === "strp1"){
		document.getElementById("header__title").innerHTML = "STR P1";
		strP1.forEach(function (roster){		
			var memName = roster.member;
			var memJtr = roster.teams.strJtr;
			var memBb8 = roster.teams.strBb8;
			var memR2 = roster.teams.strR2;
			var memRt = roster.teams.strRt;
			var memRey = roster.teams.strRey;
			
			var JtrZeta = false,  Jtrname, Jtrgear, Jtrlevel, Jtrstar;
			memJtr.forEach(function (roster){		
			Jtrname = roster.toon;
			Jtrgear = roster.gearlvl;
			Jtrlevel = roster.level;
			Jtrstar = roster.star;
			var skills = roster.skills;
			skills.forEach(function (roster){		
				if(roster.nameKey === "Inspirational Presence"){
					JtrZeta = roster.isZeta;
					}	});});if(JtrZeta){
					JtrZeta = JtrZeta;
					}else{
					JtrZeta = false;
					}
					
			var BZeta = false,  Bb8name, Bb8gear, Bb8level, Bb8star;
			memBb8.forEach(function (roster){		
			Bb8name = roster.toon;
			Bb8gear = roster.gearlvl;
			Bb8level = roster.level;
			Bb8star = roster.star;
			var skills = roster.skills;
			skills.forEach(function (roster){		
				if(roster.nameKey === "Roll with the Punches"){
					BZeta = roster.isZeta;
					}	});});if(BZeta){
					BZeta = BZeta;
					}else{
					BZeta = false;
					}
					
					var R2Zeta1 = false, R2Zeta2 = false,  R2name, R2gear, R2level, R2star;
			memR2.forEach(function (roster){		
			R2name = roster.toon;
			R2gear = roster.gearlvl;
			R2level = roster.level;
			R2star = roster.star;
			var skills = roster.skills;
			skills.forEach(function (roster){		
				if(roster.nameKey === "Combat Analysis"){
					R2Zeta = roster.isZeta;
					}if(roster.nameKey === "Number Crunch"){
					R2Zeta2 = roster.isZeta;
					}	
							});});if(R2Zeta){
					R2Zeta = R2Zeta;
					}else{
					R2Zeta = false;
					}if(R2Zeta2){
					R2Zeta2 = R2Zeta2;
					}else{
					R2Zeta2 = false;
					}

					var Rtname, Rtgear, Rtlevel, Rtstar;
			memRt.forEach(function (roster){		
			Rtname = roster.toon;
			Rtgear = roster.gearlvl;
			Rtlevel = roster.level;
			Rtstar = roster.star;
		});

					var Reyname, Reygear, Reylevel, Reystar;
			memRey.forEach(function (roster){		
			Reyname = roster.toon;
			Reygear = roster.gearlvl;
			Reylevel = roster.level;
			Reystar = roster.star;
			});
if(Jtrname === undefined){
	Jtrname = "";Jtrstar =""; Jtrlevel = "";Jtrgear = "";JtrZeta = "";
	}if(Bb8name === undefined){
	Bb8name = "";Bb8star =""; Bb8level = "";Bb8gear = "";Bb8Zeta = "";
	}if(R2name === undefined){
	R2name = "";R2star =""; R2level = "";R2gear = "";R2Zeta = "";
	}if(Rtname === undefined){
	Rtname = "";Rtstar =""; Rtlevel = "";Rtgear = "";RtZeta = "";
	}if(Reyname === undefined){
	Reyname = "";Reystar =""; Reylevel = "";Reygear = "";ReyZeta = "";
	}
	
	
	document.querySelector('#toons').innerHTML += strp1(memName, Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										BZeta,  Bb8name, Bb8gear, Bb8level, Bb8star,
										R2Zeta1, R2Zeta2,  R2name, R2gear, R2level, R2star,
										Rtname, Rtgear, Rtlevel, Rtstar,
										Reyname, Reygear, Reylevel, Reystar
								
										);
										
				strp4nihilus();
			});
	}
		
			if(shard_loc === "name"){
reorder_guild_members(shard_loc, "asc");
}if(shard_loc === "gp"){
reorder_guild_members(shard_loc, "desc");
}else{
  
	}
	$('#loading').hide();
	}
	
	function strp1(memName,
										Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										bb8zu1, bb8name, bb8glvl, bb8lvl, bb8slvl,
										r2zu1, r2zu2, r2name,r2glvl, r2lvl, r2slvl,
										rtname, rtglvl, rtlvl, rtslvl,
										reyname,reyglvl,reylvl,reyslvl
										
										/*avname,avslvl,avlvl,avglvl,avzl,avzu1,avgp,
			dakaname,dakaslvl,dakalvl,dakaglvl,dakazu1,dakagp,
			mtname,mtslvl,mtlvl,mtglvl,mtzl,mtzu1,mtgp,
			nszname, nszslvl,nszlvl,nszglvl,nszgp,
			talianame,taliaslvl,talialvl,taliaglvl,taliazu1,taliagp,*/
				
										){
											
  var html = '';
  html += '<li class="list-group-item-str" >';
    html += '<div class="toonlist"style="margin-left:5px; margin-bottom:5px;">';
    
    html += '<div style="text-align:center"><b><font color="black">'+memName+'</font></b>';
	if(Jtrname){
		if(Jtrlevel === 85 && Jtrstar === 7 && Jtrgear === 12 && JtrZeta){
	html +='<p class="jtrname" data-jtrslvl="'+Jtrstar+'" data-jtrlvl="'+Jtrlevel+'" data-jtrglvl="'+Jtrgear+'"data-jtrzl="'+JtrZeta+'" ><font color="#00FF00">'+Jtrname+'</font></p>';
	}else{
html +='<p class="jtrname" data-jtrslvl="'+Jtrstar+'" data-jtrlvl="'+Jtrlevel+'" data-jtrglvl="'+Jtrgear+'"data-jtrzl="'+JtrZeta+'" >'+Jtrname+'</p> ';}
	
	}else{html +='<p class="nszname"><font color="#C01111">Rey(Jedi Training)</font></p> ';}

	if(bb8name){
		if(bb8lvl === 85 && bb8slvl === 7 && bb8glvl === 12 && bb8zu1){
		html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'"><font color="#00FF00">'+bb8name+'</font></a>, ';
	}else{
	html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'">'+bb8name+'</a>, ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">BB-8</font></a>, ';}
	 
	if(r2name){
		if(r2lvl === 85 && r2slvl === 7 && r2glvl === 12 && r2zu2){
		html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'"><font color="#00FF00">'+r2name+'</font></a>, ';
	}else{
	html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'">'+r2name+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">R2-D2</font></a>, ';}
	
		if(rtname){
		if(rtlvl === 85 && rtslvl === 7 && rtglvl === 12){
		html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'"><font color="#00FF00">'+rtname+'</font></a>, ';
	}else{
	html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'">'+rtname+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">Resistance Trooper</font></a>, ';}

	if(reyname){
		if(reylvl === 85 && reyslvl === 7 && reyglvl === 12){
		html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" ><font color="#00FF00">'+reyname+'</font></a>, ';
	}else{
	html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" >'+reyname+'</a> ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">Rey(Scavenger)</font></a>, ';}
  /*html +=	'</div>';*/
	html += '</div>';
  	html += '</li>';
  return html;
  


}
	
	
	
	function character(power, gearLvl, member, toonslvl, level){
  //console.log( toons );
  var html = '';
  html += '<li  class="list-group-item contact">';
    html += '<div class="toonlist">';
   
		   html += '<div style="text-align:center"> <p class="lead"><b><font color="black">'+member+'</font></b></p>';
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
	            html += '<p><b><font color="black">Level: </font></b>'+level+'</p>';
                html += '<p><b><font color="black">Gear Lvl: </font></b>'+gearLvl+'</p>';
				html += '<p><b><font color="black">Power: </font></b>'+power.toLocaleString()+'</p>';
		   html += '</div>';	
		/*	
		   html += '<div style="float:right; text-align:right; " >';
	            html += '<p><b><font color="black">Speed: </font></b>'+toonspeed+'</p>';
                html += '<p><b><font color="black">Health: </font></b>'+toonhealth+'</p>';
				html += '<p><b><font color="black">Protection: </font></b>'+toonprotection+'</p>';
		   html += '</div>';	
				*/
			html += '</div>';	
    html += '</div>';
  html += '</li>';
  return html;
  
}
	
	function filterList(shardLoc){
		toonsArray = [];
		legendArray =[];
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
		   }if(doc.data().GMY){
			   legendArray.push("Grand Master Yoda");
		   }if(doc.data().EP){
			   legendArray.push("Emperor Palpatine");
		   }if(doc.data().R2D2){
			   legendArray.push("R2D2");
		   }if(doc.data().CLS){
			   legendArray.push("Commander Luke Skywalker");
		   }if(doc.data().THRAWN){
			   legendArray.push("Grand Admiral Thrawn");
		   }if(doc.data().BB8){
			   
		   }if(doc.data().JTR){
			   legendArray.push("Rey(Jedi Training)");
		   }if(doc.data().CHEWIE){
			   legendArray.push("Chewbacca(OT)");
		   }
			document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject2(toon1, toonsArray, lvl, gp, legendArray);
	
	toonsArray = [];
	legendArray = [];
	p1jtr = "";

        });
		$('#loading').hide();
		
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
		
	}
	
	
function info(slvl, lvl, glvl, zl, zu1, zu2, gp, name){
	$('#my_popup').popup({
  outline: true, // optional
  focusdelay: 400, // optional
  vertical: 'center' //optional
});
	$('#my_popup').popup('show');

	document.getElementById('name').innerHTML = name;
	document.getElementById('name').style.fontWeight = 'bold';
	document.getElementById('name').style.color = 'black';
	if(slvl){
	document.getElementById('slvl').innerHTML = "Stars: " +slvl;
	document.getElementById('slvl').style.display = 'block';}else{document.getElementById('slvl').style.display = 'none';}
	document.getElementById('lvl').innerHTML = "Lvl: "+ lvl;
	if(glvl){
	document.getElementById('glvl').innerHTML = "Gear Lvl: "+ glvl;
	document.getElementById('glvl').style.display = 'block';}else{document.getElementById('glvl').style.display = 'none';}
	if(zl){
	document.getElementById('zl').innerHTML = "Lead: Zeta";
	document.getElementById('zl').style.display = 'block';}else{document.getElementById('zl').style.display = 'none';}
	if(zu1){
	document.getElementById('zu1').innerHTML = "Unique 1: Zeta";
	document.getElementById('zu1').style.display = 'block';}else{document.getElementById('zu1').style.display = 'none';}
	if(zu2){
	document.getElementById('zu2').innerHTML = "Unique 2: Zeta";
	document.getElementById('zu2').style.display = 'block';}else{document.getElementById('zu2').style.display = 'none';}
	document.getElementById('gp').innerHTML = "GP: "+ gp;
	
	
}	
	

function reorder_guild_members(item, order){
	var rosterReorder = roster;
	document.getElementById("header__title").innerHTML = "SWGoH";
	if(order === "asc"){
		rosterReorder.sort(function(a,b) {return (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0);} ); 
		}if(order === "desc"){
		rosterReorder.sort(function(a,b) {return (a[item] < b[item]) ? 1 : ((b[item] < a[item]) ? -1 : 0);} ); 
		}
 
			rosterReorder.forEach(function (roster){
				var mGp = roster.gp.toLocaleString();
				var mGpChar = roster.gpChar.toLocaleString();
				var mGpShip = roster.gpShip.toLocaleString();
				var pos = roster.guildMemberLevel;
				var level = roster.level;
				var name = roster.name;
				document.querySelector('#toons')
    .innerHTML += guildMemberHtml(mGp, mGpChar, mGpShip, pos, level, name);
});
}
	
	function contactHtmlFromObject2(toons, toonsArray, lvl, gp,legendArray
										){
											
  //console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact" >';
    html += '<div class="toonlist"style="margin-left:5px; margin-bottom:5px;">';
      
    html += '<p>'+'<div class="img_container"style="display:none">'
	 	 //+ '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
	  	 + '</div>'+'</p>';
	html += '<div> <p class="lead" data-lvl="'+lvl+'"data-gp="'+gp+'" >'+toons+'</p>';
	html += '<p><b><font color="black">7* Raid Characters: </font></b>'+toonsArray+'</p>';
	html += '<p><b><font color="gold">Legendary Characters: </font></b>'+legendArray+'</p>';
    //html += '<p class="strjtr" ><b><font color="black">STR P1 Team: </font></b>'+strp1+'</p></div>';
	html +=	'</div>';
	
	
	html += '</div>';
  	html += '</li>';
  return html;
  
}
