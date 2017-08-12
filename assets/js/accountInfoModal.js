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
//===============ON CLICK on SIGN UP FORM====================================
  //collect data from form and store in firebase


  $('#modal-close').on('click', function(e){
    e.preventDefault();
    console.log('add user got clicked');
    var data;
    var username = $('#name-input').val().trim();
    var email = $("#email-input").val().trim();;
    var password = $("#password-input").val().trim();;
    var loginState = false;

    // ===================adding LOGIN=================================
    database.ref("/users").once("value", function(snapshot){
      
      data = snapshot.val().users;
      //We need it as a JS object...so that it doesn't read it as a string we are parsing it here
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
        data = snapshot.val().users;
        //We need it as a JS object...so that it doesn't read it as a string we are parsing it here
        data = JSON.parse(data);
        emailMatch = false;
        passMatch = false;

        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            
            if (data[i].email === memberemail && data[i].password === memberpassword) {
              // alert("Validated! You will be redirected to the member page.")
              var emailMatch = true;
              var passMatch = true;
              console.log(emailMatch);
              //>>>load next page<<<
              window.location.href = "landing.html";
            
            };
        };
          if (!emailMatch) {
            alert("Your email doesn't match.");
          };
          if (!passMatch) {
            alert("Your password doesn't match.");
          }
          
    });
  });
    

   
//======================end of member sign in==============


//store teams in here
var teams = {
    LoL: ["Cloud9 (LoL)", "SKTT1", "Koo Tigers"],
    DOTA: ["Cloud9 (DotA)", "CompLexity", "Digital Chaos"]
};

var chosen = {
    games: [],
    teams: []
};



function gameBtnClicked(input, target) {

    var alreadyChosen = false;
    console.log(chosen.games);
    for (var i = 0; i < chosen.games.length; i++) {
        if (input === chosen.games[i]) {
            alreadyChosen = true;
            console.log(alreadyChosen);
        }
    }

    if (alreadyChosen === false) {
        chosen.games.push(input);
        console.log("moving on");
        var newBtn = $("<button>");

        newBtn.attr("class", "btn btn-success");
//    add in ability to unselect option

        newBtn.text(input);

        $(".chosenPanel").append(newBtn);

        if(input==="League of Legends"){
            for(var i = 0; i < teams.LoL.length; i++){
                var teamBtn = $("<button>");

                teamBtn.attr("class", "btn btn-success teamBtn");
                teamBtn.attr("data-team", teams.LoL[i]);
                teamBtn.text(teams.LoL[i]);

                $(".teamPanel").append(teamBtn);
            }
        }
        if(input==="Defense of the Ancients"){
            for(var i = 0; i < teams.DOTA.length; i++){
                var teamBtn = $("<button>");

                teamBtn.attr("class", "btn btn-success teamBtn");
                teamBtn.attr("data-team", teams.DOTA[i]);
                teamBtn.text(teams.DOTA[i]);

                $(".teamPanel").append(teamBtn);
            }
        }

    }
    console.log(chosen);
    // target.prop("disabled", true);
}

function teamBtnClicked(input, target) {

    var alreadyChosen = false;
    console.log(chosen.teams);
    for (var i = 0; i < chosen.teams.length; i++) {
        if (input === chosen.teams[i]) {
            alreadyChosen = true;
            console.log(alreadyChosen);
        }
    }

    if (alreadyChosen === false) {
        chosen.teams.push(input);
        console.log("moving on");
        var newBtn = $("<button>");

        newBtn.attr("class", "btn btn-success");
//    add in ability to unselect option

        newBtn.text(input);

        $(".chosenPanel").append(newBtn);


    }
    console.log(chosen);
    // target.prop("disabled", true);
}


function populateFavorites(){
    $("#interestBox").empty();

    var gamediv = $("<div>");
    gamediv.attr("class", "infodiv");
    var teamdiv = $("<div>");
    teamdiv.attr("class", "infodiv");

    gamediv.text("Games: " + chosen.games);
    teamdiv.text("Teams: " + chosen.teams);

    $("#interestBox").append(gamediv, teamdiv);
}

$(".gameBtn").on("click", function () {
    var target = this;
    var choice = target.dataset.game;
    gameBtnClicked(choice, target);
});

function createUser(){

//    Kelcey: So I was thinking you could use this function to save user info to the database.
//    I also put a redirect to the landing page in the on click down below

}


$(document).on("click", ".teamBtn", function () {
    console.log("Help, Ive been clicked!!");
    var target = this;
    var choice = target.dataset.team;
    teamBtnClicked(choice);
});

$(document).on("ready", function(){
    populateFavorites();
});

$("#modal-close").on("click", function(){
    populateFavorites();
    createUser();
    window.location.href="landing.html";
});