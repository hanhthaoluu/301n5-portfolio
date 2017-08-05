'use strict';
var outdoorPlaces = [];

function Place (rawDataObj) {
  this.place = rawDataObj.place;
  this.activities = rawDataObj.activities;
}

Place.prototype.toHtml = function() {
  var $newPlace = $('article.template').clone();
  $newPlace.removeclass("template");
  $newPlace.
}
