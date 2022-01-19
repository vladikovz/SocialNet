/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const babelOptions = (preset) => {
    const options = {
        presets: ['@babel/preset-env'],
        plugins: ['@babel/plugin-proposal-class-properties'],
    }

    if (preset) {
        options.presets.push(preset)
    }

    return options
}

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './index.tsx'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        open: true,
        port: 3005,
        historyApiFallback: true,
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.tsx', '.ts', '.md', '.css'],
        alias: {
            '@mui/styled-engine': '@mui/styled-engine-sc',
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions(),
                },
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.css$/,
                // include: path.join(__dirname, 'src/components'),
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            modules: true,
                        },
                    },
                    // {
                    //     loader: 'typings-for-css-modules-loader',
                    //     options: {
                    //         modules: true,
                    //         namedExport: true,
                    //     },
                    // },
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /\.module\.css$/,
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelOptions('@babel/preset-react'),
                },
            },
        ],
    },
}
