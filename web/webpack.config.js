/**
 * Created by pomy on 15/11/4.
 */

var path = require('path');
var webpack = require('webpack');
var config = require('./config');
var debug = process.env.NODE_ENV !== 'production';
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
console.info(debug);
module.exports = {
    entry: {
        //server: 'webpack-dev-server/client?http://localhost:3000',
        //dev:'webpack/hot/only-dev-server',
        index: path.resolve(__dirname, './src/js/index.js'),
        partner: path.resolve(__dirname, './src/js/partner.js'),
        privacy: path.resolve(__dirname, './src/js/privacy.js')
        },
    output: {
        path: path.resolve(__dirname, './assets/js'),
        publicPath: path.resolve(__dirname, config.webroot + '/assets/js'),
        filename: '[name].js'
    },

    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['babel'], exclude: /node_modules/ },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
            //{test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader")},
            {test: /\.scss$/, loader: "style!css!sass"},
            {test: /\.less/,loader: 'style-loader!css-loader!less-loader'},
            {test: /\.(jpg|png)$/, loader: "url-loader?limit=8192&name=/i/[hash:8].[name].[ext]"},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff2"},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}

        ]
    },

    resolve:{
        extensions:['','.js','.json','.png']
    },

    //插件项
   plugins: [
       commonsPlugin
       //new webpack.optimize.MinChunkSizePlugin(minSize)

   ]
};