'use strict';
var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};

  seattleOutdoorsView.setTeasers = function() {
    $('.place').show().siblings().hide();
    $('article').on('click', 'a.read-on', function(e) {
      e.preventDefault();
      if ($(this).text() === 'Read on →') {
        $(this).siblings().fadeIn();
        $(this).html('Show Less &larr;');
      } else {
        $(this).html('Read on &rarr;');
        $(this).siblings().hide();
      }
    });

    seattleOutdoorsView.setTeasers();
  };

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
