const ExtractTextPlugin = require('extract-text-webpack-plugin'); // 分离打包后的CSS，形成CSS文件
const path = require('path');
const webpackConfig = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
        publicPath: ''
    },
    module: {
        rules: [{
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
                fallback: {
                    loader: 'style-loader',
                    options: {
                        singleton: true
                    }
                },
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                },
                    {
                        loader: 'less-loader'
                    }
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].min.css',
            allChunks: true
        })
    ]
};

module.exports = webpackConfig;