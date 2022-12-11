'use strict';

const example = [
  true,
  'hello',
  5,
  12,
  () => {},
  NaN,
  -Infinity,
  +0,
  null,
  0,
  -200,
  false,
  Symbol('we'),
  false,
  'word',
  -200,
  undefined,
  2n,
  false,
  'word',
];

const countTypesInArray = (arr = []) => {
  const initial = {};
  for (const item of arr) {
    initial[typeof item] ? ++initial[typeof item] : (initial[typeof item] = 1);
  }

  return initial;
};

countTypesInArray(example);

module.exports = { countTypesInArray };
