// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const firebase = require ("firebase");

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
					language:"eng_us"
				};
				let player = await swapi.fetchUnits( payload );
				let units = await swapi.rosterStats( player );
  
let playerload = {
					allycodes:[ allycode ],
					language:"eng_us",
           "project":{
        "name":1,
        "level":1,
        "guildName":1,
        "gpFull":1,
             "units":1
    }
				};	

//let playerName = await swapi.fetchPlayer(playerload);
  
  getmyteams(playerName[0]);
  
 
  
  //end of getting member data
  
}//end loop getting ally codes
   // getSTRTeams(player, pName);
  }catch(error){
  }
};







  function getmyteams( pName){
  
    
    var guildMemberName = pName.name;
    
    var guildMemberLvl = pName.level;
	
    var guildMemberGuildName = pName.guildName;
	
    var guildMemberGp = pName.gpFull;
	
    var guildMemberUnits = pName.units;

    console.log(jtrName, jtrslvl, jtrlvl, jtrglvl, jtrzl, jtrzu1, jtrzu2, jtrgp);
  }
    /*
    str(pName,
        jtrName, jtrslvl, jtrlvl, jtrglvl, jtrzl, jtrzu1, jtrzu2, jtrgp,
        bb8Name, bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
        r2Name, r2slvl, r2lvl, r2glvl, r2zu1,r2zu2, r2gp,
        rtName, rtslvl, rtlvl, rtglvl, rtgp,
        reyName, reyslvl, reylvl, reyglvl, reyzu1, reygp
        );*/
  }



function str(memberName, jtrName, jtrslvl, jtrlvl, jtrglvl
             ){

db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName).collection("members").doc("Toons").collection(guildMemberToon).set({

  
  JTRName:jtrName,
	JTRSLVL:jtrslvl,
  JTRLVL:jtrlvl,
  JTRGLVL:jtrglvl,
  JTRZL:jtrzl,
  JTRZU1:jtrzu1,
  JTRZU2:jtrzu2,
  JTRGP:jtrgp,
  
  
	
	
})
.then(function(docRef) {
  
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});




}//end saving str p1 data






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





// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const firebase = require ("firebase");

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
					language:"eng_us"
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
  
  getmyteams(playerName[0], JSON.stringify(units));
  
 
  
  
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
    
    str(guildMemberName, guildMemberLvl, guildMemberGuildName,guildMemberGp);

}



function str(memberName, memberLvl, memberGuildName, memberGp
             ){

db.collection("Guilds").doc(memberGuildName).collection("Members").doc(memberName).set({
	
  Name:memberName,
  LVL:memberLvl,
  GUILD:memberGuildName,
  GP:memberGp
  
})
.then(function(docRef) {
  console.log("finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});

}//end saving str p1 data


function saveUnits(memberName, memberGuildName, units){


db.collection("Guilds").doc(memberGuildName).collection("Members").doc(memberName).collection("Toons").doc("full_list").set({

  
  ALLTOONS:  units
  
  
  
	
	
})
.then(function(docRef) {
  
})
.catch(function(error) {
    console.error("Error adding document: ", error);

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
