'use strict';

var app = app || {};

(function(module) {
  const portfolioController = {};

  portfolioController.index = () => {
    $('#content-portfolio').show().siblings().hide();
    app.repos.requestRepos(app.repoView.index);
  };

  module.portfolioController = portfolioController;
})(app);
