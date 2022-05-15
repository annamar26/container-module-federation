const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); // only add this if you don't have yet
const { ModuleFederationPlugin } = webpack.container;


module.exports = {
    output: {
        publicPath: 'http://localhost:5000'
    },
    mode: 'development',
    devServer: {
        port: 5000,
        open: true
    },
    devtool: 'source-map',
    module: {
        rules: [{
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: { loader: 'babel-loader' }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'app1',
            filename: 'remoteEntry.js',
            remotes: {
                app1: 'app1@http://localhost:8500/remoteEntry.js'

            }



        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}