module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'react-app'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    semi: 'error',
    'no-unused-vars': 'warn',
    'no-useless-escape': 'warn',
    'no-cond-assign': 'off',
    'no-extra-semi': 'error',
    'keyword-spacing': 'error',
    eqeqeq: 'off',
  },
};
