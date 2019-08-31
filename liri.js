require("dotenv").config();
var keys = require("./key.js");
var moment = require("moment");
var fs = require("fs");
var axios = require("axios");


var search = process.argv[2]; //refers to what user wants
var userSearch = process.argv.slice(3).join(" "); //what the user is searching

var searchConcert = function (userSearch) { //concert completed and tested
  axios.get("https://rest.bandsintown.com/artists/" + userSearch + "/events?app_id=codingbootcamp").then(
    function (response, error) {
      console.log("\r\n\r\n\r\n");
      console.log("Venue: " + response.data[0].venue.name);
      console.log("Location: " + response.data[0].venue.city);
      console.log("Date: " + moment(response.data[0].datetime).format("MM-DD-YYYY"));
      console.log("\r\n\r\n\r\n");

    })
};

var spotifySearch = function (userSearch) { //spotify completed and tested


  var Spotify = require("node-spotify-api");

  var spotify = new Spotify(keys.spotify);

  spotify.search({
      type: 'track',
      query: userSearch
    }, function (error, response) {
      if (error) {
        return console.log("error present: " + error);
      }

      console.log("\r\n\r\n\r\n");
      console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
      console.log("Song: " + response.tracks.items[0].name);
      console.log("Preview: " + response.tracks.items[0].preview_url);
      console.log("Album: " + response.tracks.items[0].album.name);
      console.log("\r\n\r\n\r\n");


      if (!userSearch) {
        userSearch = "The Sign";
      }
    }

  );

}



var movieSearch = function (userSearch) { //movie completed and tested
  if (!userSearch) {
    userSearch = "Mr. Nobody";
  }
  axios.get("http://www.omdbapi.com/?t=" + userSearch + "&it&apikey=trilogy").then(
    function (response, error) {
      var results = JSON.stringify(response.data);


      console.log("\r\n\r\n\r\n");
      console.log("The movie's information is: " + results);
      console.log("\r\n\r\n\r\n");
    })
};




var doSearch = function () { //do waht it says completed and tested
  var data = "";
  fs.readFile("random.txt", 'utf-8', function (error, response) {

    var result = response.split(",");
    console.log("\r\n\r\n\r\n");
    console.log(result)
    spotifySearch(result[1]);

    console.log(data);
    console.log("\r\n\r\n\r\n");
  });
};


//node search
if (search == "concert-this") {
  searchConcert(userSearch);
} else if (search == "spotify-this-song") {
  spotifySearch(userSearch);
} else if (search == "movie-this") {
  movieSearch(userSearch);
} else if (search == "do-what-it-says") {
  doSearch(userSearch);
};