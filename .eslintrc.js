module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    'newline-before-return': 'error',
    'no-console': 'warn',
    'no-var': 'error',
  },
};
