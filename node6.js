'use strict';

module.exports = {
  plugins: [
    'node',
  ],

  extends: [
    'standard',
    'plugin:node/recommended'
  ],

  parserOptions: {
    ecmaFeatures: {
      jsx: false,
      experimentalObjectRestSpread: false,
    },
    sourceType: 'script',
  },

  rules: {
    'semi': [2, 'always'],
    'comma-dangle': [2, 'only-multiline'],
    'no-restricted-syntax': [2, 'WithStatement'],
    'generator-star-spacing': [2, 'before'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],
    'camelcase': 0,
    'padded-blocks': 0,

    'node/no-missing-import': 2,
    'node/no-unsupported-features': 0, // TODO: remove this when upgrade to Node 6
  },
};
