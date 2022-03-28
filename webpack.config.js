const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  context:path.resolve(__dirname, 'src'),
  entry:{
    main:'./index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./index.html'
    }),
    new CleanWebpackPlugin()
  ],
  mode:'development',
  output:{
    filename:'[name].[contenthash].js',
    path:path.resolve(__dirname,'dist')
  },
  resolve:{
    extensions:['.js', '.json'],
  },
  devServer:{
    port:4200
  },
  module:{
    rules:[
      {
        test:/\.css$/,
        use:['style-loader', 'css-loader']
      }
    ]
  }
}