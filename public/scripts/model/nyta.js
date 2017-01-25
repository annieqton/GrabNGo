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
      nytaObject.all = data.results;  //because data comes back as an object, not an array. Is this result or results???
    })
    .done(callback);
  };

  module.nytaObject = nytaObject;
})(window);
