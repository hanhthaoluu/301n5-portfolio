'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.index = () => {
    $('.content').children().hide();
    $('#content-portfolio').show();
    app.repos.requestRepos(app.repoView.index);
  };

  module.portfolioController = portfolioController;
})(app);
