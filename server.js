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
  unix: String,
  utc: String,
}

/**
 * TODO:
 * request to /api/:date with vale date should return a JSON object
 * with a unix key with the Unix timestamp of the input date IN MILLISECONDS
 * and the like jsonOBJ{"unix": <value in milliseconds>}
 * 
 */
// const timeStamp = (req, res, next) => {
//   return newPromise
//   /*The Date() constructor has bunch of ways to handle dates, as well epoch timestamp
//   just like that I have to handle the req.params into the Date() constructor
//   and to reverse it I can just use valueOf().*/
//   req.params ? resolve() : PromiseRejection
//   const newDate =  req.params ? new Date(req.params): new Date();
//   const newUnix = req.params ? new Date(req.params): new Date();
//   timeStampObj['utc'] = newDate;
//   timeStampObj['unix'] = newUnix.valueOf();

//   next(timeStampObj);
// }
app.get('/api/:date?', asyncTimeStamp, async function(req, res){
  try{
    const newDate = req.params ? new Date(req.params): new Date();
    timeStampObj['utc'] = newDate.toString();
    timeStampObj['unix'] = newDate.valueOf();
    res.json(timeStampObj)
  } catch (err) {
    console.log(err)
  }
})
console.log(time)