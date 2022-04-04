const express = require('express');
const app = express();
require('dotenv').config();

// reference:
// https://expressjs.com/en/5x/api.html

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/api/courses', (req, res) => {
  // no db yet, just demo res
  res.send([1, 2, 3]);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
