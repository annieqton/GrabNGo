
'use strict';

page('/', nytaController.index);
page('/settings', settingsController.index);
page('/about', aboutController.index);
page('/:sections', setSections); //add controller to display filtered articles

page();
