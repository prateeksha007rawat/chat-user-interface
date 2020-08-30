var path = require('path');

module.exports = {
    entry: './source/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib/',
        // filename will be added in gulpfile
        // filename: 'chat-ui.js',
        library: 'ChatUI',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /(\.json)$/,
                loader: 'json-loader'
            }
        ]
    },
    resolve: {
        root: path.resolve('./source'),
        extensions: ['', '.js']
    },
    plugins: []
};
