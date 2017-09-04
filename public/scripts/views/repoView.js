'use strict';

var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $portfolio = $('#content-portfolio');

    $portfolio.find('ul').empty();
    $portfolio.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#content-portfolio ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
