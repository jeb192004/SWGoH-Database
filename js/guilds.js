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
	
var toonsArray = [], jtrArray = [];
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
	  loadList();




function loadList(){

 jtrArray =[];
 guildref.collection("Members")
  
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			
			var toon1 = doc.data().Name;
			var lvl = doc.data().LVL;
			var gp = doc.data().GP;//.toLocaleString();
			toonsArray = [];
			if(doc.data().GK){
			   toonsArray.push("GK");
		   }if(doc.data().RaidHan){
			   toonsArray.push("Han Solo(Raid Han)");
		   }if(doc.data().JTR){
			   toonsArray.push("Rey(Jedi Training)");
			   jtrArray.push(doc.data().JTR);
		   }
		
		   getstrteam(toon1, toonsArray, lvl, gp);
			//getNewToons(toon1, lvl, gp, doc.data().GK, doc.data().RaidHan);
	

	
	
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: "+doc.id, error);
    });
	
}


	
function getNewToons(memberName, lvl, gp, gk, rh){
db.collection("Guild").doc("Relentless").collection("Members").doc(memberName).
collection("Toons")
.get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
			var roster = doc.data().ROSTER;
			var jtr = JSON.parse(roster).REYJEDITRAINING;
			var legendChew = JSON.parse(roster).LEGENDARYCHEWBACCA;
			var jtrtf;
			if(jtr){
				jtrtf = true;
				//addmembertoon("Jimmy Burn 2", jtrtf);
			db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName).set({
	
  Name:memberName,
  LVL:lvl,
  GUILD:"Relentless",
  GP:gp,
  GK:gk,
  RaidHan:rh,
  JTR:true
})
.then(function(docRef) {
  console.log("finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});
			}else{
				jtrtf = false;
				//addmembertoon(memberName, jtrtf);
				db.collection("Guilds").doc("Relentless").collection("Members").doc(memberName).set({
	
  Name:memberName,
  LVL:lvl,
  GUILD:"Relentless",
  GP:gp,
  GK:gk,
  RaidHan:rh,
  JTR:false
})
.then(function(docRef) {
  console.log("finished");
})
.catch(function(error) {
    console.error("Error adding document: ", error);

});
			}
	});
			      
    })
    .catch(function(error) {
        alert("Error getting documents: "+ error);
    });
	}
	



function getstrteam(member, toonsarray, lvl, gp){
	
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
			
			
			strp4nihilus(member, toonsarray,
										jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
										bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
										r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
										rtname,rtslvl, rtlvl, rtglvl, rtgp,
										reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp,
										
										lvl, gp
										);	
	
	
		});/*.catch(function(error) {
    console.log("Error getting document:", error);
});*/
}


function strp4nihilus(member, toonsarray,
										jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
										bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
										r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
										rtname,rtslvl, rtlvl, rtglvl, rtgp,
										reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp,
										
										lvl, gp){
	
	guildref.collection("STR").doc("P4_NIHILUS").collection("members").doc(member)
    .get().then(function(doc2) {

			
			var avname = doc2.data().AVNAME;
			var avslvl = doc2.data().AVSLVL;
			var avlvl = doc2.data().AVLVL;
			var avglvl = doc2.data().AVGLVL;
			var avzl = doc2.data().AVZL;
			var avzu1 = doc2.data().AVZU1;
			var avgp = doc2.data().AVGP.toLocaleString();
			
			var dakaname = doc2.data().DAKANAME;
			var dakaslvl = doc2.data().DAKASLVL;
			var dakalvl = doc2.data().DAKALVL;
			var dakaglvl = doc2.data().DAKAGLVL;
			var dakazu1 = doc2.data().DAKAZU1;
			var dakagp = doc2.data().DAKAGP.toLocaleString();
			
			var mtname = doc2.data().MTNAME;
			var mtslvl = doc2.data().MTSLVL;
			var mtlvl = doc2.data().MTLVL;
			var mtglvl = doc2.data().MTGLVL;
			var mtzl = doc2.data().MTZL;
			var mtzu1 = doc2.data().MTZU1;
			var mtgp = doc2.data().MTGP.toLocaleString();
			
			var nsvname = doc2.data().NSZNAME;
			var nsvslvl = doc2.data().NSZSLVL;
			var nsvlvl = doc2.data().NSZLVL;
			var nsvglvl = doc2.data().NSZGLVL;
			var nsvgp = doc2.data().NSZGP.toLocaleString();
			
			var talianame = doc2.data().TALIANAME;
			var taliaslvl = doc2.data().TALIASLVL;
			var talialvl = doc2.data().TALIALVL;
			var taliaglvl = doc2.data().TALIAGLVL;
			var taliazu1 = doc2.data().TALIAZL;
			var taliagp = doc2.data().TALIAGP.toLocaleString();
			
	
	document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(member, toonsarray,
					jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
					bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
					r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
					rtname,rtslvl, rtlvl, rtglvl, rtgp,
					reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp,
										
			avname,avslvl,avlvl,avglvl,avzl,avzu1,avgp,
			dakaname,dakaslvl,dakalvl,dakaglvl,dakazu1,dakagp,
			mtname,mtslvl,mtlvl,mtglvl,mtzl,mtzu1,mtgp,
			nsvname, nsvslvl,nsvlvl,nsvglvl,nsvgp,
			talianame,taliaslvl,talialvl,taliaglvl,taliazu1,taliagp,
			
			lvl, gp
										);	
					$('#loading').hide();
					
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
	
		});
}






function contactHtmlFromObject(toons, toonsArray,
										jtrname, jtrslvl, jtrlvl, jtrglvl,jtrzl, jtrzu1, jtrzu2,jtrgp,
										bb8name,bb8slvl, bb8lvl, bb8glvl, bb8zu1, bb8zu2, bb8gp,
										r2name,r2slvl, r2lvl, r2glvl, r2zu1, r2zu2, r2gp,
										rtname,rtslvl, rtlvl, rtglvl, rtgp,
										reyname,reyslvl, reylvl, reyglvl, reyzu1, reygp,
										
										avname,avslvl,avlvl,avglvl,avzl,avzu1,avgp,
			dakaname,dakaslvl,dakalvl,dakaglvl,dakazu1,dakagp,
			mtname,mtslvl,mtlvl,mtglvl,mtzl,mtzu1,mtgp,
			nszname, nszslvl,nszlvl,nszglvl,nszgp,
			talianame,taliaslvl,talialvl,taliaglvl,taliazu1,taliagp,
				
			lvl, gp
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
    //html += '<p class="strjtr" ><b><font color="black">STR P1 Team: </font></b>'+strp1+'</p></div>';
    html += '<div><b><font color="black">STR P1 Team: </font></b>';
	if(jtrname){
		if(jtrlvl === 85 && jtrslvl === 7 && jtrglvl === 12 && jtrzl){
	html +='<a class="jtrname" data-jtrslvl="'+jtrslvl+'" data-jtrlvl="'+jtrlvl+'" data-jtrglvl="'+jtrglvl+'"data-jtrzl="'+jtrzl+'" data-jtrzu1="'+jtrzu1+'"data-jtrzu2="'+jtrzu2+'" data-jtrgp="'+jtrgp+'"  ><font color="#00FF00">'+jtrname+'</font></a>, ';
	}else{
	html +='<a class="jtrname" data-jtrslvl="'+jtrslvl+'" data-jtrlvl="'+jtrlvl+'" data-jtrglvl="'+jtrglvl+'"data-jtrzl="'+jtrzl+'" data-jtrzu1="'+jtrzu1+'"data-jtrzu2="'+jtrzu2+'" data-jtrgp="'+jtrgp+'"  >'+jtrname+'</a>, ';}
	
	}else{html +='<a class="nszname"><font color="#C01111">Rey(Jedi Training)</font></a>, ';}
	if(bb8name){
		if(bb8lvl === 85 && bb8slvl === 7 && bb8glvl === 12 && bb8zu1){
		html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'"data-bb8zu2="'+bb8zu2+'" data-bb8gp="'+bb8gp+'" ><font color="#00FF00">'+bb8name+'</font></a>, ';
	}else{
	html +='<a class="bb8name" data-bb8slvl="'+bb8slvl+'" data-bb8lvl="'+bb8lvl+'" data-bb8glvl="'+bb8glvl+'" data-bb8zu1="'+bb8zu1+'"data-bb8zu2="'+bb8zu2+'" data-bb8gp="'+bb8gp+'" >'+bb8name+'</a>, ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">BB-8</font></a>, ';}
	 
	if(r2name){
		if(r2lvl === 85 && r2slvl === 7 && r2glvl === 12 && r2zu2){
		html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'" data-r2gp="'+r2gp+'"><font color="#00FF00">'+r2name+'</font></a>, ';
	}else{
	html +='<a class="r2name" data-r2slvl="'+r2slvl+'" data-r2lvl="'+r2lvl+'" data-r2glvl="'+r2glvl+'" data-r2zu1="'+r2zu1+'"data-r2zu2="'+r2zu2+'" data-r2gp="'+r2gp+'">'+r2name+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">R2-D2</font></a>, ';}
	if(rtname){
		if(rtlvl === 85 && rtslvl === 7 && rtglvl === 12){
		html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'" data-rtgp="'+rtgp+'"><font color="#00FF00">'+rtname+'</font></a>, ';
	}else{
	html +='<a class="rtname" data-rtslvl="'+rtslvl+'" data-rtlvl="'+rtlvl+'" data-rtglvl="'+rtglvl+'" data-rtgp="'+rtgp+'">'+rtname+'</a>, ';}
	}else{html +='<a class="nszname"><font color="#C01111">Resistance Trooper</font></a>, ';}
	if(reyname){
		if(reylvl === 85 && reyslvl === 7 && reyglvl === 12){
		html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" data-reyzu1="'+reyzu1+'" data-reygp="'+reygp+'"><font color="#00FF00">'+reyname+'</font></a>, ';
	}else{
	html +='<a class="reyname" data-reyslvl="'+reyslvl+'" data-reylvl="'+reylvl+'" data-reyglvl="'+reyglvl+'" data-reyzu1="'+reyzu1+'" data-reygp="'+reygp+'">'+reyname+'</a> ';
	}
	}else{html +='<a class="nszname"><font color="#C01111">Rey(Scavenger)</font></a>, ';}
	html +=	'</div>';
// start p4 nihilus
	
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
	$('#loading').show();
	$('#toons').empty();
	
	var shard1 = shard_loc.innerText || shard_loc.textContent;
	//var shards = shard1.replace(/[.'\s]/g, '');
	
	if(shard_loc === "all_members"){
		document.getElementById("header__title").innerHTML = "SWGoH";
		loadList();
	}if(shard_loc === "jtr"){
		var shardLoc = "JTR";
		document.getElementById("header__title").innerHTML = jtrArray.length;
		filterList(shardLoc);
	}if(shard_loc === "gk"){
		var shardLoc = "GK";
		document.getElementById("header__title").innerHTML = "SWGoH";
		filterList(shardLoc);
	}if(shard_loc === "raidhan"){
		var shardLoc = "RaidHan";
		document.getElementById("header__title").innerHTML = "SWGoH";
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
		toonsArray = [];
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
		   }if(doc.data().JTR){
			   toonsArray.push("Rey(Jedi Training)");
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
	
	
	
