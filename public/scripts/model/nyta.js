'use strict';

(function(module) {

  var nytaObject = {};

  nytaObject.all = [];

  nytaObject.getNews = function(callback) {
    $.get('/nytimes/svc/topstories/v2/home.json')
    .done(function(data) {
      nytaObject.all = data;
    })
    .done(callback);
  };

  module.nytaObject = nytaObject;
})(window);
