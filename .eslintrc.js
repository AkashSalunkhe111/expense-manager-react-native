module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:react-native/all'],
  plugins: ['react-native'],
  parser: 'babel-eslint',
  env: {
    'react-native/react-native': true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 0,
    'react-native/no-color-literals': 2,
    'react-native/no-raw-text': 2,
  },
};
