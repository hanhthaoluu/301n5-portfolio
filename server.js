'use strict';

const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const app = express();
const PORT  = process.env.PORT || 3000;

app.use(express.static('./public'));
app.post('', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!!');
})

app.listen(PORT, function() {
  console.log(`you are hosted on PORT 3000 ${PORT}`);
})
