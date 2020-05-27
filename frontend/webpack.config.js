const path = require('path')

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");
console.log( __dirname);
// console.log( __dirname.split('/').slice(0, -1).join('/') + '/public/js');
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++");

module.exports = {
  entry: {
    frontend: './js/frontend',
    admin: './js/admin',
  },
  output: {
    // path: __dirname.split('\\').slice(0, -1).join('\\') + '\\public\\js',
    path: __dirname.split('/').slice(0, -1).join('/') + '/public/js',
    // path: __dirname + 'public\\js',
    filename: '[name].js'
  },
  watch: true,
  mode: 'development',
  devtool: 'cheap-module-inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'js'),
        loader: 'babel-loader?presets[]=@babel/env'
      }
    ]
  }
}
