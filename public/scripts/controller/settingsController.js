
'use strict';
(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('#userSettings').show().siblings().hide();
  };


// Briefing, Opinion
  function User(username, World, Briefing, Politics, Opinion, Technology, Science, Health, Sports, Arts, Style, Food, Travel) {
    this.username = username || false;
    this.World = World || false;
    this.Briefing = Briefing || false;
    this.Politics = Politics || false;
    this.Opinion = Opinion || false;
    this.Technology = Technology || false;
    this.Science = Science || false;
    this.Health = Health || false;
    this.Sports = Sports || false;
    this.Arts = Arts || false;
    this.Style = Style || false;
    this.Food = Food || false;
    this.Travel = Travel || false;
  }

  $('.settingsSubmit').on('click', function(e) {
    e.preventDefault();

    var currentUser = new User($('#username').val(),
            $('#world').is(':checked'),
            $('#briefing').is(':checked'),
            $('#politics').is(':checked'),
            $('#opinion').is(':checked'),
            $('#technology').is(':checked'),
            $('#science').is(':checked'),
            $('#health').is(':checked'),
            $('#sports').is(':checked'),
            $('#arts').is(':checked'),
            $('#style').is(':checked'),
            $('#food').is(':checked'),
            $('#travel').is(':checked'));

  console.log(currentUser);
  // settingsController.createUrl(currentUser);
  localStorage.setItem('sessionInfo', JSON.stringify(currentUser));
  page(settingsController.createUrl(currentUser));
});

settingsController.createUrl = function(User) {
  var settingsArray = Object.keys(User).filter(function(prop) {
    if (!User[prop] === false) {
      return prop;
    }
    console.log('settingsArray', settingsArray);
  });
  let url = '/sections/' + settingsArray.join('_');
  console.log('url', url);
  return url;
};

module.settingsController = settingsController;
})(window);
