'use strict';

const express = require('express');
const sa = require('superagent');
const app = express();
const PORT  = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log(`you are hosted on port ${PORT}`);
});

//go to terminal, type in npm start
//go to browser, type in  localhost:3000
