'use strict';

(function(module) {

  var nytaObject = {};

  nytaObject.all = [];


  nytaObject.getNews = function(callback) {

    $.get('https://api.nytimes.com/svc/topstories/v2/home.json')  //still need to figure this out
    .done(function(data) 
      nytaObject.all = data.results;  //because data comes back as an object, not an array. Is this result or results???
    })
    .done(callback);
  };

  module.nytaObject = nytaObject;
})(window);
