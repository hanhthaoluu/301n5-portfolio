'use strict';

var app = app || {};

(function(module) {

  function Home(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Home.all = [];

  Home.fetchAll = callback => {
    $.getJSON('./data/homeData.json', function(data) {
      Home.all = data.map(ele => new Home(ele));
    })
    .then(callback);
  };

  module.Home = Home;
})(app);
