const components = require('./components');

module.exports = {
  info: {
    title: 'Todo server',
    version: '1.0.0'
  },
  paths: {},
  openapi: '3.0.1',
  servers: [
    {
      url: '/api/v1'
    }
  ],
  components
};
