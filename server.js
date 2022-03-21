// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

/*Timestamp object */

let timeStampObj = {
  utc: "",
  unix: ""
}
app.get('/api/:date?', function(req, res){
  let input = req.params.date
  console.log(input)

  if(input.includes('-')) {
    timeStampObj.utc = new Date(input).toUTCString();
    timeStampObj.unix = new Date(input).getTime();
    console.log(timeStampObj)
  } else {
    timeStampObj.utc = new Date(parseInt(input)).toUTCString()
    timeStampObj.unix = new Date(parseInt(input)).getTime()
    console.log(timeStampObj)
  }
  if(!req.params.date) {
    res.json({error: "Invalid Date"})
  }
  res.json(timeStampObj);
})

app.get('/api', function(req, res){
  timeStampObj.utc = new Date().toUTCString();
  timeStampObj.unix = new Date().getTime()
  res.json(timeStampObj)
})