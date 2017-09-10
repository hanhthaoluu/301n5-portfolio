'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];
  
  repos.requestRepos = function(callback) {
    $.get('/github/user/repos')
      .then(results => {
        //debugger;
        repos.all = results
        callback();
      }, error => {
        console.log(error);
      })
  };

  repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
