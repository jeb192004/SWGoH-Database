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

const ApiSwgohHelp = require('api-swgoh-help');
const swapi = new ApiSwgohHelp({
	"username":"jeb192004",
	"password":"5ZbHx86E9nLwkP5",
	"client_id":"123",
	"client_secret":"abc"
});




const getdata = async () => {
  try {
   // var me = 676714695;let player = await swapi.fetchPlayer(me, 'units');
 var myAllyCode = [/*jimmy burn 2*/676714695, /*donald juanson*/417143161, /*dacain*/797681372, /*charlievader*/125494712, /*justraw44*/982616272,
                   /*garthbgolfing*/457143557, /*fretzik*/136395915, /*jkmartin85*/759472397,/*darkraven*/ 148117885,/*stevemurch*/ 417655626,
                   /*lucifer2386*/ 216499593,/*penguinrider*/ 649321599,/*sarcasticiam*/ 384622761,/*alex*/ 898918339,/*goldenhammer*/ 366931511,
                   /*caldar grendu*/ 565641694,/*poodletron*/ 482581414,877291237,513625846,325295241,
                   211862565,411681637,/*bon qui qui*/798328758,962715374,847111287,119969466,
                   851298899,125494712,929669982,213416547,972932945,
                  711893256,288419911,277953782,372158449,735177362,
                  267411729,235532987,488329938,931184957,152734118,
                  843199371,283286983,473162611,754738167,388979856,
                  572583632,158366562,154871381,/*brian lucci*/975664296,/*1the lizard king 1*/356887534];
    var arrayLength = myAllyCode.length;
for (var i = 0; i < arrayLength; i++) {
    let allycode = myAllyCode[i];

    
let player = await swapi.fetchPlayer( allycode , 'units');

  let playerName = await swapi.fetchPlayer( allycode);
  var pName = playerName.name;
  //get specific member data below here
   //  getSevenStarRaidToon(player, pName);
     
  getSTRTeams(player, pName);
  //end of getting member data
}//end loop getting ally codes
   // getSTRTeams(player, pName);
  }catch(error){
  
  }
};


function getSevenStarRaidToon(player, pName){
  var gk7;
  var raidhan7;
  if(player.GENERALKENOBI == null){}else{
    var gk1 = player.GENERALKENOBI;
    var gkStarLvl = gk1[0].starLevel;
    if(gkStarLvl === undefined) {
      gk7 = false;
    }else if(gkStarLvl == 7){
    gk7 = true;
      }else{
        gk7 = false;
      }
  }if(player.HANSOLO == null){}else{
  var rH = player.HANSOLO; 
  var rHStarLvl = rH[0].starLevel;
    if(rHStarLvl === undefined) {
      raidhan7 = false
    }else if(rHStarLvl == 7){
      raidhan7 = true;
      }else{
        raidhan7 = false;
         }
  }
    //console.log(pName, gk7, raidhan7);
    addmembertoon(pName, gk7, raidhan7);
  
}
  //end get raid teams
  
  function getSTRTeams(player, pName){
  var jtrName,jtrslvl,jtrlvl,jtrglvl,jtrzl,jtrzu1,jtrzu2,jtrgp,
  bb8Name,bb8slvl,bb8lvl,bb8glvl,bb8zu1,bb8zu2,bb8gp,
  r2Name,r2slvl,r2lvl,r2glvl,r2zu1,r2zu2,r2gp,
  rtName,rtslvl,rtlvl,rtglvl,rtgp,
  reyName,reyslvl,reylvl,reyglvl,reyzu1,reyzu2,reygp;
  
    if(player.REYJEDITRAINING == null){
	jtrName = "Rey (Jedi Training)"
	jtrslvl = "";
	jtrlvl ="";
	jtrglvl ="";
	jtrzl = "";
	jtrzu1 = "";
	jtrzu2 ="";
	jtrgp ="";
	}else{
  var jtr = player.REYJEDITRAINING[0];
    jtrName = "Rey (Jedi Training)";
    if (jtr.starLevel) {
    jtrslvl = jtr.starLevel;
    }else{jtrslvl = "";}
	if (jtr.level) {
     jtrlvl = jtr.level;
	}else{jtrlvl ="";}
	if (jtr.gearLevel) {
    jtrglvl = jtr.gearLevel;
	}else{jtrglvl ="";}
	if (jtr.zetas[0]) {
     jtrzl = jtr.zetas[0];
	}else{jtrzl = "";}
	if (jtr.zetas[1]) {
     jtrzu1 = jtr.zetas[1];
	}else{jtrzu1 = "";}
	if (jtr.zetas[2]) {
     jtrzu2 = jtr.zetas[2];
	}else{jtrzu2 ="";}
	if (jtr.gp) {
    jtrgp = jtr.gp;
	}else{jtrgp ="";}
    console.log(jtrName, jtrslvl, jtrlvl, jtrglvl, jtrzl, jtrzu1, jtrzu2, jtrgp);
  }
   if(player.BB8 == null){
	bb8Name = "BB8"
	bb8slvl = "";
	bb8lvl ="";
	bb8glvl ="";
	bb8zu1 = "";
	bb8zu2 ="";
	bb8gp ="";
	}else{
      var bb8 = player.BB8[0];
       bb8Name = "BB8";
	  if (bb8.starLevel) {
      var bb8slvl = bb8.starLevel;
	  }else{bb8slvl ="";}
	  if (bb8.level) {
       bb8lvl = bb8.level;
	  }else{bb8lvl ="";}
	  if (bb8.gearLevel) {
       bb8glvl = bb8.gearLevel;
	  }else{bb8glvl ="";}
	  if (bb8.zetas[0]) {
       bb8zu1 = bb8.zetas[0];
	  }else{bb8zu1="";}
	  if (bb8.zetas[1]) {
      bb8zu2 = bb8.zetas[1];
	  }else{bb8zu2 ="";}
	  if (bb8.gp) {
       bb8gp = bb8.gp;
	  }else{bb8gp ="";}
    console.log(bb8Name, bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp);
  }
  
    if(player.R2D2_LEGENDARY == null){
	r2Name = "R2D2"
	r2slvl = "";
	r2lvl ="";
	r2glvl ="";
	r2zu1 = "";
	r2zu2 ="";
	r2gp ="";
	}else{
      var r2 = player.R2D2_LEGENDARY[0];
      r2Name = "R2D2";
	  if(r2.starLevel){
      r2slvl = r2.starLevel;
	  }else{r2slvl="";}
	  if(r2.level){
      r2lvl = r2.level;
	  }else{r2lvl="";}
	  if(r2.gearLevel){
       r2glvl = r2.gearLevel;
	  }else{r2glvl ="";}
	  if(r2.zetas[0]){
      r2zu1 = r2.zetas[0];
	  }else{r2zu1 ="";}
	  if(r2.zetas[1]){
      r2zu2 = r2.zetas[1];
	  }else{r2zu2 ="";}
	  if(r2.gp){
       r2gp = r2.gp;
	  }else{r2gp="";}
      console.log(r2Name, r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp);
      }
    
  
    if(player.RESISTANCETROOPER == null){
	rtName = "Resistance Trooper"
	rtslvl = "";
	rtlvl ="";
	rtglvl ="";
	rtgp ="";
	}else{
      var rt = player.RESISTANCETROOPER[0];
      rtName = "Resistance Trooper";
	  if(rt.starLevel !== null){
      rtslvl = rt.starLevel;
	  }else{rtslvl ="";}
	  if(rt.level){
       rtlvl = rt.level;
	  }else{rtlvl="";}
	  if(rt.gearLevel){
      rtglvl = rt.gearLevel;
	  }else{rtglvl ="";}
	  if(rt.gp){
      rtgp = rt.gp;
      }else{rtgp="";}
      console.log(rtName, rtslvl, rtlvl, rtglvl, rtgp);
    }
    if(player.REY == null){
	reyName = "Rey (Scavenger)"
	reyslvl = "";
	reylvl ="";
	reyglvl ="";
	reyzu1 = "";
	reyzu2 ="";
	reygp ="";
	}else{
      var rey = player.REY[0];
      reyName = "Rey";
	  if(rey.starLevel){
      reyslvl = rey.starLevel;
	  }else{reyslvl =""}
	  if(rey.level){
      reylvl = rey.level;
	  }else{reylvl=""}
	  if(rey.gearLevel){
      reyglvl = rey.gearLevel;
	  }else{reyglvl =""}
	  if(rey.zetas[0]){
       reyzu1 = rey.zetas[0];
	  }else{reyzu1=""}
	  if(rey.gp){
      reygp = rey.gp;
      }else{reygp=""}
      console.log(reyName, reyslvl, reylvl, reyglvl, reyzu1, reygp);
	  }
	  
    /*
    str(pName,
        jtrName, jtrslvl, jtrlvl, jtrglvl, jtrzl, jtrzu1, jtrzu2, jtrgp,
        bb8Name, bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
        r2Name, r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
        rtName, rtslvl, rtlvl, rtglvl, rtgp,
        reyName, reyslvl, reylvl, reyglvl, reyzu1, reygp
        );*/
  }





function addmembertoon(memberName,gk,raidhan){

db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName).set({
	Name:memberName,
	//JTR:jtr,
	GK:gk,
	RaidHan:raidhan
	
	
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	alert(docRef.id +" "+ "upload finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});
  
}//end saving raid toon data

function str(memberName, jtrName, jtrslvl, jtrlvl, jtrglvl, jtrzl, jtrzu1, jtrzu2, jtrgp,
             bb8Name, bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
             r2Name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
             rtName, rtslvl, rtlvl, rtglvl, rtgp,
             reyName, reyslvl, reylvl, reyglvl, reyzu1, reygp ){

db.collection("Guilds").doc("Relentless").collection("STR").doc("P1").collection("members").doc(memberName).set({
	Name:memberName,
	JTRName:jtrName,
	JTRSLVL:jtrslvl,
  JTRLVL:jtrlvl,
  JTRGLVL:jtrglvl,
  JTRZL:jtrzl,
  JTRZU1:jtrzu1,
  JTRZU2:jtrzu2,
  JTRGP:jtrgp,
  
  BB8NAME:bb8Name,
  BB8SLVL:bb8slvl,
  BB8LVL: bb8lvl,
  BB8GLVL:bb8glvl,
  BB8ZU1:bb8zu1,
  BB8ZU2:bb8zu2,
  BB8GP:bb8gp,
  
  R2NAME:r2Name,
  R2SLVL:r2slvl,
  R2LVL:r2lvl,
  R2GLVL:r2glvl,
  R2ZU1:r2zu1,
  R2ZU2:r2zu2,
  R2GP:r2gp,
  
  REYNAME:reyName,
  REYSLVL:reyslvl,
  REYLVL:reylvl,
  REYGLVL:reyglvl,
  REYZU1:reyzu1,
  REYGP:reygp,
  
  RTNAME:rtName,
  RTSLVL:rtslvl,
  RTLVL:rtlvl,
  RTGLVL:rtglvl,
  RTGP:rtgp
	
	
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
	alert(docRef.id +" "+ "upload finished");
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
getdata();
});
