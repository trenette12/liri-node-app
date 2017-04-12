var theKeys = require("keys.js");
var myKeys = theKeys.twitterKeys;
var twitter = require("twitter");
// var twitterName = process.argv[3];

var queryURL = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=" + twitterName + "&count=3";

client.get('statuses/user_timeline', function(error, tweets, body) {
	if(error) {
		return console.error(error);
	}
		console.log(tweets);

});