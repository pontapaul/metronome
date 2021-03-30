const HTMLWebpackPlugin = require('html-webpack-plugin');

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
        ]
    },
    plugins: [HTMLWebpackPluginConfig],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devServer: {
        inline: false,
        port: 8001,
        quiet: false
    },
};
