var fs = require('fs');
var twitterPackage = require('twitter');
var keys = require("./keys");
var twitter = new twitterPackage(keys.twitterKeys);
// var newSpotifyRequest = new spotify();
var social = process.argv[2];



switch (social) {
case "my-tweets":
	twitterStatus();
	break;

case "spotify-this-song":
	spotifySong();
	break;

case "movie-this":
	movieThis();
	break;

case "do-what-it-says":
	sayWhat();
	break;
}

function twitterStatus() {
	var twitterRequest = "/statuses/user_timeline.json?count=20&exclude_replies=true";
	twitter.get(twitterRequest, function(error, tweet, response) {
				if(!error) {
					console.log(tweet);
			}
		})
}

function spotifySong(){
	var spotify = require('spotify');
	var track = process.argv[3];
	// var spotifyRequest = "https://api.spotify.com/v1/search?q=" + track + "&type=track";
	spotify.search({type: 'track', query: track}, function(error,data) {
		if (!error) {
			console.log("-----------------------------------------------------------");
			console.log(data.tracks.items);			
		} else
			console.error("Something happened" + error);
			return;		
	})
}

function movieThis(){
	var movie = process.argv[3];
	var request = require('request');
	var movieRequest = "http://www.omdbapi.com/?t=" + movie + "";
	request(movieRequest, function(error, response, body){
		if(!error && response.statusCode === 200) {
			console.log(JSON.parse(body));
	} else
		console.log("You have an errorrrr" + error);
	})
 }




