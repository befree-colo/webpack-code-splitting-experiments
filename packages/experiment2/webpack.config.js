const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('node:path');

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new HtmlWebpackPlugin({
            title: 'Webpack Code Splitting Experiments'
        })
    ],
    output: {
        clean: true,
    }
}
