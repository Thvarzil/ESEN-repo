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
//   var userlist = null;


// //==================NOT SURE WHAT THIS DOES======================
// //below says that it is referencing the /user branch in firebase
// //snapshot...I don't know what that means.
// database.ref("/users").on("value", function(snapshot) {
//   userlist = snapshot.val();
//   // Print the local data to the console.
// }, function(errorObject) {
//   console.log("The read failed: " + errorObject.code);
// });
//=================================================================

//===============ON CLICK on SIGN UP FORM====================================
  //collect data from form and store in firebase


  $('#add-user').on('click', function(e){
    e.preventDefault();
    console.log('add user got clicked');
    var data;
    var username = $('#name-input').val().trim();
    var email = $("#email-input").val().trim();;
    var password = $("#password-input").val().trim();;
    var loginState = false;

    // ===================adding LOGIN=================================
    database.ref("/users").once("value", function(snapshot){
      
      //parse list string...this creates an array on firebase
      data =snapshot.val().users;

      data = JSON.parse(data);
      
      if(data === null){
        data = [];
      }

      //log string to console
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        if (data[i].email === email) {
          alert("There is already an account associated with that email.");
        }
        // if (data[i].password === password) {
        //   alert("There is already an account associated with that password.");
        // }
        if (data[i].email === email && data[i].password === password) {
          alert("You already have an account. Both email and password match, therefore you will be logged in.");
          loginState = true;
        }
      };
      if (!loginState) {
          //add new users to list
          data.push({username: username
                     ,email: email
                     ,password: password});
        //stringify data 
        console.log(data);
        var storeData = JSON.stringify(data);
        console.log(storeData);
        //Set Data
        database.ref("/users").set({
          //adds stringified data to array in firebase 
          users: storeData
        });
      }else{
        alert("You have been logged in!");
      }
    });
    //==================end of 'adding LOGIN'===================
});
//======================END OF SIGN UP ON CLICK=========================================



//=====================MEMBER SIGN IN=====================
//collect data from form and compare with data already in firebase
  $('#signin').on('click', function(noReset){
    noReset.preventDefault();

    //store variables
    var memberemail = $('#email-signin').val().trim();
      console.log(memberemail);
    var memberpassword = $('#password-signin').val().trim();
      console.log(memberpassword);
    // check data in firebase
    database.ref('/users').once('value', function(snapshot){
      data = snapshot.val();
        if (data.users.email === memberemail && data.users.password === memberpassword) {
          alert("Validated! You will be redirected to the member page.")
          //>>>load next page<<<
        }else{
          alert("Your username or password is incorrect. Try again.")
        }
    });
  });
    

   
//======================end of member sign in==============