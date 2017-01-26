
'use strict';
(function(module) {
  var settingsController = {};

  settingsController.index = function() {
    $('#userSettings').show().siblings().hide();
  }

// TODO: CAN WE PASS A STRING TO A VARIABLE AND THEN ASSIGN THAT VARIABLE AS A PARAMETER IN A CONSTRUCTOR FUNCTION BELOW?
  // var x = 'U.S.';
  // var US = x;
  // console.log(US);

  function User(username, World, US, Politics, Business, Technology, Science, Health, Sports, Arts, Style, Food, Travel) {
    this.username = username || false;
    this.World = World || false;
    // TODO: WE NEED TO FIGURE THIS U.S. SECTION OUT
    this.US = US || false;
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
  }
// TODO: WE HAVE A ONE OFF ERROR HERE IN THE LATE SECTION, FOR EXAMPLE, IF ARTS IS CLICKED, FOOD WILL DISPLAY.

$('.settingsSubmit').on('click', function(e) {
  e.preventDefault();


  var currentUser = new User($('#username').val(),
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

  console.log(currentUser);
  settingsController.createUrl(currentUser);

  // let url = '/' + currentUser.join('_');
  // settingsController.setSections();

  localStorage.setItem('sessionInfo', JSON.stringify(currentUser));
  // window.location.href = '/';
});

settingsController.createUrl = function(User) {
  var settingsArray = Object.keys(User).filter(function(prop) {
    if (User[prop] === true) {
      return prop;
    }
  });
  console.log(settingsArray);
};

// settingsController.setSections = function(ctx) {
//   if (ctx.sections.length) {
//     ctx.params.sections = currentUser.join('_');
//
//   } else {
//
//   }
// };
module.settingsController = settingsController;
})(window);
