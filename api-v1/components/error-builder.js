exports.name = 'ErrorBuilder';
exports.component = {
  type: 'object',
  properties: {
    status: {
      description: 'Error status code',
      type: 'integer'
    },
    message: {
      description: 'Error message',
      type: 'string'
    }
  }
};
