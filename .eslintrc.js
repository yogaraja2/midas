module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _components: './src/components',
          _constants: './src/constants',
          _res: './src/res',
          _assets: './src/res/assets',
          _styles: './src/res/styles',
          _screens: './src/screens',
          _service: './src/service',
          _utils: "./src/utils",
        },
      },
    },
  },
};
