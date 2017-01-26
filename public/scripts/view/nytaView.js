'use strict';

(function(module) {
  var nytaView = {};

  var ui = function() {
    $('#nyta').show().siblings().hide();
  };
nytaView.index = function() {
  // function checkStorage() {
    if(localStorage.sessionInfo){
      var retrieveStorage = localStorage.getItem('sessionInfo');
      var allUsers = JSON.parse(retrieveStorage);

      var section = [];
      console.log(section)
      for(var prop in allUsers[0]) {
        if (allUsers[0][prop] === true) {
          section.push(prop)
        }
      }
      for(var i = 0; i < section.length; i++){
        // console.log(section[i]);
        for(var j = 0; j < nytaObject.all.length; j++) {
          console.log('hey');
          // console.log(nytaObject.all);
          if(nytaObject.all[j].section === section[i]) {
            var render  = Handlebars.compile($('#nyta-template').html());
            $('#nyta').append(nytaObject.all[j].map(render));
            console.log('working');
            // console.log(nytaObject.all.length);
          }
        }
    }
  } else {



  // checkStorage();
  ui();

  var render  = Handlebars.compile($('#nyta-template').html());



    $('#nyta').append(nytaObject.all.map(render));
    console.log(nytaObject.all.length);
}
};

  module.nytaView = nytaView;
})(window);
