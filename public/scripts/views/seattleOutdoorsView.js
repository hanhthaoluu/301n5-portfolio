'use strict';

var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};


  seattleOutdoorsView.view = function() {
    $('#content-seattleOutdoors').html('');
    console.log('hi setTeasers');
    app.SeattleOutdoors.all.map(function(value) {
      var source = $('#article-template').html();
      ////grab from index.html everything inside the Handlebars template named "article-template"
      var template = Handlebars.compile(source);
      var html = template(value);
      $('#content-seattleOutdoors').append(html);
    })
  }

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
