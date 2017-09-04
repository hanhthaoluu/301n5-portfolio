'use strict';

const express = require('express');
const sa = require('superagent');
const app = express();
const PORT  = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log(`you are hosted on port ${PORT}`);
});


app.get('/repos', (req, res) => {
  sa.get('https://api.github.com/user/repos')
    .set('Authorization', `token ${process.env.GITHUB_TOKEN}`)
    .end((err, result) => {
      if(err) console.log(err);
      res.send(result.body);
    });
});

app.set('/*', (request, response) => {
  response.sendFile('index.html', {root: './public'});
});
