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

app.get('/api/courses/:id', (req, res) => {
  // /api/courses/1 #=> {id: 1}
  // res.send(req.params);

  // /api/courses/1?sort=date #=> {sort: date}
  res.send(req.query);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
