var Twit = require('twit');
var config = require('./twitterConfig')
var express = require('express');
var app = express();
var User       = require('../app/models/user');

var T = new Twit({
 consumer_key:         'BGj8ZfNUcfXHdHsFPu9OGdoXr',
  consumer_secret:      'Iz5pPCo8w6z1rktDtmFKQSyVUaigMn79dAY690DD35e2Aqig7S',
  access_token:         req.user.token,
  access_token_secret:  req.user.tokenSecret,
});





app.post('/post', (req, res) => {

  var tweet = {
    status: req.body.input
  }
  T.post('statuses/update', tweet, tweeted)

    function tweeted(err, data, response) {
    if(err){
    console.log("Something went wrong!");
    console.log(T.access_token);
    console.log(T.access_token_secret);
    }
    else{
    console.log("Voila It worked!");
    }
  }
});

module.exports = app;
