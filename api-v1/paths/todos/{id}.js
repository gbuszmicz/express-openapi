/**
 * @param {todoService} todoService
 * @returns {object} operations
 */
function todoPath(todoService) {
  const PATCH = async (req, res) => {
    try {
      await todoService.updateTodo(req.params.id, req.body);
      return res.status(204).json();
    } catch (err) {
      return res.status(500).send({
        status: 500,
        message: `Unable to update todo [${req.params.id}]`
      });
    }
  };

  PATCH.apiDoc = {
    summary: 'Update todo',
    operationId: 'updateTodo',
    tags: ['Todo'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'string'
        },
        required: true
      }
    ],
    requestBody: {
      description: 'Data from todo',
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/TodoPatch'
          }
        }
      }
    },
    responses: {
      204: {
        description: 'Empty response'
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

  const DELETE = async (req, res) => {
    try {
      await todoService.deleteTodo(req.params.id);
      return res.status(204).json();
    } catch (err) {
      return res.status(500).send({
        status: 500,
        message: 'Unable to delete todo'
      });
    }
  };

  DELETE.apiDoc = {
    summary: 'Delete todo',
    operationId: 'deleteTodo',
    tags: ['Todo'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'string'
        },
        required: true
      }
    ],
    responses: {
      204: {
        description: 'Empty response'
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
      const todo = await todoService.getTodo(req.params.id);
      return res.status(200).json(todo);
    } catch (err) {
      if (err.message === 'EmptyResponse') {
        return res.status(404).send({
          status: 404,
          message: `Todo [${req.params.id}] not found`
        });
      }
      return res.status(500).send({
        status: 500,
        message: `Unable to get todo [${req.params.id}]`
      });
    }
  };

  GET.apiDoc = {
    summary: 'Get todo',
    operationId: 'getTodo',
    tags: ['Todo'],
    parameters: [
      {
        name: 'id',
        in: 'path',
        schema: {
          type: 'string'
        },
        required: true
      }
    ],
    responses: {
      200: {
        description: 'Todo',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/Todo'
            }
          }
        }
      },
      404: {
        description: 'Todo not found',
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/ErrorBuilder'
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

  const operations = { PATCH, DELETE, GET };
  return operations;
}

module.exports = todoPath;
