
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


  function User(username, World, us, Politics, Business, Technology, Science, Health, Sports, Arts, Style, Food, Travel) {
    this.username = username || false;
    this.World = World || false;
    this.us = us || false;
    this.Politics = Politics || false;
    this.Business = Business || false;
    this.Technology = Technology || false;
    this.Science = Science || false;
    this.Health = Health || false;
    this.Sports = Sports || false;
    this.Arts = Arts || false;
    this.Style = Style || false;
    this.Food = Food || false;
    this.Travel = Travel || false;
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
