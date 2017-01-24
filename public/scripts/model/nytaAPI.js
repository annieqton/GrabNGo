'use strict';
(function(module) {
  var nytaObject = {};

  nytaObject.all = [];

  nytaObject.requestArticle = function(callback) {
    $.get('/nytimes/svc/topstories/v1/{top_stories_v2}.{json}');
  };
})(window);
