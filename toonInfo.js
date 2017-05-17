//create firebase reference
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var contactsRef = dbRef.child('toons');
var toon = sessionStorage.getItem('toon');

document.getElementById("header").innerHTML = sessionStorage.getItem('toon');
window.sessionStorage.removeItem('toon');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(snap.val());
	
      
// For each <li> inside #links
for (var i = 0; i < links.length; i++) {
  var link = links[i];
  link.onclick = myFunction;
}
});

//prepare conatct object's HTML
function contactHtmlFromObject(toons){
  console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+toons.name+'</p>';
      html += '<p>'+toons.catagory+'</p>';
      html += '<p><small title="'
                +toons.photoUrl+'">'
                +toons.userId
                +'</small></p>';
    html += '</div>';
  html += '</li>';
  
  return html;
}
 var cars = document.querySelector(".list-group");

cars.addEventListener("click", function(e)
{
  //alert("Available colors: " + e.target.textHTML);
  window.location = 'toonInfo.html';
	
	

});
