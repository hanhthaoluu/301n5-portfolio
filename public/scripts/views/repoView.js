'use strict';

var app = app || {};

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $portfolio = $('#content-portfolio');
    $portfolio.find('ul').empty();
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
