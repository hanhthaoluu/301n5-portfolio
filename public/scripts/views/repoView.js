'use strict';

var app = app || {};

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    console.log('hi ui');
    let $portfolio = $('#content-portfolio');

    $portfolio.find('ul').empty();
    //$portfolio.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    console.log('hi repoView.index');
    ui();

    $('#content-portfolio ul').append(
      app.repos.with('name').map(render)
    );
    console.log(app.repos.with('name'));
  };
  module.repoView = repoView;
})(app);
