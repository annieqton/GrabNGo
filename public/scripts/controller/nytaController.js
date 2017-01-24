'use strict';

(function(module) {
  var nytaController = {};

  nytaController.index = function() {
    nytaObject.getNews(nytaView.index);
  };

  module.nytaController = nytaController;
})(window);
