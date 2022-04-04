const express = require('express');
const app = express();
require('dotenv').config();

// reference:
// https://expressjs.com/en/5x/api.html

// makeshift courses table
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
  // /api/courses/1 #=> {id: 1}
  // res.send(req.params);

  // /api/courses/1?sort=date #=> {sort: date}
  // res.send(req.query);

  const course = courses.find(
    (c) => c.id === parseInt(req.params.id)
  );
  if (!course)
    res
      .status(404)
      .send('The course with the given ID was not found');
  res.send(course);
});

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
