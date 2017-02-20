
'use strict';

page('/', nytaController.index);
page('/settings', settingsController.index);
page('/about', aboutController.index);
page('/sections/:userSelections?', nytaController.index); //add controller to display filtered articles

page();
