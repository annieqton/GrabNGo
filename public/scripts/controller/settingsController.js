'use strict';
(function(module) {
  var settingsController = {};

  var setttings = false; //default state
  var currentUser = null;
  var allUsers = []; // username, preference array
  // var sessionInfo = [];

  // check user existence
  //call this on click event on Settings at page load (nytaView.js)
  function checkStorage() {
    if(localStorage.allUsers){
      var retrieveStorage = localStorage.getItem('allUsers');
      allUsers = JSON.parse(retrieveStorage);
    }
  }

//setting user and preferences
  var preferences = $('preferences').val();
  var username = $('usename').val();

  document.getElementById('username').addEventListener('submit', function(e) {
    e.preventDefault();
    new User(username, preferences.checked);
  });

  function User(username, world, us, politics, business, technology, science, health, sports, arts, style, food, travel) {
    this.username = username;
    this.pref1 = world;
    this.pref2 = us;
    this.pref3 = politics;
    this.pref4 = business;
    this.pref5 = technology;
    this.pref6 = science;
    this.pref7 = health;
    this.pref8 = sports;
    this.pref9 = arts;
    this.pref10 = style;
    this.pref11 = food;
    this.pref12 = travel;
    allUsers.push(this);
  }

  module.settingsController = settingsController;
})(window);
