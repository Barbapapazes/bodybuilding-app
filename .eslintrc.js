module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['warn', 'never'],
    semi: ['warn', 'never'],
    quotes: ['warn', 'single'],
    'linebreak-style': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'space-before-function-paren': ['warn', 'never'],
    'no-unused-vars': ['warn']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
