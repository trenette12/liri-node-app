var social = process.argv[2];

//Switch Case statements that will call predefined functions if user inputs one of the following statements.
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
//Twitter Constructor Function//
function twitterStatus() {
	var twitterPackage = require('twitter');
	var keys = require("./keys");
	var twitter = new twitterPackage(keys.twitterKeys);
	var twitterRequest = "/statuses/user_timeline.json?count=20&exclude_replies=true";
	twitter.get(twitterRequest, function(error, tweet, response) {
				if(!error) {
					console.log(tweet);
			}
		})
}
//Spotify Constructor Function//
function spotifySong(){
	var spotify = require('spotify');
	var track = process.argv[3];
	spotify.search({type: 'track', query: track}, function(error,data) {
		if (!error) {
			console.log("-----------------------------------------------------------");
			console.log(data.tracks.items);			
		} else {
			console.error("Something happened" + error);
			return;	
			}	
	})
}
//OMDB Constructor Function//
function movieThis(){
	var movie = process.argv[3];
	var request = require('request');
	var movieRequest = "http://www.omdbapi.com/?t=" + movie + "";
	request(movieRequest, function(error, response, body){
		if(!error && response.statusCode === 200) {
			console.log("-----------------------------------------------------------")
			console.log(JSON.parse(body));
	} else {
		console.log("You have an errorrrr" + error);
		}
	})
 }
//Do What It Says Function//
function sayWhat(){
	var fs = require('fs');
	fs.readFile("random.txt", "utf-8", function(error, data){
		if(!error) {
			console.log("-----------------------------------------------------------")
			spotifySong(data);
		} else {
			console.log("You have an errorrr, grrrr" + error);
		}
	})

}


