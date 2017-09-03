'use strict';
var app = app || {};

(function(module) {
  const seattleOutdoorsView = {};


  seattleOutdoorsView.setTeasers = function() {
    $('#content-seattleOutdoors').html('');
    console.log('hi setTeasers');
    app.SeattleOutdoors.all.map(function(value) {
      var source = $('#article-template').html();
      ////grab from index.html everything inside the Handlebars template named "article-template"
      var template = Handlebars.compile(source);
      var html = template(value);
      $('#content-seattleOutdoors').append(html);
    })

    // $('.place').show().children().hide();
    // $('article').on('click', 'a.read-on', function(e) {
    //   e.preventDefault();
    //   if ($(this).text() === 'Read on →') {
    //     $(this).children().fadeIn();
    //     $(this).html('Show Less &larr;');
    //   } else {
    //     $(this).html('Read on &rarr;');
    //     $(this).children().hide();
    //   }
    // })
  }

  module.seattleOutdoorsView = seattleOutdoorsView;
})(app);
