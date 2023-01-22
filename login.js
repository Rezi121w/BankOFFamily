const firebaseConfig = {
    apiKey: "AIzaSyCQvT2AgzSQUMfNk9SiblbKm4h3eioDuAM",
    authDomain: "bankapp-fe7fb.firebaseapp.com",
    databaseURL: "https://bankapp-fe7fb-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bankapp-fe7fb",
    storageBucket: "bankapp-fe7fb.appspot.com",
    messagingSenderId: "935404317892",
    appId: "1:935404317892:web:9c4e8a8ef138199b36ed91"
  };
  let passadmin;
  firebase.initializeApp(firebaseConfig);
  let db = firebase.database();
  const bal = db.ref("/");
        bal.on("value", function(snapshot) {
            passadmin = snapshot.child("adminpass").val();
        });
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password-field").value;
    if(username.toLowerCase() == "jorji" && password == "001200jorji"){
        localStorage.setItem("user", 1);
        document.getElementById("tobank").style.display = "block";
    }
    else if(username.toLowerCase() == "dati" && password == "777999dati"){
        localStorage.setItem("user", 2);
        document.getElementById("tobank").style.display = "block";
    }
    else if(username.toLowerCase() == "rezi" && password == passadmin){
        localStorage.setItem("user", 13);
        document.getElementById("tobankadmin").style.display = "block";
    }
    else{
        alert("This Values isn't Correct");
    }
}
