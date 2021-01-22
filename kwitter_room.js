
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDbg8faX5yrU_ykHNE2fKO-34RjaQwjITk",
      authDomain: "kwitter-2e646.firebaseapp.com",
      databaseURL: "https://kwitter-2e646-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e646",
      storageBucket: "kwitter-2e646.appspot.com",
      messagingSenderId: "1063099248029",
      appId: "1:1063099248029:web:c30c47ee26b7791df29374",
      measurementId: "G-CC8PMY8XHC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot);
{childKey  = childSnapshot.key;
      //Start code

      //End code
getData();
