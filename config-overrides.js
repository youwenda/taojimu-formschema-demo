const {
  override,
  mergeOptimization,
  removePlugin,
  addPlugin,
  addLessLoader,
  fixBabelImports,
} = require('customize-cra-extra');
const webpack = require('webpack');
const InjectPlugin = require('webpack-inject-plugin');

module.exports = {
  /**
   * [webpack description]
   *
   * @param   {[type]}  config  [CRA's webpack config]
   * @param   {[type]}  env     [process.env.NODE_ENV 'development' || 'production']
   *
   * @return  {Object}          [return new webpack config]
   */
  /* eslint-disable no-unused-vars */
  webpack(config, env) {
    // ... add your webpack config
    const webpackConfig = override(
      mergeOptimization({
        minimize: process.env.PREVIEW != 1,
        splitChunks: {
          chunks: 'all',
        },
      }),
      removePlugin(InjectPlugin.default),
      addPlugin(
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1,
        })
      ),
      addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
          'body-background': 'inherit',
          'primary-color': '#5D56DD',
          'link-color': '#5D56DD',
          'border-radius-base': '4px',
          'border-color-base': '#E6E6E6',
          'font-size-base': '12px',
          'font-family':
            'helvetica, Arial, "PingFang SC", "Microsoft YaHei", \\5FAE\\8F6F\\96C5\\9ED1, sans-serif',
          'tooltip-bg': '#fff',
          'tooltip-color': '#333',
          'tooltip-arrow-width': '0px',
          'slider-track-background-color': '#5D56DD',
          'slider-rail-background-color': '#dddddd',
          'tab-horizontal-padding': '20px',
          'tab-bar-margin': '0',
        },
      }),
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      })
    )(config, env);
    return webpackConfig;
  },
};
