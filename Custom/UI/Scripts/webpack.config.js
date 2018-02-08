const path = require('path');
const config = require(path.resolve(`${__dirname}/..`, 'config.json'));

console.log(`${__dirname}/${config.lang.typescript.src}/${config.lang.typescript.entry}`);

module.exports = {
    entry: {
        app: `${__dirname}/${config.lang.typescript.src}/${config.lang.typescript.entry}`
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(`${__dirname}/${config.lang.typescript.dist}`)
    }
};