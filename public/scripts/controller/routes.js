
'use strict';

page('/', nytaController.index);
page('/settings', settingsController.index);
page('/about', aboutController.index);
// page('/', settingsController.setSections); //add controller to display filtered articles

page();

// TODO: ADD CODES FOR MIDDLEWARE
