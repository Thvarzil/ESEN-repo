
var config = {
    apiKey: "AIzaSyB8ssYN0NY7kolATwvynIfBquGiSFy-Q0M",
    authDomain: "esen-dfd9c.firebaseapp.com",
    databaseURL: "https://esen-dfd9c.firebaseio.com",
    projectId: "esen-dfd9c",
    storageBucket: "esen-dfd9c.appspot.com",
    messagingSenderId: "51140866720"
};
firebase.initializeApp(config);
var userbase = firebase.database();

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

var userbase

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