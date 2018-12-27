

	
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

var toonsArray = [ ];
if (localStorage.getItem("toonsArray") === null) {}else{
firebase.firestore().enablePersistence()
  .then(function() {
      // Initialize Cloud Firestore through firebase
      db = firebase.firestore();
	  get_toons();
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
	}
	function get_toons(){
	

db.collection("Characters").orderBy("NAME").get()
     .then(function(querySnapshot){
          querySnapshot.forEach(function (doc){
            
            var id = doc.data().BASEID;
            var name = doc.data().NAME;
            var desc = doc.data().DESC;
            var alignment = doc.data().ALIGNMENT;
            var catList = doc.data().CATLIST;
            var combatType = doc.data().COMBATTYPE;
					 var skillList = doc.data().SKILLLIST;
					toonsArray.push({ id:id, name:name, desc:desc, alignment: alignment,	 catList: catList, 
					combatType: combatType, skillList: skillList });
																					
				if(desc === desc.toUpperCase()||catList == ""){}else{
     document.querySelector('#toons').innerHTML += contactHtmlFromObject(name, desc, alignment, catList, skillList, id, toonsArray);

$(".list-group li").on("click", function() {
	var toon = $(this.getElementsByClassName("id")).html();
	window.location = 'toon_details.html?id='+toon;
	
	});
			 }
			
			 });
			localStorage.setItem("toonsArray",JSON.stringify(toonsArray));
			$('#loading').hide();
			});
			}
	function contactHtmlFromObject(name, desc, alignment, catList, skillList, id, toonsArray){
  //console.log( toons );
  var html = '';
if(alignment === "LIGHT"){
    html += '<li class="list-group-item" style="background-color: blue">';
   }if(alignment === "DARK"){
	  html += '<li class="list-group-item" style="background-color: red">';
	}/*else{
	  html += '<li class="list-group-item">';
	}*/
    html += '<div class="toonlist" >';
      
      /*html += '<p>'+'<div class="img_container">'
       + '<img id= "img" src="'+img1+'"alt="'+toons+'""/>'
         + '</div>'+'</p>';*/
       html += '<div> <p class="lead">'+name+'</p>';
  html += '<p>'+desc+'</p>';
              html += '<p style="display:none">'+skillList+'</p>';
						html += '<p class="id" style="display:none">'+id+'</p>';
							html += '</div>';
    html += '</div>';
  html += '</li>';
  return html;
  
}
	
	
	function menu_item(item){
		if(item.innerHTML === "Comapare Abilities"){
			window.location = "compareToon.html";
		}if(item.innerHTML === "Home/Events"){
			window.location = "index.html";
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
	
	
