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


//getting elements from html for login
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignup');
  const logoutLi = document.getElementById('logoutLi');
  const txtEmail2 = document.getElementById('txtEmail2');
  const txtPass2 = document.getElementById('txtPass2');
  const loginInfo = document.getElementById('loginInfo');


//add login event
loginBtn.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message))
});

//sign out
logoutLi.addEventListener('click', e => {
    firebase.auth().signOut();
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {} else {
            $("#successfulLogout").delay(3000).fadeOut("slow");
        }
    });
});

// add a realtime listener of logged in users
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser) {
    console.log(firebaseUser);
    $("#loginInfo").hide();
    $("#loginLi").hide();
    $("#logoutLi").show();
    $("#loginBubble").fadeToggle('fast');
    $(".arrow").slideToggle("medium");
  } else {
    $("#loginInfo").show();
    $("#loginLi").show();
    $("#logoutLi").hide();
  }
});






//get patient list from server

//get elements from html
//const patientList = document.getElementById('patientList');
//create references... don't know how to reference a specific path
//const dbRefUsers = firebase.database().ref().child('users');
//const dbRefSebastian = dbRefUsers.child('8txthHri2GPSV01e5LD36jnRIAw1');
//const dbRefList = dbRefSebastian.child('patientList');
//sync changes in object
//dbRefUsers.on('value', snap => {
//  preUsers.innerText = JSON.stringify(snap.val(), null, 3);
//});
//sync list when something is added
//dbRefList.on('child_added', snap => {
//    const li = document.createElement('li');
//    const a = document.createElement('a');
//    a.innerText = snap.val();
//    a.id = snap.key;
//    li.appendChild(a);
//    patientList.appendChild(li);
//  });

//sync any changes on list items
//dbRefList.on('child_changed', snap=> {
//  const liChanged = document.getElementById(snap.key);
//  liChanged.innerText = snap.val();
//})
//sync any items removed from list
//dbRefList.on('child_removed', snap=> {
//  const liToRemove = document.getElementById(snap.key);
//  liToRemove.innerText = snap.val();
//  liToRemove.remove(snap.key);
//})
