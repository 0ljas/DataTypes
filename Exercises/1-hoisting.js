'use strict';

const fn = () => {
  const local = 'string';
  console.dir({ local });
};

module.exports = { fn };
