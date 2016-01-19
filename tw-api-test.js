var Twit = require('twit');
var util = require('util');
var osc = require('osc-min');
var client = new osc.Client('127.0.0.1', 57120);

var count_kinoko = 0;
var count_takenoko = 0;


var T = new Twit({
    consumer_key: '8GEDXfviBGmujqft7vzJInNOt',
    consumer_secret: 'C7FLArkRrymxXLUNWkVuzVD4MlzuAuuSuyXpW8e1FocIQmAJTr',
    access_token: '3275428002-2v7sG4ebpATJqTRGp2TAIjAZIYCFRsnW7ek20cM',
    access_token_secret: '4VAoxtwhwe924ehTKnrZHJRYd9i3M6ZuPXglU4OMVCyGC'
});


var kinoko = T.stream('statuses/filter', {track: "きのこ"} );
var takenoko = T.stream('statuses/filter', {track: 'たけのこ'} );

kinoko.on('tweet', function(tw) {
    var text =tw.text;
    var user_name = tw.user.name;
    console.log(user_name + "> " + text);
    count_kinoko++;
    console.log("count_kinoko: " + count_kinoko);
});

/*
takenoko.on('tweet', function(tw) {
    var text =tw.text;
    var user_name = tw.user.name;
    console.log(user_name + "> " + text);
    count_takenoko++;
    console.log("count_takenoko: " + count_takenoko);
});
*/




setInterval(
    function(){
        T.get('search/tweets', { q: 'たけのこ', count: 100 }, function(err, data, response) {
  //var text = data.text;
  count_takenoko++;
  data.statuses.forEach(function(tw){ 
        //console.log(tw.user.name + " > " + tw.text);
        //count_takenoko++;
        //console.log("count_takenoko " + count_takenoko);
    });
  count_takenoko = 0;
})
    }
    ,3000)


