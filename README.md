# Node JS Server

Making a simple server to reference for Node projects.

I have much more experience in Ruby on Rails so wanted to get a Node server demo on the board since that is also very popular in web development.

[Followed along here](https://www.youtube.com/watch?v=pKd0Rpw7O48&t)

## Run

`npm start` or `yarn start` or `node index.js`

## About
### Express JS

Express JS simplifies the routing by reducing the need to write a lot of if statements. They have a great reference [here](https://expressjs.com/en/5x/api.html)

### Nodemon

Run the server with [Nodemon](https://nodemon.io/) so you don't have to resetart the server manually

### Environment Variables

Using environment variables will help hide keys or offer flexibility in setting values for different environments (development, staging, production).

Here is a great blog from the fine folks at Twilio about different ways to set this up: [Working With Environment Variables in Node.js](https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html).

### Handling POST Request Body

[body-parser](https://github.com/expressjs/body-parser) required now with [latest version of express](https://expressjs.com/en/5x/api.html). User-controlled input is untrusted and can fail in multiple ways so middleware is necessary to parse POST requests.

[Joi](https://joi.dev/api/?v=17.6.0) offers a nicely readable syntax for defining and validating body params

### Takeaway

As a Ruby on Rails developer I haven't used Node in a production environment yet, but I enjoy writing Javascript and can see myself picking things up quickly from here.