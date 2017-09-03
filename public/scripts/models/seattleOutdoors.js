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
      SeattleOutdoors.all = data.map(ele => new SeattleOutdoors(ele));
    })
    .then(callback);
  };

  module.SeattleOutdoors = SeattleOutdoors;
})(app);
