'use strict';

(function(module) {
  var nytaView = {};

  var ui = function() {
    $('#nyta').show().siblings().hide();
  };

  function checkStorage() {
    if(localStorage){
      var retrieveStorage = localStorage.getItem('sessionInfo');
      var allUsers = JSON.parse(retrieveStorage);

      var section = ['world', 'us'];
      for (var i = 0; i < section.length; i++){
        // console.log(section[i]);
        for (var j = 0; j < nytaObject.all.length; j++){
          if (nytaObject.all[j].section === section[i]){
            console.log(nytaObject.all[j].title)
          }
        }
      }
    }
  }

  checkStorage();

  var render  = Handlebars.compile($('#nyta-template').html());

  nytaView.index = function() {
    ui();

    $('#nyta').append(nytaObject.all.map(render));
  };

  module.nytaView = nytaView;
})(window);
