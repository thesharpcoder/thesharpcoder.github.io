'use strict'

const common = require("./webpack.common");
const merge = require("webpack-merge");
const path = require('path');

module.exports = merge(common, {
    mode: "production",
    output: {
        //filename: 'mafias.[contentHash].js', //"[name].entry.js"
        filename: 'mafias.js',
        path: path.resolve('./scripts'), //path: path.join(__dirname, "dist"),
        publicPath: '/scripts',
        //chunkFilename: 'vue-bundle.[contentHash].js', //if not specified, chunk will be vendors~main.js
        chunkFilename: 'vue-bundle.js'
    }
});