exports.name = 'TodoPatch';
exports.component = {
  allOf: [{ $ref: '#/components/schemas/Todo' }],
  type: 'object',
  properties: {
    id: { not: {} }
  }
};
