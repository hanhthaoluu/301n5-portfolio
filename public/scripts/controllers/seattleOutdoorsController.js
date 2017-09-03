'use strict';
var app = app || {};

(function(module) {
  console.log('hi iffe seattleOutdoorsController');
  const seattleOutdoorsController = {};

  seattleOutdoorsController.index = () => {
    console.log('hi seattleOutdoorsController');
    app.SeattleOutdoors.fetchAll(app.seattleOutdoorsView.setTeasers);

    $('.content').children().hide();
    $('#content-seattleOutdoors').show();
  };

  module.seattleOutdoorsController = seattleOutdoorsController;
  console.log('hi module.seattleOutdoorsController: ' + module.seattleOutdoorsController.index);

})(app);
