'use strict';

(function(module) {

  var nytaObject = {};

  nytaObject.all = [];


  nytaObject.getNews = function(callback) {

    $.ajax({
      url: '/nytimes/svc/topstories/v2/home.json',
      method: 'GET'
    })
    .done(function(data) {
      // console.log(data.results);
      nytaObject.all = data.results;
    })
    .done(callback);
  };

  module.nytaObject = nytaObject;
})(window);
