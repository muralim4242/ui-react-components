var firebase=require('firebase');
// require('dotenv').config()

try {
  var config = {
    apiKey: "AIzaSyAg_deBRc0hv16WYIseG6DhE8XxcQvJMZw",
    authDomain: "mihy-all.firebaseapp.com",
    databaseURL: "https://mihy-all.firebaseio.com",
    projectId: "mihy-all",
    storageBucket: "mihy-all.appspot.com",
    messagingSenderId: "734387907524"
  };
  firebase.initializeApp(config);
} catch (e) {
  console.log(e);
}

// export var githubProvider = new firebase.auth.GithubAuthProvider();
// export var googleProvider = new firebase.auth.GoogleAuthProvider();
var firebaseRef = firebase.database().ref();
// export default firebase;
module.exports=firebase;
module.exports={
  firebaseRef
}


// console.log(process.env);
