//connect to firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB8ssYN0NY7kolATwvynIfBquGiSFy-Q0M",
    authDomain: "esen-dfd9c.firebaseapp.com",
    databaseURL: "https://esen-dfd9c.firebaseio.com",
    projectId: "esen-dfd9c",
    storageBucket: "esen-dfd9c.appspot.com",
    messagingSenderId: "51140866720"
  };
  firebase.initializeApp(config);

 //sign-up
  //Variables
  var email;
  var password;
  var inputEmail;
  var inputPw;
   var database = firebase.database();
  var userlist = null;
//below says that it is referencing the /user branch in firebase
//snapshot...I don't know what that means.
database.ref("/users").on("value", function(snapshot) {
  userlist = snapshot.val();
  // Print the local data to the console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});

  //collect data from form and store in firebase
  $("#add-user").on("click", function(noReset){
    noReset.preventDefault();
    //store variables
    var inputuser = $("#name-input").val().trim();
      console.log(inputuser);
    var email = $("#email-input").val().trim();
      console.log(email);
    var password = $("#password-input").val().trim();
      console.log(password);
    //add to array
   //setting userExists at false so that second if function doesn' run by default.
    var userExists = false;
    //using a for each loop because firebase doesn't like arrays
    //the parameters key and value are default. They refer to what you would see in a table.
    $.each( userlist, function( key, value ) {
      if(value.username === inputuser){
        alert("user exsits");
        userExists= true;
      }
});
    //The !userExists means that userExists is set to false
    if(!userExists){
      //pushes info to the database
      alert("user added!");
        database.ref("/users").push({
      username : inputuser,
      eMail: email,
      passWord: password,
    }); 
    // 
      }
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
