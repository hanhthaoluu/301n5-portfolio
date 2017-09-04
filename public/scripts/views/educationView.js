'use strict';

var app = app || {};

(function(module) {
  const educationView = {};

  educationView.view = function() {
    $('#content-education').html('');
    app.Education.all.map(function(arrayItem) {
      var source = $('#education-template').html();
      var template = Handlebars.compile(source);
      var html = template(arrayItem);
      $('#content-education').append(html);
    })
  }

  module.educationView = educationView;
})(app);
