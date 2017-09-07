'use strict';

var app = app || {};

(function(module) {
  const seattleOutdoorsController = {};

  seattleOutdoorsController.index = () => {
    app.SeattleOutdoors.fetchAll(app.seattleOutdoorsView.index);
    $('.content').children().hide();
    $('#content-seattleOutdoors').show();
  };

  module.seattleOutdoorsController = seattleOutdoorsController;

})(app);
