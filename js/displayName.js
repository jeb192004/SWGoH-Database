var redirect = sessionStorage.getItem('redirect');
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
  firebase.initializeApp(config);
  
  
  initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            var displayName = user.displayName;
            
            user.getToken().then(function(accessToken) {
              document.getElementById('sign-in-status').textContent = 'Signed in';
              //document.getElementById('sign-in').textContent = 'Sign out';
              document.getElementById('account-details').textContent = displayName;
             
            });
          } else {
            // User is signed out.
            document.getElementById('sign-in-status').textContent = 'Signed out';
           // document.getElementById('sign-in').textContent = 'Sign in';
            document.getElementById('account-details').textContent = 'null';
          }
        }, function(error) {
          console.log(error);
        });
      };
      window.addEventListener('load', function() {
        initApp();
      });
	  $('#home').click(function(){
 window.location= redirect;
 alert("yes");
});
	  $('#home').click(function(){
	var currentUser = firebase.auth().currentUser;
currentUser.updateProfile({
 displayName: document.getElementById("displayName").value});
 window.location= redirect;
});
