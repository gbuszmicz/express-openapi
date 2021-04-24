const pino = require('pino');

const logger = pino({
  autoLogging: false,
  prettyPrint: process.env.NODE_ENV === 'development',
  enabled: process.env.NODE_ENV !== 'test',
  timestamp: pino.stdTimeFunctions.isoTime
});

module.exports = { logger };
