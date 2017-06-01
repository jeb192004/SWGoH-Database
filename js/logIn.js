var redirect = sessionStorage.getItem('redirect');
window.sessionStorage.setItem('redirect',redirect);
var config = {
    apiKey: "AIzaSyCG184jd5tjKzBDRRXYVmIm53o_n33g04E",
    authDomain: "swgoh-campanion.firebaseapp.com",
    databaseURL: "https://swgoh-campanion.firebaseio.com",
    projectId: "swgoh-campanion",
    storageBucket: "swgoh-campanion.appspot.com",
    messagingSenderId: "298882100900"
  };
  firebase.initializeApp(config);
  
  
  // FirebaseUI config.
      var uiConfig = {
	    //signInFlow: 'popup',
        signInSuccessUrl: 'displayName.html',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          {
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      scopes: [
        
      ]
    },
          //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          //firebase.auth.GithubAuthProvider.PROVIDER_ID,
          //firebase.auth.EmailAuthProvider.PROVIDER_ID,
          //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };
      // Initialize the FirebaseUI Widget using Firebase.
      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      // The start method will wait until the DOM is loaded.
      ui.start('#firebaseui-auth-container', uiConfig);
  
  
  
  initApp = function() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
		  
            // User is signed in.
            
            user.getToken().then(function(accessToken) {
              
            });
          } else {
            // User is signed out.
            
          }
        }, function(error) {
          console.log(error);
        });
      };
      window.addEventListener('load', function() {
        initApp();
      });
