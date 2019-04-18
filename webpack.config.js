var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'docs')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Daftacademy Homework nr 4'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
        ]
    },
    watch: true
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devtool = 'source-map';
    }

    return config;
};