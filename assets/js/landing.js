var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiKey = "sm6y3s3epyau9hncxmkueq56";
var queryURL = "http://api.sportradar.us/lol-t1/en/tournaments/sr:tournament:2454/schedule.json?api_key=" + apiKey;

$.ajax({

    url: proxy + queryURL,
    complete:function(data) {
      var teamOne = data.responseJSON.sport_events[91].competitors[0].name;
      var teamTwo = data.responseJSON.sport_events[91].competitors[1].name;
      var date = "Scheduled: August 15, 2:00 AM MST";
      $("#gameOne").html("<ul><li>Teams: " + teamOne + " Vs. " + teamTwo + "</li><li>" + date + "</li></ul>");
    }
});

var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiKey = "sm6y3s3epyau9hncxmkueq56";
var queryURL = "http://api.sportradar.us/lol-t1/en/tournaments/sr:tournament:2454/results.json?api_key=" + apiKey;

$.ajax({
  url: proxy + queryURL,
  complete:function(data) {
    // var teamOne = data.responseJSON.results
    var teamOne = data.responseJSON.results[90].sport_event.competitors[0].name;
    var teamTwo = data.responseJSON.results[90].sport_event.competitors[1].name;
    var date = "Played: August 12, 2017";
    var winner = "Result: 2-0 SKtelecom T1";
    $("#recentOne").html("<ul><li>Teams: " + teamOne + " Vs. " + teamTwo + "</li><li>" + date + "</li><li>" + winner + "</li></ul>");
  }
});


var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiKey = "tcs9fj7nprkjysu95cxnpg2n";
var queryURL = "http://api.sportradar.us/dota2-t1/en/tournaments/sr:tournament:13911/schedule.json?api_key=" + apiKey;

$.ajax({
  url: proxy + queryURL,
  complete:function(data) {
    console.log(data);
    var teamOne = data.responseJSON.sport_events[407].competitors[0].name;
    var teamTwo = data.responseJSON.sport_events[407].competitors[1].name;
    var date = "Scheduled: August 12, 11:00 AM MST";
    $("#gameTwo").html("<ul><li>Teams: " + teamOne + " Vs. " + teamTwo + "</li><li>" + date + "</li></ul>");
  }
});

var proxy = 'https://cors-anywhere.herokuapp.com/';
var apiKey = "tcs9fj7nprkjysu95cxnpg2n";
var queryURL = "http://api.sportradar.us/dota2-t1/en/tournaments/sr:tournament:13911/results.json?api_key=" + apiKey;

$.ajax({
  url: proxy + queryURL,
  complete:function(data) {
    var teamOne = data.responseJSON.results[405].sport_event.competitors[0].name;
    var teamTwo = data.responseJSON.results[405].sport_event.competitors[1].name;
    var date = "Played: August 11, 2017";
    var winner = "Result: 2-1 Newbee";
    $("#recentTwo").html("<ul><li>Teams: " + teamOne + " Vs. " + teamTwo + "</li><li>" + date + "</li><li>" + winner + "</li></ul>");
  }
})