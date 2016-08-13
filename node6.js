'use strict';

module.exports = {
  plugins: ['node'],

  extends: ['standard'],

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: false,
      jsx: false
    },
    sourceType: 'script'
  },

  rules: {
    // overwrite eslint-config-standard
    'generator-star-spacing': [2, 'before'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],

    // custom
    'no-restricted-syntax': [2, 'WithStatement'],

    // eslint-plugin-node
    'node/no-deprecated-api': 2,
    'node/no-missing-import': 0,
    'node/no-missing-require': 2,
    'node/no-unpublished-import': 0,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features': 2,
    'node/process-exit-as-throw': 2,
    'node/shebang': 2
  }
};
