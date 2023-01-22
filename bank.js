if(localStorage.getItem("user") != 1 && localStorage.getItem("user") != 2 && localStorage.getItem("user") != 13 ){
    window.location.href = 'index.html';
}
const firebaseConfig = {
  apiKey: "AIzaSyCQvT2AgzSQUMfNk9SiblbKm4h3eioDuAM",
  authDomain: "bankapp-fe7fb.firebaseapp.com",
  databaseURL: "https://bankapp-fe7fb-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bankapp-fe7fb",
  storageBucket: "bankapp-fe7fb.appspot.com",
  messagingSenderId: "935404317892",
  appId: "1:935404317892:web:9c4e8a8ef138199b36ed91"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.database();


function moneyread(){
    let localuser = localStorage.getItem("user");

        const bal = db.ref("balance/");
        bal.on("value", function(snapshot) {
            var userbal = snapshot.child(localuser).val();
            document.getElementById("name").innerHTML += userbal.user;
            document.getElementById("money").innerHTML += userbal.balance;
        });
    
}

function submitwish(){
    let localuser = localStorage.getItem("user");
    var mywish = document.getElementById("wish").value;
    var moneybtc = document.getElementById("btcmoney");
    var value = moneybtc.options[moneybtc.selectedIndex].value;
    const time = Date.now();
    let userbalance;
    const bal = db.ref("balance/");
    bal.on("value", function(snapshot) {
        var userbal = snapshot.child(localuser).val();
        userbalance = userbal.balance;
    });
    //
    if(userbalance >= value && mywish != ""){
        db.ref("wishes/" + time).set({
            user: localuser,
            wish: mywish,
            money: value,
        });
        if(localuser == 1){
            var balancevalue = userbalance - value;
            db.ref("balance/" + localuser).set({
                user: "jorji",
                balance: balancevalue,
            });
        }
        else if(localuser == 2){
            var balancevalue = userbalance - value;
            db.ref("balance/" + localuser).set({
                user: "dati",
                balance: balancevalue,
            });
        }
    }
    else {
        alert("Your Balance is Less");
    }
}