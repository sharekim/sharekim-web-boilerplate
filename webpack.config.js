const path=require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry: './src/index.tsx',
    devtool: "inline-source-map",
    module:{

        rules:[
            {
                test: /\.(jpg|png|gif|svg|pdf|ico)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name]-[hash:8].[ext]'
                        },
                    },
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 100000
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test:/\.less$/,
                use:[
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules:true
                        }
                    },
                    {
                        loader: 'less-loader'
                    }

                ]
            },
            {
                test:/\.tsx?$/,
                loader:"ts-loader",
                exclude:/node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']

    },
    output: {
        path:path.resolve(__dirname, "build"),
        filename:"bundle.js",
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./index.html"
        })
    ]



};