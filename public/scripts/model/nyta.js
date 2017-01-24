'use strict';

(function(module) {

  var nytaObject = {};

  nytaObject.all = [];

  nytaObject.getNews = function(callback) {
    $.get('/api.nytimes/svc/topstories/v1/{section}.{response-format}')
    .done(function(data) {
      nytaObject.all = data;
    })
    .done(callback);
  };

  module.nytaObject = nytaObject;

})(window);
