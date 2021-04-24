exports.name = 'TodoPost';
exports.component = {
  allOf: [{ $ref: '#/components/schemas/Todo' }],
  type: 'object',
  properties: {
    id: { not: {} }
  },
  required: ['description', 'completed']
};
