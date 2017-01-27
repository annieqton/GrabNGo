'use strict';

(function(module) {
  var nytaView = {};


  var ui = function() {
    $('#nyta').show().siblings().hide();
  };

  nytaView.index = function() {

    nytaView.filterSections();
    console.log('Object called from NYT', nytaObject.all);

    if(localStorage.sessionInfo){
      var retrieveStorage = localStorage.getItem('sessionInfo');
      var currentUser = JSON.parse(retrieveStorage);
      var username = currentUser['username'];
      $('#welcome').html('Welcome ' + username + '!');
      $('#nyta').html('');

      var section = [];
      for(var prop in currentUser) {
        if (prop != 'username' && currentUser[prop] === true) {
          // console.log("Prop true: " + prop)
          section.push(prop)
        }
      }

      for(var i = 0; i < section.length; i++){
        $('#nyta').append('<H1>'+section[i]+'</H1>');
        for(var j = 0; j < nytaObject.all.length; j++) {
          if(nytaObject.all[j].section === section[i]) {
            var render  = Handlebars.compile($('#nyta-template').html());
            $('#nyta').append(render(nytaObject.all[j]));
          }
        }
        $('#nyta').append('<HR />');
      }
    } else {

      ui();

      render = Handlebars.compile($('#nyta-template').html());

      $('#nyta').append(nytaObject.all.map(render));
      // console.log(nytaObject.all.length);
    }
  };

  nytaView.filterSections = function () {
    nytaObject.all = nytaObject.all.forEach(function(element) {
      if(element.section === "U.S.") {
        element.section = "America";
      }
      if(element.section === "Business Day") {
        element.section = "Business";
      }
    });
  }

  module.nytaView = nytaView;
})(window);
