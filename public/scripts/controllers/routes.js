'use strict';

var app = app || {};

page('/', app.homeController.index);
page('/education', app.educationController.index);
page('/workExperience', app.resumeController.index);
page('/portfolio', app.repoController.index);
page('/seattleOutdoors', app.seattleOutdoorsController.index);
page();
