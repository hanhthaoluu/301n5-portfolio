'use strict';

var articles = [];

function Article (rawDataObj) {
  this.place = rawDataObj.place;
  this.activities = rawDataObj.activities;
  this.address = rawDataObj.address;
  this.website = rawDataObj.website;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();
  $newArticle.removeClass("template");
  $newArticle.find('.place').text(this.place);
  $newArticle.find('.activities').html(this.activities);
  $newArticle.find('.address').text(this.address);
  $newArticle.find('.website').attr(this.website);
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
