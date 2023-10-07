var firebaseConfig = {
  apiKey: "AIzaSyAgbKd_kqwQTsLy9CGqVcJsg1JNn2sxMzE",
  authDomain: "codecollaborator-36a13.firebaseapp.com",
  projectId: "codecollaborator-36a13",
  storageBucket: "codecollaborator-36a13.appspot.com",
  messagingSenderId: "71007858852",
  appId: "1:71007858852:web:e8a00b8208b7e4094eb631",
};
//Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//Signup Function
let signUpButton = document.getElementById("signup");
signUpButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  console.log("clicked");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      location.reload();
      // Signed in
      var user = userCredential.user;
      console.log("user", user.email);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error code", errorCode);
      console.log("error Message", errorMessage);
    });
});

let signInButton = document.getElementById("signin");
signInButton.addEventListener("click", (e) => {
  //Prevent Default Form Submission Behavior
  e.preventDefault();
  console.log("clicked");

  var email = document.getElementById("inputEmail");
  var password = document.getElementById("inputPassword");

  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // location.reload();
      // Signed in
      var user = userCredential.user;
      console.log("user", user.email);
      window.location = "../pages/home.html";
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // alert("error code", errorCode)
      alert(errorMessage);
    });
});

//This method gets invoked in the UI when there are changes in the authentication state:
// 1). Right after the listener has been registered
// 2). When a user is signed in
// 3). When the current user is signed out
// 4). When the current user changes

//Lifecycle hooks
auth.onAuthStateChanged(function (user) {
  if (user) {
    var email = user.email;
    var text = document.createTextNode(email);

    console.log("Signed in");
    //is signed in
  } else {
    //no user signed in
  }
});
