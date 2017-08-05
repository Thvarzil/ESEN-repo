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
  var database = firebase.database();
  var userlist = null;

//==================NOT SURE WHAT THIS DOES======================
//below says that it is referencing the /user branch in firebase
//snapshot...I don't know what that means.
database.ref("/users").on("value", function(snapshot) {
  userlist = snapshot.val();
  // Print the local data to the console.
}, function(errorObject) {
  console.log("The read failed: " + errorObject.code);
});
//=================================================================

//===============ON CLICK on SIGN UP FORM====================================
  //collect data from form and store in firebase
  $("#add-user").on("click", function(noReset){
    noReset.preventDefault();
    //store variables
    var inputuser = $("#name-input").val().trim();
      console.log(inputuser);
    var inputemail = $("#email-input").val().trim();
      console.log(inputemail);
    var inputpassword = $("#password-input").val().trim();
      console.log(inputpassword);
    //===================adding LOGIN=================================
    //setting userExists at false so that second if function doesn' run by default.
    var userExists = false;
    var emailused = false;
    //using a for each loop because firebase doesn't like arrays
    //the parameters key and value are default. They refer to what you would see in a table.
    $.each( userlist, function( key, value ) {
      if(value.username === inputuser && value.email === inputemail){
        alert("Username or email already used. Please try again.");
        userExists= true;
        emailused = true;
        }
      });
    //The !userExists means that userExists is set to false
    if(!userExists && !emailused){
      //pushes info to the database
      alert("User added!");
        database.ref("/users").push({
      username : inputuser,
      email: inputemail,
      passWord: inputpassword,
    }); 
    }
    //==================end of 'adding LOGIN'===================
});
//======================END OF SIGN UP ON CLICK=========================================



//=====================MEMBER SIGN IN=====================
//collect data from form and store in firebase
  $("#sigin").on("click", function(noReset){
    noReset.preventDefault();
    //store variables
    var memberemail = $("#email-signin").val().trim();
      console.log(memberemail);
    var memberpassword = $("#password-signin").val().trim();
      console.log(memberpassword);

    //===================adding LOGIN=================================
    //setting userExists at false so that second if function doesn' run by default.
    var emailvalid = false;
    var passwordvalid = false;
    //using a for each loop because firebase doesn't like arrays
    //the parameters key and value are default. They refer to what you would see in a table.
    $.each( userlist, function( key, value ) {
      if(value.email === memberemail && value.passWord === memberpassword){
        alert("Welcome to the ESEN. Your page will be loaded shortly.");
        emailvalid = true;
        passwordvalid = true;
        }
      });
    //The !emailvalid means that emailvalid is set to false
    if(!emailvalid && !passwordvalid){
      alert("Your Email or Password is not correct.");
    };
  });
//======================end of member sign in==============