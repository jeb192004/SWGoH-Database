//create firebase reference
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var contactsRef = dbRef.child('toons');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(snap.val());
	$(".list li").on("click", function() {
    //alert($(this).find("p.lead").html());
	var toonName = $(this).find("p.lead").html();
	window.location = 'toonInfo.html';
  window.sessionStorage.setItem('toon',toonName);

});
      



});

//prepare conatct object's HTML
function contactHtmlFromObject(toons){
  console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div>';
      html += '<p class="lead">'+toons.name;
      html += toons.catagory;
      html += '<div>'
	 	   + '<img id= "img" src="'+toons.photoUrl+'"alt="enter"/>'
	  	   + '</div>'
                +"added by: " + toons.userId
                +'</p>';
    html += '</div>';
  html += '</li>';
  
  return html;
}
 
 

