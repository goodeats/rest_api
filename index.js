const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Joi = require('joi');
app.use(bodyParser.json()); // for parsing application/json
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

app.post('/api/courses', (req, res) => {
  // validation logic
  // use Joi instead
  // if (!req.body.name || req.body.name.length < 3) {
  //   res
  //     .status(400)
  //     .send('Name is required and should be minimum 3 characters');
  //   return;
  // }

  const schema = Joi.object().keys({
    name: Joi.string().min(3).required(),
  });

  const result = schema.validate({ name: req.body.name });

  if (result.error) {
    const errorMessage = result.error.details[0].message;
    res.status(400).send(errorMessage);
  }

  const course = {
    id: courses.length + 1, // no db to auto-assign
    name: req.body.name,
  };
  res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
