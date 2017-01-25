'use strict';

(function(module) {
  var nytaController = {};

  nytaController.index = function() {
    nytaObject.getNews(nytaView.index);
    $('main > section').hide();
    $('nyta').show();
  };

  module.nytaController = nytaController;
})(window);
