'use strict';
var app = app || {};

(function(module) {
  const resumeController = {};

  resumeController.index = () => {
    console.log('hi resumeController');
    app.Resume.fetchAll(app.resumeView.view);

    $('.content').children().hide();
    $('#content-resume').show();
  };

  module.resumeController = resumeController;

})(app);
