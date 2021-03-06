var path = require('path');

module.exports = {
    mode: 'production',
    entry: './assembler.js',
    output: {
        path: path.resolve('dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
