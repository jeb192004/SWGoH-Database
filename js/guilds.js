/*var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
    return !val ? '':val[1];
};
	//var guildName = urlParam('guildName').replace(/_/g, ' ');
	var guildName = "Relentless";*/


	$(document).ready(function() {

      // Initialize the plugin
      $('#my_popup').popup();

    });
	
var toonsArray = [], jtr, gk, solo, otchew,
ep, r2d2, cls, thrawn, bb8, gmy, revan, strP1, strP4DN;
var strp1jtr = [];


/*
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
*/

				var guildArray = [];
				var guildRosterArray = [];
				//localStorage.clear();
var counted = 0;
//hstr jtr
				var hstrJtr = [];
//legendary characters
				var legendaryJtr = [], legendaryBb8 = [], legendaryR2 = [];

var guildArrayLs = JSON.parse(localStorage.getItem("guildArray"));
var guildRosterArrayLs = JSON.parse(localStorage.getItem("guildRosterArray"));
var hstrJtrLs = JSON.parse(localStorage.getItem("hstrJtr"));
var legendaryJtrLs = JSON.parse(localStorage.getItem("legendaryJtr"));
var legendaryBb8Ls = JSON.parse(localStorage.getItem("legendaryBb8"));
var legendaryR2Ls = JSON.parse(localStorage.getItem("legendaryR2"));

				
if(guildArrayLs!=null && guildArrayLs.length>0 && guildRosterArrayLs!=null && guildRosterArrayLs.length>0){
				build_list(guildArrayLs, guildRosterArrayLs);
				
}else{

				
				
				fetch('https://api.swgoh.help/swgoh/guilds/676714695')
			  .then(response => response.json()) 
				.then(data => {
				 // Do what you want with your data
				
				build_list(data, data[0].roster);
				
				 }) .catch(err => { 
				alert('An error ocurred' + err); 
				});
				
}			
				
var hstrp1 = [];
				function build_list(guild_obj, roster){
				var guild = guild_obj[0];
				
				
				var gName = guild.name;
				var gDesc = guild.desc;
				var gMembers = guild.members;
				var gStatus = guild.status;
				var gRequired = guild.required;
				var gBannerColor = guild.bannerColor;
				var gBannerLogo = guild.bannerLogo;
				var gMessage = guild.message;
				var gGp = guild.gp;
				var gRaid = guild.raid;
				
				if(guildArrayLs!=null && guildArrayLs.length>0){}else{
				guildArray.push({ name:gName, desc:gDesc, members:gMembers, status: gStatus,	 required: gRequired, 
				bannerColor: gBannerColor, bannerLogo: gBannerLogo, message: gMessage, gp: gGp, raid:gRaid });
				localStorage.setItem("guildArray",JSON.stringify(guildArray));
				}
				document.querySelector('#header_container')
				.innerHTML += guildHtml(gName, gDesc, gGp, gMembers, JSON.stringify(gRaid), gMessage);
				
				
				if(guildRosterArrayLs!=null && guildRosterArrayLs.length>0){
					roster.forEach(function (gRoster){
			
				var allyCode = gRoster.allyCode;
				var mGp = gRoster.gp;
				var mGpChar = gRoster.gpChar;
				var mGpShip = gRoster.gpShip;
				var mLevel = gRoster.level;
				var mName = gRoster.name;
				var mMemberLevel = gRoster.guildMemberLevel;
				
				document.querySelector('#toons')
				.innerHTML += guildMemberHtml(mGp, mGpChar, mGpShip, mLevel, mName, mMemberLevel);
				$('#loading').hide();
				});
						}else{
					var rosterLength = roster.length;
					roster.forEach(function (gRoster){
				
				var allyCode = gRoster.allyCode;
				var mGp = gRoster.gp;
				var mGpChar = gRoster.gpChar;
				var mGpShip = gRoster.gpShip;
				var mLevel = gRoster.level;
				var mName = gRoster.name;
				var mMemberLevel = gRoster.guildMemberLevel;
				
				get_guild_toons(allyCode, rosterLength);
				
				
				
				guildRosterArray.push({ name:mName, guildMemberLevel:mMemberLevel, level:mLevel, gpShip: mGpShip, 
				gpChar: mGpChar, gp: mGp, message: gMessage, gp: gGp, allyCode:allyCode });
				
				document.querySelector('#toons')
				.innerHTML += guildMemberHtml(mGp, mGpChar, mGpShip, mLevel, mName, mMemberLevel);
				
				
				
				 
				});
				
				
				
				localStorage.setItem("guildRosterArray",JSON.stringify(guildRosterArray));
				
				
				
				
				}
				
				
				
				}
				var n =0;
				function get_guild_toons(allyCode, length){
					var url = 'https://api.swgoh.help/swgoh/units/'+ allyCode;
				fetch(url)
			  .then(response => response.json()) 
				.then(data => {
				 // Do what you want with your data
				var jtrHstrArray = [], bb8HstrArray = [], r2HstrArray = [], rtHstrArray = [], reyHstrArray = [];
				
				var player1;
				var jtr = data.REYJEDITRAINING;
				if(jtr === undefined || jtr.length == 0){}else{
				jtrHstrArray.push({player:player(jtr), gp:gp(jtr), starLevel:starLevel(jtr), level:level(jtr), gearLevel:gearLevel(jtr), zetas:zetas(jtr)});
				legendaryJtr.push({player:player(jtr), gp:gp(jtr), starLevel:starLevel(jtr), level:level(jtr), gearLevel:gearLevel(jtr), zetas:zetas(jtr)});
				player1 = player(jtr);
				}
				var bb8 = data.BB8;
				if(bb8 === undefined || bb8.length == 0){}else{
				bb8HstrArray.push({player:player(bb8), gp:gp(bb8), starLevel:starLevel(bb8), level:level(bb8), gearLevel:gearLevel(bb8), zetas:zetas(bb8)});
				legendaryBb8.push({player:player(bb8), gp:gp(bb8), starLevel:starLevel(bb8), level:level(bb8), gearLevel:gearLevel(bb8), zetas:zetas(bb8)});
				player1 = player(bb8);
				}
				var r2 = data.R2D2_LEGENDARY;
				if(r2 === undefined || r2.length == 0){}else{
				r2HstrArray.push({player:player(r2), gp:gp(r2), starLevel:starLevel(r2), level:level(r2), gearLevel:gearLevel(r2), zetas:zetas(r2)});
				legendaryR2.push({player:player(r2), gp:gp(r2), starLevel:starLevel(r2), level:level(r2), gearLevel:gearLevel(r2), zetas:zetas(r2)});
				player1 = player(r2);
				}
				var rt = data.RESISTANCETROOPER;
				if(rt === undefined || rt.length == 0){}else{
				rtHstrArray.push({player:player(rt), gp:gp(rt), starLevel:starLevel(rt), level:level(rt), gearLevel:gearLevel(rt), zetas:zetas(rt)});
				player1 = player(rt);
				}
				var rey = data.REY;
				if(rey === undefined || rey.length == 0){}else{
				reyHstrArray.push({player:player(rey), gp:gp(rey), starLevel:starLevel(rey), level:level(rey), gearLevel:gearLevel(rey), zetas:zetas(rey)});
				player1 = player(rey);
				}
				hstrJtr.push({player: player1, teams:{ jtrHstrArray, bb8HstrArray, r2HstrArray, rtHstrArray, reyHstrArray }})
				localStorage.setItem("hstrJtr",JSON.stringify(hstrJtr));
				localStorage.setItem("legendaryJtr",JSON.stringify(legendaryJtr));
				localStorage.setItem("legendaryBb8",JSON.stringify(legendaryBb8));
				localStorage.setItem("legendaryR2",JSON.stringify(legendaryR2));
				
				guildArrayLs = guildArray;
				guildRosterArrayLs = guildRosterArray;
				hstrJtrLs = hstrJtr;
				legendaryJtrLs = legendaryJtr;
				legendaryBb8Ls = legendaryBb8;
				legendaryR2Ls = legendaryR2;
				
				
			  n++;
				
				if(length === n){
				$('#loading').hide();
				}
				 }) .catch(err => { 
				alert('An error ocurred' + err); 
				});
				
				
				}
				function player(data){
					var player;
					if(data[0].player){
						player = data[0].player;}else{player = "";
						}
						return player;
						}
				function gp(data){
					var gp;
					if(data[0].gp){
						gp = data[0].gp;}else{gp = "";
						}
						return gp;
						}
				function starLevel(data){
					var starLevel;
					if(data[0].starLevel){
						starLevel = data[0].starLevel;}else{starLevel ="";
						}
						return starLevel;
					}
					function level(data){
					var level;
					if(data[0].level){
						level = data[0].level;}else{level = "";
						}
						return level;
					}
					function gearLevel(data){
					var gearLevel;
					if(data[0].gearLevel){
						gearLevel = data[0].gearLevel;}else{gearLevel = "";
						}
						return gearLevel;
					}
					function zetas(data){
					var zetas;
					if(data[0].zetas){
						zetas = data[0].zetas;}else{zetas = "";
						}
						return zetas;
					}
				
				function guildMemberHtml(mGp, mGpChar, mGpShip, level, name, memlevel){
					
					var html = '';
					html += '<li  class="list-group-item contact">';
					html += '<div class="toonlist">';
					html += '<div style="text-align:center"> <p class="lead"><b><font color="black">'+name+'</font></b></p>';
						if(memlevel === 2){
							html += '<p>Member</p>';
							} if(memlevel === 3){
								html += '<p>Officer</p>';
								}if(memlevel === 4){
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
//guild header html
				function guildHtml(gName, gDesc, gGp, gMembers, gRaid, gMessage){
				
				var html = '';
				html += '<header class="guild_header" >';
				html += '<p id="guild_name"><b><font color="white">'+ gName +'</font></b></p>';
				html += '<div id="guild_info">';
				html += '<p id="guild_desc"><b><font color="white">'+ gDesc +'</font></b></p>';
				html += '<p id="guild_message"><b><font color="white">'+ gMessage +'</font></b></p>';
				html += '<p id="guild_raid"><b><font color="white">Current Raids: '+ gRaid +'</font></b></p>';
				html += '<div id="guild_gp_members">';
				html += '<p id ="guild_gp">GP: '+gGp.toLocaleString()+'</p>';
				html += '<p id="guild_members">Members: '+gMembers+'</p>';
				html += '</div>';
				html += '</div>';
				html += '</header>';
				
				return html;
				}



function shard_loc_item(shard_loc){
	$('#loading').show();
	$('#toons').empty();
	
	var shard1 = shard_loc.innerText || shard_loc.textContent;
	
	
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
		document.getElementById("header__title").innerHTML = legendaryJtrLs.length;
		legendaryJtrLs.forEach(function (roster){		
				var power = roster.gp;
				var gearLvl = roster.gearLevel;
				var member = roster.player;
				var star = roster.starLevel;
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
		document.getElementById("header__title").innerHTML = legendaryR2Ls.length;
		legendaryR2Ls.forEach(function (roster){		
				var power = roster.gp;
				var gearLvl = roster.gearLevel;
				var member = roster.player;
				var star = roster.starLevel;
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
		document.getElementById("header__title").innerHTML = legendaryBb8Ls.length;
		legendaryBb8Ls.forEach(function (roster){		
				var power = roster.gp;
				var gearLvl = roster.gearLevel;
				var member = roster.player;
				var star = roster.starLevel;
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
		var jtr = hstrJtrLs;
		
		
		document.getElementById("header__title").innerHTML = "STR P1";
		jtr.forEach(function (roster){		
			//alert(JSON.stringify(roster));
			var player = roster.player;
			var team = roster.teams;
			var teamJtr = team.jtrHstrArray[0];
			var teamBb8 = team.bb8HstrArray[0];
			var teamR2 = team.r2HstrArray[0];
			var teamRt = team.rtHstrArray[0];
			var teamRey = team.reyHstrArray[0];
			document.querySelector('#toons')
				.innerHTML += strp1(player, teamJtr, teamBb8, teamR2, teamRt, teamRey);
				
			});
			
	}
	if(shard_loc === "strp4dn"){
		
			
			document.getElementById("header__title").innerHTML = "HSTR P4 DN: " + strp4dnready.length;
	}
	
	
		
			if(shard_loc === "name"){
reorder_guild_members(shard_loc, "asc");
}if(shard_loc === "gp"){
reorder_guild_members(shard_loc, "desc");
}else{
  
	}
	$('#loading').hide();
	}
	



function strp1(player, teamJtr, teamBb8, teamR2, teamRt, teamRey){
	var teamCount = 0;
  var html = '';
  html += '<li class="list-group-item-str" >';
    html += '<div class="toonlist"style="margin-left:5px; margin-bottom:5px;">';
    
    html += '<div style="text-align:center"><b><font color="black">'+player+'</font></b>';
/*******
JTR HTML
*******/
if(teamJtr === undefined || teamJtr.length == 0){
	html +='<p class="nszname"><font color="#C01111">Rey (Jedi Training)</font></p> ';
		}else{
			var gp = teamJtr.gp;
			var starLevel = teamJtr.starLevel;
			var level = teamJtr.level;
			var gearLevel = teamJtr.gearLevel;
			var zetas = teamJtr.zetas;
			 //alert(gp + ': ' + starLevel + ': ' + level + ': ' + gearLevel + ': ' + zetas);
		if(level === 85 && starLevel === 7 && gearLevel >= 11 && zetas ){
	html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" ><font color="#00FF00">Rey (Jedi Training)</font></p>';
	teamCount++;
	}else{
html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" >Rey (Jedi Training)</p> ';}
}
/******
BB8 HTML
******/
		if(teamBb8 === undefined || teamBb8.length == 0){
	html +='<p class="nszname"><font color="#C01111">BB8</font></p> ';
		}else{
			var gp = teamBb8.gp;
			var starLevel = teamBb8.starLevel;
			var level = teamBb8.level;
			var gearLevel = teamBb8.gearLevel;
			var zetas = teamBb8.zetas;
			 //alert(gp + ': ' + starLevel + ': ' + level + ': ' + gearLevel + ': ' + zetas);
		if(level === 85 && starLevel === 7 && gearLevel >= 11 && zetas ){
	html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" ><font color="#00FF00">BB8</font></p>';
	teamCount++;
	}else{
html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" >BB8</p> ';}
}
/******
R2D2 HTML
******/
		if(teamR2 === undefined || teamR2.length == 0){
	html +='<p class="nszname"><font color="#C01111">R2-D2</font></p> ';
		}else{
			var gp = teamR2.gp;
			var starLevel = teamR2.starLevel;
			var level = teamR2.level;
			var gearLevel = teamR2.gearLevel;
			var zetas = teamR2.zetas;
			 //alert(gp + ': ' + starLevel + ': ' + level + ': ' + gearLevel + ': ' + zetas);
		if(level === 85 && starLevel === 7 && gearLevel >= 11 && zetas ){
	html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" ><font color="#00FF00">R2-D2</font></p>';
	teamCount++;
	}else{
html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" >R2-D2</p> ';}
}
/******
RESISTANCE TROOPER HTML
******/
		if(teamRt === undefined || teamRt.length == 0){
	html +='<p class="nszname"><font color="#C01111">Resistance Trooper</font></p> ';
		}else{
			var gp = teamRt.gp;
			var starLevel = teamRt.starLevel;
			var level = teamRt.level;
			var gearLevel = teamRt.gearLevel;
			var zetas = teamRt.zetas;
			 //alert(gp + ': ' + starLevel + ': ' + level + ': ' + gearLevel + ': ' + zetas);
		if(level === 85 && starLevel === 7 && gearLevel >= 11 && zetas ){
	html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" ><font color="#00FF00">Resistance Trooper</font></p>';
	teamCount++;
	}else{
html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" >Resistance Trooper</p> ';}
}
/******
REY HTML
******/
		if(teamBb8 === undefined || teamBb8.length == 0){
	html +='<p class="nszname"><font color="#C01111">Rey (Scavenger)</font></p> ';
		}else{
			var gp = teamRey.gp;
			var starLevel = teamRey.starLevel;
			var level = teamRey.level;
			var gearLevel = teamRey.gearLevel;
			var zetas = teamRey.zetas;
			 //alert(gp + ': ' + starLevel + ': ' + level + ': ' + gearLevel + ': ' + zetas);
		if(level === 85 && starLevel === 7 && gearLevel >= 11 && zetas ){
	html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" ><font color="#00FF00">Rey (Scavenger)</font></p>';
	teamCount++;
	}else{
html +='<p class="jtrname" data-jtrslvl="'+starLevel+'" data-jtrlvl="'+level+'" data-jtrglvl="'+gearLevel+'"data-jtrzl="'+zetas+'" >Rey (Scavenger)</p> ';}
}


if(teamCount ===5){
	counted++;
	}
document.getElementById("header__title").innerHTML = "HSTR P1: " + counted;
		html += '</div>';
		html += '</div>';
  	html += '</li>';
	
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
/*
  document.querySelector('.toggle-button').addEventListener('click', function() {
    slideout.toggle();
  });*/
	
  
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


	
function strp1count(memName,
										Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										bb8zu1, bb8name, bb8glvl, bb8lvl, bb8slvl,
										r2zu1, r2zu2, r2name,r2glvl, r2lvl, r2slvl,
										rtname, rtglvl, rtlvl, rtslvl,
										reyname,reyglvl,reylvl,reyslvl,
								    strp1team
								
										){
											if(memName ==="SteveMurch"){
					console.log(Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										bb8zu1, bb8name, bb8glvl, bb8lvl, bb8slvl,
										r2zu1, r2zu2, r2name,r2glvl, r2lvl, r2slvl,
										rtname, rtglvl, rtlvl, rtslvl,
										reyname,reyglvl,reylvl,reyslvl);
					}
  	if(Jtrname){
		if(Jtrlevel === 85 && Jtrstar === 7 && Jtrgear >= 11 && JtrZeta){
		strp1team.push(1);
	}}if(bb8name){
		if(bb8lvl === 85 && bb8slvl === 7 && bb8glvl >= 11 && bb8zu1){
			strp1team.push(1);
		}}if(r2name){
		if(r2lvl === 85 && r2slvl === 7 && r2glvl >= 11 && r2zu1&& r2zu2){
			strp1team.push(1);
			}}if(rtname){
		if(rtlvl === 85 && rtslvl === 7 && rtglvl >= 11){
			strp1team.push(1);
		}}if(reyname){
		if(reylvl === 85 && reyslvl === 7 && reyglvl >= 11){
			strp1team.push(1);
	}}	
	}	
	function strp4dncount(memName,
										Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										bb8zu1, bb8name, bb8glvl, bb8lvl, bb8slvl,
										r2zu1, r2zu2, r2name,r2glvl, r2lvl, r2slvl,
										rtname, rtglvl, rtlvl, rtslvl,
										reyname,reyglvl,reylvl,reyslvl,
							     	AVZeta2,	strp4dnteam
								
										){
											
			if(Jtrname){
		if(Jtrlevel === 85 && Jtrstar === 7 && Jtrgear >= 11 && JtrZeta && AVZeta2){
		strp4dnteam.push(1);
		}}
	if(bb8name){
		if(bb8lvl === 85 && bb8slvl === 7 && bb8glvl >= 11 && bb8zu1){
			strp4dnteam.push(1);
		}}
	if(r2name){
		if(r2lvl === 85 && r2slvl === 7 && r2glvl >= 11){
			strp4dnteam.push(1);
		}}	
		if(rtname){
		if(rtlvl === 85 && rtslvl === 7 && rtglvl >= 11){
			strp4dnteam.push(1);
			}}
	if(reyname){
		if(reylvl === 85 && reyslvl === 7 && reyglvl >= 11){
			strp4dnteam.push(1);
			}	}
	}	
	
	
	
	function strp4dn(memName,
										Jtrname, Jtrstar, Jtrlevel, Jtrgear,JtrZeta,
										bb8zu1, bb8name, bb8glvl, bb8lvl, bb8slvl,
										r2zu1, r2zu2, r2name,r2glvl, r2lvl, r2slvl,
										rtname, rtglvl, rtlvl, rtslvl,
										reyname,reyglvl,reylvl,reyslvl,
										team,
										AVZeta2
				
										){
											if(team === "JTR"){
												var leader = "Rey(Jedi Training)";
												var second = "BB8";
												var third = "R2D2";
												var fourth = "Resistance Trooper";
												var fith = "Rey(Scavenger)";
												}if(team === "NS"){
													var leader = "Asajj Ventress";
													var second = "Mother Talzin";
													var third = "Talia";
													var fourth = "Nightsister Zombie"; 
													var fith = "Old Daka";
													}
  var html = '';
  html += '<li class="list-group-item-str" >';
    html += '<div class="toonlist"style="margin-left:5px; margin-bottom:5px;">';
    
    html += '<div style="text-align:center"><b><font color="black">'+memName+'</font></b>';
	if(Jtrname){
		if(Jtrlevel === 85 && Jtrstar === 7 && Jtrgear >= 11 && JtrZeta && AVZeta2){
		
		html +='<p class="jtrname" data-jtrslvl="'+Jtrstar+'" data-jtrlvl="'+Jtrlevel+'" data-jtrglvl="'+Jtrgear+'"data-jtrzl="'+JtrZeta+'" ><font color="#00FF00">'+Jtrname+'</font></p>';
		}
	else{
html +='<p class="jtrname" data-jtrslvl="'+Jtrstar+'" data-jtrlvl="'+Jtrlevel+'" data-jtrglvl="'+Jtrgear+'"data-jtrzl="'+JtrZeta+'" >'+Jtrname+'</p> ';}
	
	}else{html +='<p class="nszname"><font color="#C01111">'+leader+'</font></p> ';}

	if(bb8name){
		if(bb8lvl === 85 && bb8slvl === 7 && bb8glvl >= 11 && bb8zu1){
			
		html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'"><font color="#00FF00">'+bb8name+'</font></a>, ';
	}else{
	html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'">'+bb8name+'</a>, ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">'+second+'</font></a>, ';}
	 
	if(r2name){
		if(r2lvl === 85 && r2slvl === 7 && r2glvl >= 11){
			
		html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'"><font color="#00FF00">'+r2name+'</font></a>, ';
	
	}else{
	html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'">'+r2name+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">'+third+'</font></a>, ';}
	
		if(rtname){
		if(rtlvl === 85 && rtslvl === 7 && rtglvl >= 11){
			
		html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'"><font color="#00FF00">'+rtname+'</font></a>, ';
	}else{
	html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'">'+rtname+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">Resistance Trooper</font></a>, ';}

	if(reyname){
		if(reylvl === 85 && reyslvl === 7 && reyglvl >= 11){
			
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
	if(lvl){
	document.getElementById('lvl').innerHTML = "Lvl: "+ lvl;
	document.getElementById('lvl').style.display = 'block';}else{document.getElementById('lvl').style.display = 'none';}
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
	var rosterReorder = guildRosterArrayLs;
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
