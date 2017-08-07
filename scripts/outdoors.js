'use strict';

var articles = [];

function Article (rawDataObj) {
  this.place = rawDataObj.place;
  this.picture = rawDataObj.picture;
  this.activities = rawDataObj.activities;
  this.address = rawDataObj.address;
  this.website = rawDataObj.website;
}

Article.prototype.toHtml = function() {
  var source = $("#article-template").html();
  var template = Handlebars.compile(source);
  var context = {Place: this.place, Picture: this.picture, Activities: this.activities, Address: this.address, Website: this.website};
  var html = template(context);
  return html;
};

rawData.forEach(function(articleObject) {
  articles.push(new Article(articleObject));
});

articles.forEach(function(article) {
  $('#content-seattleOutdoors').append(article.toHtml());
});
