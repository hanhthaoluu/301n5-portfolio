'use strict';

var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};


  seattleOutdoorsView.view = function() {
    //$('#content-seattleOutdoors').html('');
    var htmlAll = app.SeattleOutdoors.all.map(function(value) {
      var source = $('#article-template').html();
      console.log('hi source: ' + source);
      ////grab from index.html everything inside the Handlebars template named "article-template"
      var template = Handlebars.compile(source);
      console.log('hi template ' + template);
      //var html = template(value);
      return template(value); //return the actual html
      // $('#content-seattleOutdoors').append(html);
    });

    var result = htmlAll.reduce(function(accumulator, currentValue) {
      return accumulator + currentValue;
    });

    $('#content-seattleOutdoors').html(result);
  }

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
