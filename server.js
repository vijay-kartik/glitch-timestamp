// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.get("/:content", function (req, res) {
  
  
  
  res.json(ResultDate(req.params.content));
  res.sendStatus(200);
});

// Simple in-memory store for now




var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

var result = {
  Unix: null,
  Natural: null
};
var date;
function ResultDate(data){
  
  if(!isNaN(parseInt(data))){
    date = new Date(parseInt(data));
  }
  else {
    date = new Date(data);
  }
  if(!isNaN(date.getTime())){
    result = {
      Unix: date.getTime(),
      Natural: getNaturalDate(date)
    }
    return result;
  }
}

function getNaturalDate(date){
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return (months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear());
}
