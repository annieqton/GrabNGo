'use strict';

(function(module) {

  var nytaView = {};

  var ui = function() {
    $('#nyta').empty();
  };

  nytaView.index = function() {
    ui();

    $('#nyta').append(
      nytaObject.map(function (news) {
        var render = Handlebars.compile($('#nyta-template').html());
      })
    );
  };

  module.nytaView = nytaView;
})(window);
