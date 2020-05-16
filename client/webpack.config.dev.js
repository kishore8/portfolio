const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'development';


module.exports = {
    mode:'development',
    target:'web', //if node js app we set it to node
    devtool: 'cheap-module-source-map', //it shows our original code for debugging
    //in browser after bundling by webpack/babel
    entry:'./src/index',
    output: {
        path: path.resolve(__dirname,"build"),
        publicPath: '/',
        filename:'bundle.js'
    },
    devServer:{
        stats:'minimal', //les info to the command line
        overlay:true,
        historyApiFallback:true, //all request will be sent to index.html, so all 
        //links will be handled by react-router.
        disableHostCheck: true,
        headers:{"Access-Control-Allow-Origin":"*"},
        https:false,
        // proxy: {
        //     "/": {
        //       target: "http://localhost:3000"
        //     }
        //   }  
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"public/index.html",
            favicon: "public/favicon.ico"
        })

    ],
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:["babel-loader","eslint-loader"]//run babel on the above js/jsx files and webpack
                //modules them up ,babel transpiles modern js code to run on any
                //older browser,babel compiles jsx to js
            },

            //webpack also processes css
            {
                test:/(\.css)$/,
                use:["style-loader","css-loader"], //webpack bundles all css in single file 
            },
            { test: /\.(png|jpg|svg)$/, loader: 'file-loader?limit=8192' },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                exclude: /node_modules/,
                loader: 'file-loader',
                options: {
                  limit: 1024,
                  name: '[name].[ext]',
                  publicPath: 'dist/assets/',
                  outputPath: 'dist/assets/'
                }
              },
        ]
    }
}