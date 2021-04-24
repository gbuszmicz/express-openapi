exports.name = 'TodoList';
exports.component = {
  type: 'array',
  items: {
    $ref: '#/components/schemas/Todo'
  }
};
