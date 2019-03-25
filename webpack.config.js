const HtmlWebpackPlugin = require('html-webpack-plugin'),
 MiniCssExtractPlugin = require('mini-css-extract-plugin'),
 CleanWebpackPlugin = require('clean-webpack-plugin'),
 autoprefixer= require('autoprefixer')
module.exports = {
 devtool: 'source-map',
 entry:{
  js: './src/index.js',
  react: './src/react.js'
 },
 output:{
  filename: '[name].[chunkhash].js'
 },
 module:{
  rules: [
   {
    test: /\.(js|jsx)$/,
    use:['babel-loader']
   },
   {
    test: /\.html$/,
    use: 'html-loader?minimize'
   },
   {
    test: /\.(css|scss)$/,
    use: [
     'style-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
       loader: 'postcss-loader',
       options:{
        autoprefixer:{
         browser: ['last 2 versions']
        },
        sourceMap: true,
        plugins: ()=>[autoprefixer]
       }
      },
      'resolve-url-loader',
      'sass-loader'
    ]
   },
   {
    test: /\.(png|jpe?g|svg|gif)$/,
    use: [
     'file-loader?name=assets/[name].[ext]',
     'image-webpack-loader?byPassOnDebug'
    ]
   }
  ]
 },
 plugins:[
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin({
   filename: '[name].[chunkhash].css'
  }),
  new HtmlWebpackPlugin({
   template: './src/index.html',
   filename: 'index.html',
   chunks: ['js']
  }),
  new HtmlWebpackPlugin({
   template: './src/index.html',
   filename: 'react.html',
   chunks: ['react']
  })
 ]
}