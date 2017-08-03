//connect to firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8ssYN0NY7kolATwvynIfBquGiSFy-Q0M",
    authDomain: "esen-dfd9c.firebaseapp.com",
    databaseURL: "https://esen-dfd9c.firebaseio.com",
    projectId: "esen-dfd9c",
    storageBucket: "",
    messagingSenderId: "51140866720"
  };
  firebase.initializeApp(config);

 //sign-up
  //Variables
  var username;
  var email;
  var password;
  var inputEmail;
  var inputPw;
  var database = database.firebase;

  //collect data from form and store in firebase
  $("#add-user").on("click", function(){
    //Store username
    username = function(){
      //compare username
      //if username is the same as another username
      //do not store and alert user to change his username
      //else store username
    }
    //Store email
      //compare email
      //if username is the same as another
      //do not store and alert user to change email
      //else store email
    //store password
      //compare password
      //if username is the same as another
      //do not store and alert user to change password
      //else store password
    //push to database
    database.ref().push({
      userName: username;
      eMail: email;
      passWord: password;
    });
  });
//member signin
  //temp store user input
    //temp store user email
    //temp store user password
  //compare
    //if input email and input password matches 
    //a stored email and password
    //load next page
    //else give alert "email or password does not match...try again".
