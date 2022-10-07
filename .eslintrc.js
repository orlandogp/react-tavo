const RULES = {
  off: 'off',
  waning: 'waning',
  error: 'error'
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'eslint:recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-unused-vars': RULES.error,
    'prettier/prettier': RULES.error,
    'react/prop-types': RULES.off,
    'react/no-unknown-property': ['error', { ignore: ['css'] }]
  }
}
