// const Todo = require('../../models/todo')
const { logger } = require('../../utils/logger');

const todoService = {
  /**
   * @param {object} data - Todo data to create the todo
   * @returns {object} User
   */
  async addTodo(data) {
    try {
      const newTodo = {
        id: 1,
        description: data.description,
        completed: data.completed,
        createdAt: '2017-01-04 16:50:08',
        updatedAt: '2017-01-04 16:50:08'
      };
      return newTodo;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },

  /**
   * @returns {array}
   */
  async getTodos(queryFilter) {
    if (queryFilter) {
      logger.info('filter todos');
    }
    try {
      const todoList = [
        {
          id: 1,
          completed: false,
          description: 'Description for todo #1',
          createdAt: '2017-01-04 16:50:08',
          updatedAt: '2017-01-04 16:50:08'
        },
        {
          id: 2,
          completed: true,
          description: 'Description for todo #2',
          createdAt: '2017-20-04 16:50:08',
          updatedAt: '2017-20-04 16:50:08'
        }
      ];
      return todoList;
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },

  /**
   * @param {string} todoId - UUID of the todo
   * @param {object} data - Data to update the todo
   * @returns {promise} A promise resolving to the udpated todo
   */
  updateTodo(todoId, data) {
    try {
      return Promise.resolve(todoId + data);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },

  /**
   * @param {string} todoId - UUID of the todo
   * @returns {promise} A promise resolving to the deleted todo
   */
  deleteTodo(todoId) {
    try {
      return Promise.resolve(todoId);
    } catch (err) {
      logger.error(err);
      throw err;
    }
  },

  /**
   * @param {string} todoId - UUID of the todo
   * @param {object} todo - Todo
   */
  async getTodo(todoId) {
    try {
      const todoList = [
        {
          id: 1,
          completed: false,
          description: 'Description for todo #1',
          createdAt: '2017-01-04 16:50:08',
          updatedAt: '2017-01-04 16:50:08'
        },
        {
          id: 2,
          completed: true,
          description: 'Description for todo #2',
          createdAt: '2017-20-04 16:50:08',
          updatedAt: '2017-20-04 16:50:08'
        }
      ];
      const todo = todoList.filter(
        todoItem => todoItem.id === parseInt(todoId)
      );
      if (todo && todo.length === 1) {
        return Promise.resolve(todo[0]);
      }
      return Promise.reject(new Error('EmptyResponse'));
    } catch (err) {
      logger.error(err);
      throw err;
    }
  }
};

module.exports = todoService;
