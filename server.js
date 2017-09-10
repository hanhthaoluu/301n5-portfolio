'use strict';

const express = require('express');
const sa = require('superagent');
const app = express();
const PORT  = process.env.PORT || 3000;
const requestProxy = require('express-request-proxy');

app.use(express.static('./public'));
console.log('my token: ' + process.env.GITHUB_TOKEN);
app.listen(PORT, function() {
  console.log(`you are hosted on port ${PORT}`);
});

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);
