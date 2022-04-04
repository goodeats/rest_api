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

  const course = findCourse(req.params.id);
  if (!course) resNotFoundCourse(res);
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

  const { error } = validateCourse(req.body);
  if (error) return resBadRequestCourse(res, error);

  const course = {
    id: courses.length + 1, // no db to auto-assign
    name: req.body.name,
  };
  res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
  // find
  const course = findCourse(req.params.id);
  if (!course) resNotFoundCourse(res);

  // validate
  const { error } = validateCourse(req.body);
  if (error) return resBadRequestCourse(res, error);

  // update
  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const course = findCourse(req.params.id);
  if (!course) resNotFoundCourse(res);

  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

function findCourse(id) {
  return courses.find((c) => c.id === parseInt(id));
}

function resNotFoundCourse(res) {
  res.status(404).send('The course with the given ID was not found');
}

function resBadRequestCourse(res, error) {
  const errorMessage = error.details[0].message;
  res.status(400).send(errorMessage);
}

function validateCourse(course) {
  const schema = Joi.object().keys({
    name: Joi.string().min(3).required(),
  });
  return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
