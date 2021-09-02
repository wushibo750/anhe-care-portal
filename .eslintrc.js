module.exports = {
  env: {
    browser: true,
    es6: true,
    commonjs: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    // for async/await
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    __DEV__: true,
    __WECHAT__: true,
    __ALIPAY__: true,
    App: true,
    Page: true,
    Component: true,
    Behavior: true,
    wx: true,
    getApp: true,
    getCurrentPages: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'no-console': 'off',
    'max-len': 'off',
  },
};
