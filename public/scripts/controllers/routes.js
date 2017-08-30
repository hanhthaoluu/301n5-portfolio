'use strict';

var app = app || {};

page('/', app.homeController.index);
page('/resume', app.resumeController.index);
page('/portfolio', app.portfolioController.index);
page('/seattleOutdoors', app.seattleOutdoorsController.index);
page();
