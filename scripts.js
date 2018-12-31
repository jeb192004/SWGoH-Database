


var namesArray = [];

var init = function () {
    //get scroll position in session storage
   	$(window).scrollTop(sessionStorage.scrollPos);
	//console.log(sessionStorage.scrollPos);
};
window.onload = init;

var dateObj = new Date();
var month = dateObj.getUTCMonth()+1;
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
var today = month+'/'+day+'/'+year;
document.getElementById('header_title').innerHTML = 'SWGoH - '+ today;

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
	  events();
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




function contactHtmlFromObject(name, info, start, end, name2, backImg){
  //console.log( toons );
  var html = '';
  html += '<li class="list-group-item" style="background-image: url('+backImg+')">';
    html += '<div class="toonlist" >';
      
      /*html += '<p>'+'<div class="img_container">'
       + '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
         + '</div>'+'</p>';*/
       html += '<div> <p class="lead">'+name+'<br>'+name2+'</p>';
  html += '<p>'+info+'</p>';
                html += '<p>'+start+' - '+end+'</p></div>';
    html += '</div>';
  html += '</li>';
  return html;
  
}




    
	
	
	
	function menu_item(item){
		if(item.innerHTML === "Comapare Abilities"){
			window.location = "compareToon.html";
		}if(item.innerHTML === "Characters"){
			window.location = "characters.html";
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


	
	
	 
	function events(){
	
var eventArray = [];
var timeStamp;
var timeStamp1 = new Date().getTime() - (2 * 24 * 60 * 60 * 1000);
db.collection("Events").orderBy("STARTDATE").get()
     .then(function(querySnapshot){
          querySnapshot.forEach(function (doc){
            
            var id = doc.data().ID;
            var nameKey = doc.data().NAMEKEY;
            var descKey = doc.data().DESCKEY;
            var startDate = doc.data().STARTDATE;
            startDate = startDate.toString().slice(0, -3);
            startDate = parseInt(startDate);
            startDate = new Date(startDate * 1000).toLocaleDateString("en-US");
            var endDate = doc.data().ENDDATE;
            endDate = endDate.toString().slice(0, -3);
            endDate = parseInt(endDate);
            endDate = new Date(endDate * 1000).toLocaleDateString("en-US");
            timeStamp = doc.data().TIMESTAMP;

           // eventArray.push({id: id, namekey: nameKey, desckey: descKey, start: startDate, end: endDate});
          if(id.includes("restrictedmodbattle")||id.includes("shipevent")||id.includes("challenge")){}else{
			  
        var today1 = Math.round(new Date().getTime());
        var eventDate = Date.parse(endDate);
      
       if(eventDate < today1){}else{
			  var name = nameKey;
		
     		  name1 = name.split("\\n");
			 
			      if(name1[0] === "THE TEMPLATE IN THE TEMPEST"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_130758.jpg?alt=media&token=1675be3e-fabc-4a61-b9c7-4c9fc71c77dd";}
         if(name1[0] === "ONE FAMOUS WOOKIEE"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_130839.jpg?alt=media&token=ebd726c9-be54-4c01-bfea-bece5fc030b8";}
         if(name1[0] === "DATHOMIR"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_130931.jpg?alt=media&token=8bd3622c-8751-4040-921e-10493b3c5b5f";}
         if(name1[0] === "EXECUTRIX"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_134351.jpg?alt=media&token=5534a5db-e15f-430e-a0fc-46af2f3f1651";}
         if(name1[0] === "INTO THE BREACH II"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_134301.jpg?alt=media&token=34c0e6db-22f2-466f-8bd4-702c76782c80";}
         if(name1[0] === "ENDOR ESCALATION"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_134329.jpg?alt=media&token=30ffd404-bb84-4f0d-9586-2af5a93222e3";}
         if(name1[0] === "HOTH"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20180927_140433.jpg?alt=media&token=75be9c63-7a13-486e-b7de-3dcdc86da701";}
         if(name1[0] === "FOREST MOON"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181108-064837_Heroes.jpg?alt=media&token=ea4969e4-5e0b-4386-9bda-ec9ab794c2a9";}
         if(name1[0] === "LEGEND OF THE OLD REPUBLIC"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181020-114924_Heroes.jpg?alt=media&token=764909ed-1056-4e43-b15c-7f5f5bc896cd";}
          if(name1[0] === "GHOSTS OF DATHOMIR"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20181022_085328.jpg?alt=media&token=4c2d2875-84f7-454f-969f-7ca9592576b0";}
		   if(name1[0] === "Training Droid Smuggling"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20181022_085402.jpg?alt=media&token=a005ecc8-5c31-4d95-93dd-448fdbd33f28";}
		   if(name1[0] === "CONTRABAND CARGO"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20181105_104948.jpg?alt=media&token=99c6be88-8042-453f-affb-48669cfc4936";}
				if(name1[0] === "SMUGGLER'S RUN"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181105-105443_Heroes.jpg?alt=media&token=8c2c65d1-73a9-4953-8759-a41926753cdd";}
					if(name1[0] === "Grand Master's Training"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2F20181105_110159.jpg?alt=media&token=d4e97d8e-3a75-431f-a179-70701d55f463";}
						if(name1[0] === "Credit Heist"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181108-064755_Heroes.jpg?alt=media&token=1d62f697-c9e7-48da-ab1b-30ecf34e5faa";}
											if(name1[0] === "SECRETS AND SHADOWS"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181219-114410_Heroes.jpg?alt=media&token=141a79e1-fe92-4864-980f-3676e9d9fba9";}
											if(name1[0] === "CONTACT PROTOCOL"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181219-114340_Heroes.jpg?alt=media&token=f1649bf5-b1de-4eed-a87f-5acb60d69db9";}
							if(name1[0] === "TERRITORY_TOURNAMENT_EVENT_NAME"){
								name1[0] = "GRAND ARENA";
								descKey = id.replace(/_|-|\./g, ' ');
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181219-123807_Heroes.jpg?alt=media&token=9bb85f42-cf8e-4dfb-9a88-18eb59872eac";}
							if(name1[0] === "ENDURANCE"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181221-041008_Heroes.jpg?alt=media&token=de170f60-964e-48bc-9a09-cff54537d57c";}
							if(name1[0] === "MILITARY MIGHT"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181222-070720_Heroes.jpg?alt=media&token=29691b59-c42f-4d66-adfc-d2159800c54b";}
				if(name1[0] === "GRAND MASTERS TRAINING"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181224-063640_Heroes.jpg?alt=media&token=7d34c584-127c-43d1-bc86-238f35e8a439";}
						if(name1[0] === "GALACTIC BOUNTIES I"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181224-063719_Heroes.jpg?alt=media&token=7c7d6824-c999-4c74-a8ff-eda11cc33ab6";}
if(name1[0] === "BESPIN"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181224-071441_Heroes.jpg?alt=media&token=45b1edb3-9abb-45e4-bc40-0885ef7af7a7";}
if(name1[0] === "ARTIST OF WAR"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181226-093251_Heroes.jpg?alt=media&token=88bf370c-418f-4e03-8673-ba17dac57bd2";}
if(name1[0] === "HOME ONE"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181226-093634_Heroes.jpg?alt=media&token=678a3e4a-bc01-4be4-a06b-30482b8c2f1d";}
if(name1[0] === "EMPEROR'S DEMISE"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181227-092723_Heroes.jpg?alt=media&token=2899028a-2667-4f85-b1ed-498a9963fe60";}
if(name1[0] === "ENDOR"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181227-095158_Heroes.jpg?alt=media&token=12c2017e-a052-4e96-90b5-a2774ea4397f";}
if(name1[0] === "GEONOSIAN FLEET"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181228-073343_Heroes.jpg?alt=media&token=7cb3f159-b4d6-42b5-a3be-6f2a04ac276f";}
if(name1[0] === "REBEL ROUNDUP"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181228-073854_Heroes.jpg?alt=media&token=49e382ec-81ca-4e03-8341-47704cc47eb7";}
if(name1[0] === "DARING DROID"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181228-074100_Heroes.jpg?alt=media&token=c9870dac-3897-4bd3-b346-d7db4ec17add";}
if(name1[0] === "JAKKU"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181228-074312_Heroes.jpg?alt=media&token=b6887c4a-ad2e-4254-adcb-617d3da03d50";}
if(name1[0] === "DEFENSE OF DATHOMIR"){
           var backImg = "https://firebasestorage.googleapis.com/v0/b/swgoh-campanion.appspot.com/o/Events%2FScreenshot_20181231-071202_Heroes.jpg?alt=media&token=1bb2c80a-eb59-4882-ae58-e59d08f23939";}






			if(name1[1]){
      var name2 = name1[1].replace(/ *\[[^\]]*]/, '');
    	  var name2 = name2.replace(/ *\[[^\]]*]/, '');
			var name2 = name2.replace(/ *\[[^\]]*]/, '');
			var name2 = name2.replace(/ *\[[^\]]*]/, '');
       var name4 = name2;
       }else{var name4 = " ";}


      var info = descKey;//.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, ' ');
      var info1 = info.replace(/ *\[[^\]]*]/, '');
      var info2 =    info1.replace(/ *\[[^\]]*]/, '');
		  var info3 = info2.replace(/ *\[[^\]]*]/, '');
		  var info4 = info3.replace(/ *\[[^\]]*]/, '');
		  var info5 = info4.replace(/ *\[[^\]]*]/, '');
      var start = startDate;
      var end = endDate;
      
     document.querySelector('#toons').innerHTML += contactHtmlFromObject(name1[0], info5, start, end, name4, backImg);
			  }
			}
			
			/*
if(timeStamp < timeStamp1){
	document.getElementById('header_title').innerHTML = "need update";
	}else{document.getElementById('header_title').innerHTML = "no update needed";}
*/
          });
}).catch(function (error){
  console.log("error getting docs", error);
});

$('#loading').hide();


}
	
	// Register service worker to control making site work offline
/*
if('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log('Service Worker Registered'); });
}
*/


