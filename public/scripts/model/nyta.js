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
      nytaObject.all = data.results;
      // nytaObject.filterSections();
    })
    .done(callback);
  };

  nytaObject.filterSections = function () {
    var filterObject = nytaObject.all.forEach(function(element) {
      if(element.section === "U.S.") {
        element.section = "America";
      }
      if(element.section === "Business Day") {
        element.section = "Business";
      }
    nytaObject.all = filterObject;
    // console.log(filterObject);
    });
  }

  module.nytaObject = nytaObject;
})(window);
