'use strict';

(function(module) {
  const aboutController = {};

  aboutController.index = () => {
    console.log('aboutcontroller');
    $('#about').show().siblings().hide();

  };

  module.aboutController = aboutController;
})(window);
