exports.name = 'Todo';
exports.component = {
  type: 'object',
  properties: {
    id: {
      description: 'Todo id',
      type: 'number',
      readOnly: true
    },
    description: {
      description: 'Todo description',
      type: 'string'
    },
    completed: {
      description: 'Todo is completed',
      type: 'boolean'
    },
    createdAt: {
      description: 'Date the todo was created',
      type: 'string',
      format: 'date-time'
    },
    updatedAt: {
      description: 'Date the todo was updated',
      type: 'string',
      format: 'date-time'
    }
  }
};
