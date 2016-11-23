  var profileImage;

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt_5-XB3_KtoNA3dQGRavk9xNuMIHGajg",
    authDomain: "fecianalyst.firebaseapp.com",
    databaseURL: "https://fecianalyst.firebaseio.com",
    storageBucket: "fecianalyst.appspot.com",
    messagingSenderId: "395548199076"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
//
var user = firebase.auth().currentUser;
if (user != null) {
  console.log(user.uid);
}

//getting global elements from html for login
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  const txtEmail2 = document.getElementById('txtEmail2');
  const txtPass2 = document.getElementById('txtPass2');
  const loginInfo = document.getElementById('loginInfo');


  //login bubble login by pressing enter

  $('#txtPassword').keypress(function (e) {
    if (e.keyCode == 13) {
      document.getElementById('btnLogin').click();
      return false;
    }
  });

//add login event to login button
btnLogin.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message));
  $('#txtPassword').val('');
  $('#txtEmail').val('');
  firebase.auth().onAuthStateChanged(firebaseUser =>{ if (firebaseUser) {
    window.location = 'dashboard.html';}});
});

//Log out with logout button

btnLogout.addEventListener('click', e => {
    $("#logoutBubble").fadeOut('fast');
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {} else {
            window.location = 'index.html';
        }
    });
});


//get Current user name and lastname from server and put it on the logout bubble and page title
        firebase.auth().onAuthStateChanged(firebaseUser =>{
          if (firebaseUser) {
            $("#loginInfo").fadeOut('slow');
            $("#loginLi").hide();
            $("#logoutLi").fadeIn('fast');
            $("#loginBubble").fadeOut('fast');
            //get current user UID
            var currentUserUID = firebaseUser.uid;
            //get current user stored data with uid
            const dbRefUserName = firebase.database().ref('users').child(currentUserUID).child('name');

            dbRefUserName.on('value', function(nameSnapshot) {
              var space = document.createTextNode("\u00A0");
              var name = JSON.stringify(nameSnapshot.val()).replace(/^"(.*)"$/, '$1');
              $("#titleName").empty();
              $("#titleName").append(name, space);
              $(".name").empty();
              $(".name").append(name);
            }, function(error) {
                console.log(error);
            });
            //lastName
            const dbRefUserLastName = firebase.database().ref('users').child(currentUserUID).child('lastName');
            dbRefUserLastName.on('value', function(lastNameSnapshot) {
              var lastName = JSON.stringify(lastNameSnapshot.val()).replace(/^"(.*)"$/, '$1');
              $("#titleLastName").empty();
              $(".lastName").empty();
              $(".lastName").append(lastName);
              $("#titleLastName").append(lastName);
            }, function(error) {
              console.log(error);
            });
            } else {
            $("#loginInfo").show();
            $("#loginLi").show();
            $("#logoutLi").fadeOut('fast');

          }
          });


//Get profile Image and put it on HTML.

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var currentUserUID = firebaseUser.uid;
      var storage = firebase.storage();
      var gsReference = storage.refFromURL('gs://fecianalyst.appspot.com/');
      //reference to image keys on user data
      const profileImgKeyRef = firebase.database().ref('users').child(currentUserUID).child('profilePics');
      profileImgKeyRef.on('value', function(imageSnapshot){
        var imagePath = imageSnapshot.val();
        //empty image grid before reloading
        var i = 0;
        $("#imgGrid").empty();
          //Get all profile Images and put the on imagegrid (profile.html)

          while (Object.keys(imagePath)[i] != null) { //as long as the imagePath element is not null, keep going.
            //get a specific Pic info
           var currentPicId = Object.values(imagePath)[i];
           gsReference.child(currentUserUID).child('profilePic').child(currentPicId).getDownloadURL().then(function(url){
             //append pic to grid
              $("#imgGrid").append("<img src='"+ url +"'>");
           });
              i++;
            }
         })

        }
    });
