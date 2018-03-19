const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 设置打包模式
  // 若要开启devserver则要设置为development
  // 设置为production的时候在dev下rebuild超级慢!
  mode: 'development', 
  // 入口js文件
  entry: path.resolve(__dirname, 'src/index.js'),
  // 打包输出
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/main.bundle.js'
  },
  // loaders
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // devserver
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    // 在terminal关闭警告
    stats: {
      warnings: false
    },
    // 在browser关闭警告
    clientLogLevel: 'none',
    hot: true,
    port: 3003,
    // gzip
    // compress: false
  },
  plugins: [
    // 热替换插件
    new webpack.HotModuleReplacementPlugin(),
    // 自动插入打包生成的js文件
    new HtmlWebpackPlugin({
      template: 'asserts/index.html',
      // 以output为输出目录
      filename: 'index.html'
    })
  ]
};