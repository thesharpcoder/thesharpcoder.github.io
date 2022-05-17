'use strict'

const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: [
        './FrontEnd.Mafias/mafias.js'
    ],
    optimization: { //https://medium.com/hackernoon/the-100-correct-way-to-split-your-chunks-with-webpack-f8a9df5b7758
        splitChunks: {
            chunks: 'all'
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}