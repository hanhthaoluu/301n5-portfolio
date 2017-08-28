'use strict';

const express = require('express');

const app = express();
const PORT  = process.env.PORT || 3000;

app.use(express.static('./public'));

app.listen(PORT, function() {
  console.log(`you are hosted on PORT 3000 ${PORT}`);
});

//go to terminal, type in npm start
//go to browser, type in  localhost:3000
