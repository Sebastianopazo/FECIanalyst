  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAt_5-XB3_KtoNA3dQGRavk9xNuMIHGajg",
    authDomain: "fecianalyst.firebaseapp.com",
    databaseURL: "https://fecianalyst.firebaseio.com",
    storageBucket: "fecianalyst.appspot.com",
    messagingSenderId: "395548199076"
  };
  firebase.initializeApp(config);

  //getting elements from html
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  const txtEmail2 = document.getElementById('txtEmail2');
  const txtPass2 = document.getElementById('txtPass2');



//add login event
btnLogin.addEventListener('click', e => {
  //get email and password
  const email = txtEmail.value;
  const pass = txtPassword.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(e => console.log(e.message))
});

// Add signup event
btnSignUp.addEventListener('click', e => {
  //get email and password
  const Email2 = txtEmail2.value;
  const Pass2 = txtPass2.value;
  const auth = firebase.auth();
  //sign in
  const promise = auth.createUserWithEmailAndPassword(Email2, Pass2);
  promise.catch(e => console.log(e.message))
});

btnLogout.addEventListener('click', e =>{
  firebase.auth().signOut();
});

// add a realtime listener
firebase.auth().onAuthStateChanged(firebaseUser =>{
  if (firebaseUser) {
    window.alert('succesfully logged in')
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    window.alert('not logged');
    btnLogout.classList.add('hide');
  }
});
