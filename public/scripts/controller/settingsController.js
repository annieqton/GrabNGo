
'use strict';
(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('#userSettings').show().siblings().hide();
  }

  var setttings = false; //default state
  var currentUser = null;
  var allUsers = []; // username, preference array

  // check user existence
  //call this on click event on Settings at page load (nytaView.js)
  function checkStorage() {
    if(localStorage.allUsers){
      var retrieveStorage = localStorage.getItem('allUsers');
      allUsers = JSON.parse(retrieveStorage);
    }
  }

  function User(username, world, us, politics, business, technology, science, health, sports, arts, style, food, travel) {
    this.username = username || false;
    this.world = world || false;
    this.us = us || false;
    this.politics = politics || false;
    this.business = business || false;
    this.technology = technology || false;
    this.science = science || false;
    this.health = health || false;
    this.sports = sports || false;
    this.arts = arts || false;
    this.style = style || false;
    this.food = food || false;
    this.travel = travel || false;
    allUsers.push(this);
  }

  $('.settingsSubmit').on('click', function(e) {
    e.preventDefault();

    new User($('#username').val(),
            $('#world').is(':checked'),
            $('#us').is(':checked'),
            $('#politics').is(':checked'),
            $('#technology').is(':checked'),
            $('#science').is(':checked'),
            $('#health').is(':checked'),
            $('#sports').is(':checked'),
            $('#arts').is(':checked'),
            $('#style').is(':checked'),
            $('#food').is(':checked'),
            $('#travel').is(':checked'));

    localStorage.setItem('sessionInfo', JSON.stringify( allUsers));
  });

  // console.log(allUsers);

  module.settingsController = settingsController;
})(window);
