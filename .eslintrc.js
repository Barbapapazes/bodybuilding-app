module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['es-beautifier'],
  extends: ['plugin:vue/essential', 'plugin:es-beautifier/standard'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['warn', 'never'],
    semi: ['warn', 'never'],
    quotes: ['warn', 'single'],
    'linebreak-style': 'off',
    'arrow-parens': ['warn', 'as-needed']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
