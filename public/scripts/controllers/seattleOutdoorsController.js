'use strict';
var app = app || {};

(function(module) {
  const seattleOutdoorsController = {};
  seattleOutdoorsController.index = () => {
    app.SeattleOutdoors.fetchAll(app.seattleOutdoorsView.setTeasers);
  };

  module.seattleOutdoorsController = seattleOutdoorsController;
})(app);
