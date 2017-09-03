'use strict';
var app = app || {};

(function() {
  const resumeView = {};

  resumeView.view = function() {
    $('#content-resume').html('');

    app.Resume.all.map(function(value) {
      var source = $('#resume-template').html();
      var template = Handlebars.compile(source);
      var html = template(value);
      $('#content-resume').append(html);
    })
  }

  module.resumeView = resumeView;
})(app);
