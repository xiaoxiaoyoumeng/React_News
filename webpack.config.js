var webpack = require('webpack');
var path = require('path');


module.exports = {
    mode: 'production',
    entry: './src/js/root.js',
    output: {
        path:path.resolve(__dirname),
        filename: 'bundle.js'
    },
    module:{
        rules:[
                {
                    test: /\.js?$/,
                    exclude: /(node_modules)/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['react', 'es2015']
                    }
                },
                {
                    test: /\.css$/,
                    // loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                    loader: "style-loader!css-loader"
                }
              ]
    }
};