var $load = $('<div class="loading">Loading...</div>').appendTo('body');
//create firebase reference
var dbRef = new Firebase("https://swgoh-campanion.firebaseio.com/");
var contactsRef = dbRef.child('toons');

//load older conatcts as well as any newly added one...
contactsRef.on("child_added", function(snap) {
  console.log("added", snap.key(), snap.val());
  document.querySelector('#toons')
    .innerHTML += contactHtmlFromObject(snap.val());
	$(".list-group li").on("click", function() {
    //alert($(this).find("p.lead").html());
	var toonName = $(this).find("p.lead").html();
	window.location = 'toonInfo.html';
  window.sessionStorage.setItem('toon',toonName);
});
  

$('#compare').click(function(){
    window.location="editToonAbil.html";
});

$('#search').click(function(){
    document.getElementById("searchText").style.display='inline';
});





	
var mylist = $('.list-group');
var listitems = mylist.children('li').get();
listitems.sort(function(a, b) {
   return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
});
$.each(listitems, function(idx, itm) { mylist.append(itm); });


});

//prepare conatct object's HTML
function contactHtmlFromObject(toons){
  console.log( toons );
  var html = '';
  html += '<li class="list-group-item contact">';
    html += '<div class="toonlist">';
      
      html += '<p>'+'<div>'
	 	   + '<img id= "img" src="'+toons.photoUrl+'"alt="enter"/>'
	  	   + '</div>'+'</p>';
		   html += '<p class="lead">'+toons.name+'</p>';
	html += '<p>'+toons.catagory+'</p>';
                html += '<p>'+"added by: " +toons.userId+'</p>';
    html += '</div>';
  html += '</li>';
  $load.hide();
  return html;
  
}


