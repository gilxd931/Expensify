const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    const isProd = env === 'production';

    console.log('env: ', env)
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: 'pre',
                use: [
                    'babel-loader',
                    'source-map-loader'
                ],
            }, {
                test: /\.s?css$/,
                use: [MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
                    }
                },
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true
                    }
                }
                ],
            }

            ]
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'styles.css'
            })
        ],
        devtool: isProd ? "source-map" : "inline-source-map",
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};

