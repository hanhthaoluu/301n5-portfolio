'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  repos.requestRepos = function(callback) {
    //call my server
    $.ajax({
      url: '/repos',
      method: 'GET',
    })
      .then(results => {
        //debugger;
        repos.all = results
        callback();
      }, error => {
        console.log(error);
      })
  }

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
