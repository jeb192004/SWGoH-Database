
var urlParam = function(name, w){
    w = w || window;
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
        val = w.location.search.match(rx);
		console.log(name);
    return !val ? '':val[1];
};
	var characterName = urlParam('id');

	firebase.initializeApp({
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features

	
	
if (localStorage.getItem("toonsArray")) {
  // Restore the contents of the text field
    var namesArray = JSON.parse(localStorage.getItem("toonsArray"));
    
		var abilArray =[];
namesArray.forEach(function(element) {
	
	if(element.id === characterName){
		
		var name = element.name;
		var desc = element.desc;
		document.getElementById("name").textContent = name;
		document.getElementById('desc').textContent = desc;
		abilArray = JSON.parse(element.skillList);
  		abilArray.forEach(function (abil){
		var abil = abil.skillId;
		//alert(abil);
		db.collection("abilitylist").doc(abil).get().then(function(doc) {
            alert(doc.data());

            var id = doc.data().ID;
            var name = doc.data().NAME;
            var desc = doc.data().DESC;
            var icon = doc.data().ICON;
            var cooldown = doc.data().COOLDOWN;
          //  alert(name);
					
     document.querySelector('#toons').innerHTML += contactHtmlFromObject(name, desc, icon, cooldown, id);

			 }).catch(function(error) { 
			alert("Error getting document: "+ error); 
			});
			$('#loading').hide();
		
		});
}
});
}



	function contactHtmlFromObject(name, desc, icon, cooldown, id){
  //console.log( toons );
  var html = '';

	  html += '<li class="list-group-item">';
    html += '<div class="toonlist" >';
      
      /*html += '<p>'+'<div class="img_container">'
       + '<img id= "img" src="'+img1+'"alt="'+icon+'""/>'
         + '</div>'+'</p>';*/
       html += '<div> <p class="lead">'+name+'</p>';
  html += '<p>'+desc+'</p>';
              html += '<p style="display:none">'+cooldown+'</p>';
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
	
	


	
	
	function next(){
		var toonName01 = namesArray2[currentCharacter+1];
		var Name = toonName01.replace(/ /g,"_");
		window.location = 'toon_details.html?character='+Name;
  	
	}
	
	function prev(){
				var toonName01 = namesArray2[currentCharacter-1];
		var Name = toonName01.replace(/ /g,"_");

		window.location = 'toon_details.html?character='+Name;
  	
	}
