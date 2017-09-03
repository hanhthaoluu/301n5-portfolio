'use strict';

var app = app || {};

page('/', function () {
  console.log('hi home');
});
// page('/resume', app.resumeController);
// page('/portfolio', app.portfolioController);
page('/seattleOutdoors', app.seattleOutdoorsController.index);
// page('/seattleOutdoors', function () {
//   console.log('hi routes!');
// });
page();
