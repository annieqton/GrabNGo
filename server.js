'use strict';

const requestProxy = require('express-request-proxy')
const express = require('express')
const port = process.env.PORT || 3000
const app = express();

var proxyNYTimes = function(request, response, next) {
  console.log('Routing NY times request for', request.params[0]);

  (requestProxy({
    url: 'https://api.nytimes.com/' + request.params[0], //request.params[0] is passing in url in nyta.js
    dataType: 'json',
    query: {
      'api-key': '813e4209609647368542b95b4e055575'
    }
  }))(request, response, next);
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

// see this as a example for err in api call
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
