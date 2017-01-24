'use strict';
  const express = require('express'),
  var requestProxy = require('express-request-proxy'),
  const port = process.env.PORT || 3000,
  const app = express();

var proxyNYTimes = function(request, response) {
  console.log('Routing NY times request for', request.params[0]);
  (requestProxy({
    url: 'https://api.nytimes.com/svc/topstories/v2/home.json' + request.params[0],
    headers: { Authorization: 'token ' + process.env.NYT_TOKEN }
  }))(request, response);
};

app.get('/nytimes/*', proxyNYTimes);

app.use(express.static('./'));

app.get('*', function(request, response) {
  console.log('New request:', request.url);
  response.sendFile('index.html', { root: '.' });
});

app.listen(port, function() {
  console.log('Server started on port ' + port + '!');
});
