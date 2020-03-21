const path = require('path')
const rootPath = path.resolve(__dirname, '../src')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias['@'] = rootPath;
    config.module.rules.push({
      test: /\.styl|$\.stylus$/,
      loader: 'vue-style-loader!css-loader!stylus-loader',
      include: path.resolve(__dirname, "../src")
    })
    return config;
  }
};
