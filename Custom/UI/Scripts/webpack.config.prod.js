const path = require('path');
const config = require(path.resolve(`${__dirname}/..`, 'config.json'));
const babelWebpack = require("babel-minify-webpack-plugin");

module.exports = {
    entry: {
        app: `${__dirname}/${config.lang.typescript.src}/${config.lang.typescript.entry}`
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader?configFile=tsconfig.prod.json',
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new babelWebpack()
    ],
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: `${config.lang.typescript.exit}`,
        path: path.resolve(`${__dirname}/${config.lang.typescript.dist}`)
    }
};