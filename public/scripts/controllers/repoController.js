'use strict';

var app = app || {};

(function(module) {
  const repoController = {};

  repoController.index = () => {
    $('.content').children().hide();
    $('#content-portfolio').show();
    console.log('hi repoController.index');
    app.repos.requestRepos(app.repoView.index);
  };

  module.repoController = repoController;
})(app);
