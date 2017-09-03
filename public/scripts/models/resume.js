'use strict';

var app = app || {};

(function(module) {
  function Resume(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

Resume.all = [];

  Resume.fetchAll = callback => {
    $.getJSON('./data/resumeData.json', function(data) {
      Resume.all = data.map(ele => new Resume(ele));
    })
    .then(callback);
  };

  module.Resume = Resume;
})(app);
