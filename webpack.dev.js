'use strict'

const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require('path');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: 'mafias.js', //"[name].entry.js"
        path: path.resolve('./scripts'), //path: path.join(__dirname, "dist"),
        publicPath: '/scripts',
        chunkFilename: 'vue-bundle.js', //if not specified, chunk will be vendors~main.puma18.js
    },

    devServer: {
        hot: true,
        watchOptions: {
            poll: true
        }
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
        //new HtmlWebpackPlugin({
        //    template: "./src/template.html"
        //})
    ]
});