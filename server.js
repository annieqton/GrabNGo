'use strict';

const requestProxy = require('express-request-proxy')
const express = require('express')
const port = process.env.PORT || 3000
const app = express();

var proxyNYTimes = function(request, response) {
  console.log('Routing NY times request for', request.params[0]);
  (requestProxy({
    url: `https://api.nytimes.com/svc/topstories/v2/home.json += '?' + $.param({'api-key': ${req.params[0]}})`; //still need to figure this out
    headers: { Authorization: `token ${process.env.NYT_TOKEN}`}
  }))(request, response);
};

app.get('/nytimes/*', proxyNYTimes);

app.use(express.static('./public'));

app.get('/', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});

// https://api.nytimes.com/svc/topstories/v2/home.json

var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

url += '?' + $.param({'api-key': "813e4209609647368542b95b4e055575"});

$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
