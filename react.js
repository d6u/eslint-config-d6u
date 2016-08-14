'use strict';

module.exports = {
  plugins: ['react'],

  extends: ['standard', 'plugin:react/recommended'],

  rules: {
    // overwrite eslint-config-standard
    'generator-star-spacing': [2, 'before'],
    'space-before-function-paren': [2, {anonymous: 'always', named: 'never'}],

    // custom
    'no-restricted-syntax': [2, 'WithStatement'],

    // eslint-plugin-react
    'react/prop-types': 0
  }
};
