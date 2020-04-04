const path = require('path');
const webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var port = 18080;
var ipAddress = "localhost";
var output_path = path.resolve(__dirname, "./app/dist/");
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    entry: {
        client: "./app/src/index.tsx",
    },
    output: {
        filename: "[name].js",
        publicPath: "http://" + ipAddress + ":" + port + "/dist/",
        path: output_path,
    },
    devtool: isDev ? "cheap-module-eval-source-map" : undefined,
    mode: isDev ? "development" : "production",
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
        new ExtractTextPlugin("styles.css"),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./app/dist/vendor-manifest.json')
        }),
    ].concat(isDev ? [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? '"development"' : '"production"'
            }
        })] : []),

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