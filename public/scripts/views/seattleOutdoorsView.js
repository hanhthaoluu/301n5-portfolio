'use strict';

var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};

  const ui = function() {
    let $seattleOutdoors = $('#content-seattleOutdoors');
    $seattleOutdoors.find('ul').empty();
  };

  const render = Handlebars.compile($('#article-template').text());

  seattleOutdoorsView.index = function() {
    ui();

    $('#content-seattleOutdoors ul').append(
      app.SeattleOutdoors.all.map(render)
    );
  };

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
