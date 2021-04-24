/**
 * @param {todoService} todoService
 * @returns {object} operations
 */
function todosPath(todoService) {
  const POST = async (req, res) => {
    try {
      const newTodo = await todoService.addTodo(req.body);
      return res.status(201).json(newTodo);
    } catch (err) {
      return res.status(500).send({
        status: 500,
        message: 'Unable to create todo'
      });
    }
  };

  POST.apiDoc = {
    summary: 'Return a new created todo',
    operationId: 'addTodo',
    tags: ['Todo'],
    requestBody: {
      description: 'Data from todo',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/TodoPost'
          }
        }
      }
    },
    responses: {
      201: {
        description: 'New todo',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Todo'
            }
          }
        }
      },
      500: {
        description: 'Internal error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorBuilder'
            }
          }
        }
      },
      default: {
        description: 'An error occurred'
      }
    }
  };

  const GET = async (req, res) => {
    try {
      const todos = await todoService.getTodos(req.query.filter);
      return res.status(200).json(todos);
    } catch (err) {
      return res.status(500).send({
        status: 500,
        message: 'Unable to get todo list'
      });
    }
  };

  GET.apiDoc = {
    summary: 'Get todo list',
    operationId: 'getTodos',
    tags: ['Todo'],
    parameters: [
      {
        name: 'filter',
        in: 'query',
        schema: {
          type: 'string'
        }
      }
    ],
    responses: {
      200: {
        description: 'Todo list',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/TodoList'
            }
          }
        }
      },
      500: {
        description: 'Internal error',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorBuilder'
            }
          }
        }
      },
      default: {
        description: 'An error occurred'
      }
    }
  };

  const operations = { POST, GET };
  return operations;
}

module.exports = todosPath;
