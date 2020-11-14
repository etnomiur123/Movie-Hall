const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/js/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ['style-loader',//3. Injeta style na DOM
            'css-loader', //2. Transforma css em javascript
            'sass-loader' //1. Transforma sass em css
        ]
          },
        ],
      }
};