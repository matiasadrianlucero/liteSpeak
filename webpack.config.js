const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
// const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'src/img/avatars',
    //       to: 'img/avatars',
    //     },
    //   ],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        
        type: 'asset/resource',
        // generator: {
        //   filename: 'img/avatars/[name][ext]'
        // }
      },
    ],
  },

};