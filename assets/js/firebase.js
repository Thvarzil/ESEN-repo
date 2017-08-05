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
  var database = firebase.database();


  //collect data from form and store in firebase
  $("#add-user").on("click", function(){
    //store variables
    var username = $("#name-input").val().trim();
      console.log(username);
    var email = $("#email-input").val().trim();
      console.log(email);
    var password = $("#password-input").val().trim();
      console.log(password);
    //avoid duplicates
    
    //push to database
    database.ref().push({
      userName: username,
      eMail: email,
      passWord: password,
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
