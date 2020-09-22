const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: "production",
    entry: "./src/index.tsx",
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: __dirname + '/dist/',
        publicPath: '/'
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [
            'src',
            'node_modules'
        ],
    },        
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },           
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    devServer: {    
        historyApiFallback: true,
        hot: false,
        open: false,
        port: 3000,
        injectClient: false,
        disableHostCheck: true
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + '/src/index.html',          
          filename: 'index.html',
          inject: 'body'
        })
      ]
};