// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const firebase = require ("firebase");
//var $ = require('jquery');
var jsdom = require('jsdom');
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);
// Required for side-effects
require("firebase/firestore");

//const settings = {/* your settings... */ timestampsInSnapshots: true};

 // firestore.settings(settings);

var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
  firebase.initializeApp(config);

// Initialize Cloud Firebasestore through Firebase
var db = firebase.firestore();

const firestore = firebase.firestore();

  const settings = {/* your settings... */ timestampsInSnapshots: true};

  firestore.settings(settings);



const test = async () => {
  try {
    
const ApiSwgohHelp = require('api-swgoh-help');
const swapi = new ApiSwgohHelp({
	"username":"jeb192004",
	"password":"5ZbHx86E9nLwkP5",
	"client_id":"abc",
	"client_secret":"123"
});
    
    

 //var me = 676714695;let player = await swapi.fetchPlayer(me, 'units');
 var allycode = /*jimmy burn 2*/676714695;
    
   let payload = {
					allycode:[ allycode ],
					language:"eng_us",
          mods:true
				};
				let player = await swapi.fetchUnits( payload );
				let units = await swapi.rosterStats( player );
    
    //console.log(JSON.stringify(units));
    
  
let playerload = {
					allycodes:[ allycode ],
					language:"eng_us",
           "project":{
        "name":1,
        "level":1,
        "guildName":1,
        "gpFull":1
    }
				};	

let playerName = await swapi.fetchPlayer(playerload);
  
  getmyteams(playerName, JSON.stringify(units));
  
 
  
  
   // getSTRTeams(player, pName);
  }catch(error){
    console.log(error);
  }
};







  function getmyteams( pName, units){
  
    var guildMemberName = pName.name;
    
    var guildMemberLvl = pName.level;
	
    var guildMemberGuildName = pName.guildName;
	
    var guildMemberGp = pName.gpFull;
	
    //var guildMemberUnits = pName.units;
saveUnits(guildMemberName, guildMemberGuildName, units);
    
    //str(guildMemberName, guildMemberLvl, guildMemberGuildName,guildMemberGp);

}



function str(memberName, memberLvl, memberGuildName, memberGp
             ){

db.collection("Guilds").doc(memberGuildName).collection("Members").doc(memberName).set({
	
  Name:memberName,
  LVL:memberLvl,
  GUILD:memberGuildName,
  GP:memberGp,
  GK:true,
  RaidHan:true
})
.then(function(docRef) {
  console.log("finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});

}//end saving str p1 data


function saveUnits(memberName, memberGuildName, units){
  
  var obj = JSON.parse(units);
  var ch = JSON.stringify(obj.HANSOLO[0].unit.mods[1].stat[0])
  console.log(ch);
  $.each(obj, function (key, val) {
    
    var t1 = val[0].unit.mods[0].stat;
                //alert(JSON.stringify(val));
				var toonname = JSON.stringify(val[0].unit.name);
				var toonslvl = val[0].unit.starLevel;
				var toonlvl = val[0].unit.level;
				var toonglvl = val[0].unit.gearLevel;
				var toonz = JSON.stringify(val[0].unit.zetas);
				var toongp = val[0].unit.gp;
				
        var toonagility = val[0].base.Agility;
				var toonarmor = val[0].base.Armor ;
				var toonarmorpen = val[0].base['Armor Penetration'] ;
				var toonhealth = val[0].base['Health'] ;
				var toonhealthsteal = val[0].base['Health Steal'] ;
				var toonphycritrat = val[0].base['Physical Critical Rating'] ;
				var toonphysicaldamage = val[0].base['Physical Damage'] ;
				var toonpotency = val[0].base['Potency'] ;
				var toonresistance = val[0].base['Resistance'] ;
				var toonrespen = val[0].base['Resistance Penetration'] ;
				var toonspcritrat = val[0].base['Special Critical Rating'] ;
				var toonspdmg = val[0].base['Special Damage'] ;
				var toonspeed = val[0].base['Speed'] ;
				var toonstrength = val[0].base['Strength'] ;
				var toontenacity = val[0].base['Tenacity'] ;
				var toonprotection = val[0].base['Protection'] ;
				var toontactic = val[0].base['Tactics'] ;
				
    
    //mods
    if(val[0].unit.mods[0].stats){
	var modset1 = val[0].unit.mods[0].stats}
	if(val[0].unit.mods[1].stats){
	var modset2 = val[0].unit.mods[1].stats}
	if(val[0].unit.mods[2].stats){
	var modset3 = val[0].unit.mods[2].stats}
	if(val[0].unit.mods[3].stats){
	var modset4 = val[0].unit.mods[3].stats}
	if(val[0].unit.mods[4].stats){
	var modset5 = val[0].unit.mods[4].stats}
	if(val[0].unit.mods[5].stats){
	var modset6 = val[0].unit.mods[5].stats}
	
     console.log(toonname, modset1);
   
    
    
    
    
			//console.log(toonagility, toonarmor, toonarmorpen, toonhealth, toonhealthsteal, toonphycritrat, toonphysicaldamage,
  				//toonpotency, toonresistance, toonrespen, toonspcritrat, toonspdmg, toonspeed, toonstrength,
				//toontenacity, toonprotection, toontactic);
				//console.log(toonname,toonslvl, toonlvl, toonglvl,toonz, toongp);
          


/*
db.collection("Guilds").doc(memberGuildName).collection("Members").doc(memberName).collection("Toons").doc(toonname).set({

  
        NAME:JSON.stringify(val[0].unit.name),
				STARLVL:val[0].unit.starLevel,
				LVL:val[0].unit.level,
				GLVL:val[0].unit.gearLevel,
				ZETAS:JSON.stringify(val[0].unit.zetas),
				POWER:val[0].unit.gp,
				//base
				AGILITY:val[0].base.Agility,
				ARMOR:val[0].base.Armor ,
				ARMORPEN:val[0].base['Armor Penetration'],
				HEALTH:val[0].base['Health'],
				HEALTHSTEAL:val[0].base['Health Steal'] ,
				PHYCRITRAT:val[0].base['Physical Critical Rating'],
				PHYDMG:val[0].base['Physical Damage'] ,
				POTENCY:val[0].base['Potency'] ,
				RESISTANCE:val[0].base['Resistance'] ,
				RESISTANCEPEN:val[0].base['Resistance Penetration'] ,
				SPCRITRAT:val[0].base['Special Critical Rating'] ,
				SPDMG:val[0].base['Special Damage'] ,
				SPEED:val[0].base['Speed'] ,
				STRENGTH:val[0].base['Strength'] ,
				TENACITY:val[0].base['Tenacity'] ,
				PROTECTION:val[0].base['Protection'] ,
				TACTICS:val[0].base['Tactics'] ,
				
        
  
  
	
	
})
.then(function(docRef) {
  console.log("finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});*/
  });
}



// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
app.post('/clicked', (req, res) => {
  const click = {clickTime: new Date()};
 console.log(click);
	//getguilddata();
  	test();
});
