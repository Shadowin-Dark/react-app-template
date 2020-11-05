const path = require('path');

module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  globals: {
    Promise: true
  },
  settings: {
    polyfills: ['Promise'],
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'webpack.dev.config.js')
      }
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:compat/recommended',
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  plugins: ['import', 'react-hooks'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'import/no-default-export': 2,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': [2, { props: false }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'react/jsx-fragments': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'no-plusplus': 0,
  }
};
