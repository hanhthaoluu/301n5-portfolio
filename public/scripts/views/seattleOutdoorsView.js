'use strict';

var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};


  seattleOutdoorsView.view = function() {
    var htmlAll = app.SeattleOutdoors.all.map(function(value) {
      var source = $('#article-template').html();
      var template = Handlebars.compile(source);
      return template(value);
    });

    var result = htmlAll.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });

    $('#content-seattleOutdoors').html(result);
  }

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
