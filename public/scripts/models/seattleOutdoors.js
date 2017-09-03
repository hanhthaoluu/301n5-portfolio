'use strict';

var app = app || {};

(function(module) {
  function SeattleOutdoors(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  SeattleOutdoors.all = [];

  SeattleOutdoors.fetchAll = callback => {
    console.log('hello SeattleOutdoors.fetchAll')
    $.getJSON('./data/seattleOutdoors.json', function(data) {
      $.each(data, function(index, value) {
        var location = new SeattleOutdoors(value);
        SeattleOutdoors.all.push(location);
        // below is my view.  move to seattleOutdoorsView.js
        // var source = $('#article-template').html();
        // var template = Handlebars.compile(source);
        // var html = template(value);
        // $('#content-seattleOutdoors').append(html);
      })
    })
    .then(callback);
  };

  module.SeattleOutdoors = SeattleOutdoors;
})(app);
