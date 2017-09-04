'use strict';

var app = app || {};

(function(module) {
  const seattleOutdoorsController = {};

  seattleOutdoorsController.index = () => {
    app.SeattleOutdoors.fetchAll(app.seattleOutdoorsView.view);
    $('.content').children().hide();
    $('#content-seattleOutdoors').show();
  };

  module.seattleOutdoorsController = seattleOutdoorsController;

})(app);
