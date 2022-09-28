const path = require('path');
const webpack = require('webpack')
module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules'],
    },
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            dt: 'datatable.net'
        })
    ]
};