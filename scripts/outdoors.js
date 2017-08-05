'use strict';

var articles = [];

function Article (rawDataObj) {
  this.place = rawDataObj.place;
  this.activities = rawDataObj.activities;
  this.address = rawDataObj.address;
  this.website = rawDataObj.website;
}

Article.prototype.toHtml = function() {
  var $newArticle = $('.template').clone();
  $newArticle.removeClass("template");
  $newArticle.find('.place').text(this.place).css('font-weight', 'bolder');
  $newArticle.find('.activities').html(this.activities);
  //backtick is a string template
  $newArticle.find('.address').text(`Address: ${this.address}`);
  $newArticle.find('.website').text(this.website).attr('href', this.website);
  $newArticle.append('<hr>');
  return $newArticle;
};

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#articles').append(article.toHtml());
});
