var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        app : [path.join(__dirname, 'src/app.tsx')]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    devtool: "source-map",
    resolve: {
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.tsx$/,
                loader: 'ts-loader'
            }
        ],
        preLoaders: [
            {
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    }
};
