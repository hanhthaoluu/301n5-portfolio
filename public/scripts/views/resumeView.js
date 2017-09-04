'use strict';

var app = app || {};

(function(module) {
  const resumeView = {};

  resumeView.view = function() {
    $('#content-resume').html('');

    console.log('hi resumeView.view');

    app.Resume.all.map(function(value) {
      var source = $('#resume-template').html();
      var template = Handlebars.compile(source);
      var html = template(value);
      $('#content-resume').append(html);
    })
  }

  module.resumeView = resumeView;
})(app);
