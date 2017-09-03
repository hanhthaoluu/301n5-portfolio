'use strict';
var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};


  seattleOutdoorsView.setTeasers = function() {
    console.log('hi setTeasers');
    app.SeattleOutdoors.all.map(function(value) {
      var source = $('#article-template').html();
      var template = Handlebars.compile(source);
      var html = template(value);
      $('#content-seattleOutdoors').append(html);
    });
    // $('.place').show().siblings().hide();
    // $('article').on('click', 'a.read-on', function(e) {
    //   e.preventDefault();
    //   if ($(this).text() === 'Read on →') {
    //     $(this).siblings().fadeIn();
    //     $(this).html('Show Less &larr;');
    //   } else {
    //     $(this).html('Read on &rarr;');
    //     $(this).siblings().hide();
    //   }
  };

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
