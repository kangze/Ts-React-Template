const path = require('path');
const webpack = require('webpack');

var output_path = path.resolve(__dirname, "./app/dist/");
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        vendor: [
            "react",
            "react-dom",
            "react-router-dom",
        ]
    },
    mode: isDev ? "development" : "production",
    output: {
        path: output_path,
        filename: "[name].js",
        library: "[name]_[hash]"
    },
    stats: {
        modules: false
    },
    module: {
        rules: [
            { test: /\.(png|woff|woff2|eot|ttf|svg)(\?|$)/, use: 'url-loader?limit=100000' },

        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(output_path, '[name]-manifest.json'),
            name: '[name]_[hash]'
        }),
    ]
}