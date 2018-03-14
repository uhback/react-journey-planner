const path = require('path');
const ExtractTextPlguin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

// Heroku initially set the NODE_ENV to 'production', otherwise set 'dev'
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

if (process.env.NODE_ENV === 'production') {
    console.log('prod: ' + process.env.NODE_ENV);
    require('dotenv').config({ path: '.env.prod' });
} else if (process.env.NODE_ENV === 'dev') {
    console.log('dev: ' + process.env.NODE_ENV);
    require('dotenv').config({ path: '.env.dev' });
}

module.exports = (env) => {
    const isProduction = env === 'production'; // true or false
    const CSSExtract = new ExtractTextPlguin('styles.css'); // be faster load 

    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', 'dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [ 
                        'css-loader',
                        'sass-loader',
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(jpg|jpeg|gif|png|ico)$/,
                exclude: /node_modules/,
                loader: 'file-loader?name=[name].[ext]'
             }]
        },
        // any plugins add
        plugins: [
            CSSExtract,
            new webpack.DefinePlugin({
                'process.env.API_URL': JSON.stringify(process.env.API_URL),
            })
        ],
        // source-map: slow build but production -> for real server
        // inline-source-map: slow build and not production (not be minimalized)-> it's for dev-server
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
}