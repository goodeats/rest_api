const express = require('express');
const app = express();

// reference:
// https://expressjs.com/en/5x/api.html

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/api/courses', (req, res) => {
  // no db yet, just demo res
  res.send([1, 2, 3]);
});

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
