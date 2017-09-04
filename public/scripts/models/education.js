'use strict';

var app = app || {};

(function(module) {
  function Education(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Education.all = [];

  Education.fetchAll = callback => {
    $.getJSON('./data/educationData.json', function(data) {
      Education.all = data.map(ele => new Education(ele));
    })
    .then(callback);
  };

  module.Education = Education;
})(app);
