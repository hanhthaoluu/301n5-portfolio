'use strict';

var app = app || {};

// page('/', app.homeController);
// page('/resume', app.resumeController);
// page('/portfolio', app.portfolioController);
// page('/seattleOutdoors', app.seattleOutdoorsController.index);
page('/seattleOutdoors', () => {
  console.log('hi routes!');
});
page();
