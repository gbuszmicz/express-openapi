const fs = require('fs');

/**
 * Simple dynamic loader.
 */
module.exports = {
  schemas: fs
    .readdirSync(__dirname)
    .filter(fileName => fileName !== 'index.js' && fileName.endsWith('.js'))
    .reduce((acc, fileName) => {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const { name, component } = require(`./${fileName}`);
      if (!name) {
        // eslint-disable-next-line no-console
        console.error(`apiModel ${fileName} is missing required name property`);
      } else if (!component) {
        // eslint-disable-next-line no-console
        console.error(
          `apiModel ${fileName} is missing required component property`
        );
      } else {
        acc[name] = component;
      }
      return acc;
    }, {})
};
