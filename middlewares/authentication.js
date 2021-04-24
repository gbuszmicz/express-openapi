const { logger } = require('../utils/logger');

/**
 * @param {object} req
 * @param {object} res
 * @param {function} next
 */
module.exports = (req, res, next) => {
  logger.info('Authentication middleware here...');
  next();
};
