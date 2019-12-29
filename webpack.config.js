const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var port = 18080;
var ipAddress = "localhost";
var dev = true;
var output_path = path.resolve(__dirname, "./app/dist/");


module.exports = {
    mode: dev ? "development" : "production",
    entry: {
        client: "./app/src/index.tsx",
    },
    output: {
        filename: "[name].js",
        publicPath: "http://" + ipAddress + ":" + port + "/dist/",
        path: output_path,
    },
    devtool: "cheap-module-eval-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("styles.css"),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./app/dist/vendor-manifest.json')
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "./app/dist"),
        headers: {
            'Access-Control-Allow-Origin': '*' //配合服务端开发,需要跨域
        },
        port: port,
        host: ipAddress,
        hot: true
    },
}