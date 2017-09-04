'use strict';

var app = app || {};

(function(module) {
  const homeView = {};

  homeView.view = function () {
    $('#content-home').html('');

    console.log('hi homeview.view');

    app.Home.all.map(function(value) {
      var source = $('#home-template').html();
      var template = Handlebars.compile(source);
      var html = template(value);
      $('#content-home').append(html);
    })
  }

  module.homeView = homeView;
})(app);
