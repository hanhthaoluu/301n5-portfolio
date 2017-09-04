'use strict';

var app = app || {};

(function(module) {
  const educationController = {};

  educationController.index = () => {
    app.Education.fetchAll(app.educationView.view);

    $('.content').children().hide();
    $('#content-education').show();
  };

  module.educationController = educationController;
})(app);
