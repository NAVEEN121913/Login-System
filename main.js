  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDitDJizTWyMW-OBAiKCl26Ks0pYkoaans",
    authDomain: "login-10311.firebaseapp.com",
    projectId: "login-10311",
    storageBucket: "login-10311.appspot.com",
    messagingSenderId: "1073973790647",
    appId: "1:1073973790647:web:fda2a12525a5935dbf0a32"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const login = document.getElementById('login')
  const signup = document.getElementById('signup')
  const txtemail = document.getElementById('emailId')
  const txtpassword = document.getElementById('password')
  const txtemails = document.getElementById('emailIds')
  const txtpasswords = document.getElementById('passwords')
  const logout = document.getElementById('logout')

  function ca() {
    var sup = document.getElementById("sup")
    var lap = document.getElementById("lop")
    if (sup.style.display === "none") {
      lap.style.display = "none"
      sup.style.display = "block"
    }
  }

  //Login Account
  login.addEventListener('click', e=>{
  // var userId = document.getElementById('userId')
  var email = txtemail.value;
  var pass = txtpassword.value;
  var auth = firebase.auth();

  var promise = auth.signInWithEmailAndPassword(email,pass);
  promise.catch(e=> {
    //location.reload()
    alert('Incorrect Username or Password')
    console.log(e.message)
  } );



})

//Create New Account
signup.addEventListener('click', e=>{
  // var userId = document.getElementById('userId')

  var email = txtemails.value;
  var pass = txtpasswords.value;
  var auth = firebase.auth();
  var promise = auth.createUserWithEmailAndPassword(email,pass).then((user) => {
    window.location.reload()
    alert("Logging In")
  })
  promise.catch((error) => {
    alert(error.message)
    window.location.reload()
  });

  
})

logout.addEventListener('click', e=>{
  firebase.auth().signOut().then(() => {
  }).catch((error) => {
    alert(error.message)
  });
})

const lop = document.getElementById('lop')
const ent = document.getElementById('ent')

// On State
firebase.auth().onAuthStateChanged(firebaseUser =>{

  if (firebaseUser) {
    console.log(firebaseUser);
    ent.classList.remove('hide')
    lop.classList.add('hide')
  }
  else{

    ent.classList.add('hide')
    lop.classList.remove('hide')
  }

  //Display User Name
  var user = firebase.auth().currentUser;
  var p = document.getElementById('p')
  if (user != null) {
    var email = user.email
    p.innerHTML = "Welcome:" + email
  }
})