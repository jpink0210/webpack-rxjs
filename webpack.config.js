const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: 'index'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js?[hash:8]',
        publicPath: process.env.NODE_ENV === "development" ? "/" : "./"
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 300000, // 整数类型（以字节为单位）
        maxEntrypointSize: 500000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
            return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendor',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        compress: true,
        port: 3000,
        stats: {
            assets: true,
            cached: false,
            chunkModules: false,
            chunkOrigins: false,
            chunks: false,
            colors: true,
            hash: false,
            modules: false,
            reasons: false,
            source: false,
            version: false,
            warnings: false
        },
        proxy: {
            // '/api/*': {
            //     target: 'http://XXX.com.tw',
            //     changeOrigin: true,
            // },
        },
    },  
    resolve: {
        modules: [
            path.resolve('src'),
            path.resolve('src/images'),
            path.resolve('node_modules')
        ],
        extensions: ['.js']
    },
    module:{
        rules:[
            {
                test: /\.(sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
                include: path.resolve('src'),
            },
            {
                test: /\.(woff|woff2|ttf|eot)$/,
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]?[hash:8]'
                }
            },
            {
                test: /\.(js)$/,
                use: 'babel-loader'
            },
            {
                test: /\.(css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader'
                ],
                include: path.resolve('src')
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/,
                include: path.resolve('src/images'),
                use:[
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 3000,
                            name:'[path][name].[ext]?[hash:8]'
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack-Rx Demo',
            filename: 'index.html',
            template: 'html/index.html',
            favicon: 'assets/icons8-w-480.ico'
        }),
        new CopyWebpackPlugin([
            { from: 'assets', to: 'assets' },
        ]),
    ]
};

module.exports = config;
