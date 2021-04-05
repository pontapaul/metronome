const HTMLWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
});

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
                options: { name: '[name].[ext]', outputPath: 'fonts/', }
            },
        ]
    },
    plugins: [HTMLWebpackPluginConfig, new Dotenv()],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        inline: true,
        quiet: false
    },
};
