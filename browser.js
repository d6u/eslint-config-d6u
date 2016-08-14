'use strict';

module.exports = {
  extends: ['standard'],

  parserOptions: {
    ecmaFeatures: {
      jsx: false
    },
    sourceType: 'module'
  },

  rules: {
    // overwrite eslint-config-standard
    'generator-star-spacing': [2, 'before'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],

    // custom
    'no-restricted-syntax': [2, 'WithStatement']
  }
};
