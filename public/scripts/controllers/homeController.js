'use strict';

var app = app || {};

(function(module) {
  const homeController = {};

  homeController.index = () => {
    console.log('hi homeController');
    app.Home.fetchAll(app.homeView.view);

    $('.content').children().hide();
    $('#content-home').show();
  };

  module.homeController = homeController;
})(app);
