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
      'api-key': `${process.env.APIKEY}`
    }
  }))(request, response, next);
};

app.get('/nytimes/*', proxyNYTimes);

app.use(express.static('./public'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: './public' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
