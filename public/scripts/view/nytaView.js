'use strict';

(function(module) {

  var nytaView = {};

  var ui = function() {
    $('#nyta').show().siblings().hide();
  };

  var render  = Handlebars.compile($('#nyta-template').html());

  nytaView.index = function() {
    ui();

    $('#nyta').append(nytaObject.all.map(render));
  };

  module.nytaView = nytaView;
})(window);
