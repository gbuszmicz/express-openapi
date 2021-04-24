require('dotenv-flow').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { initialize } = require('express-openapi');
const swaggerUi = require('swagger-ui-express');

// const logger = require("./utils/logger")
const apiDoc = require('./api-v1/api-doc');
const todoService = require('./api-v1/services/todo-service');
const authMiddleware = require('./middlewares/authentication');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(authMiddleware);

// OpenAPI thing
initialize({
  app,
  apiDoc,
  paths: './api-v1/paths',
  dependencies: {
    todoService
    // all services go here
  },
  promiseMode: true,
  // eslint-disable-next-line no-unused-vars
  errorMiddleware: (err, req, res, next) => {
    const status = err.status || 500;
    return res.status(status).json({
      status,
      message: status === 400 ? 'Validation error' : 'Internal error',
      errors: err.errors
    });
  }
});

// Swagger, http://localhost:3000/api-doc
app.use(
  '/api-doc',
  swaggerUi.serve,
  swaggerUi.setup(null, {
    swaggerOptions: {
      url: 'http://localhost:3000/api/v1/api-docs'
    }
  })
);

module.exports = app;
