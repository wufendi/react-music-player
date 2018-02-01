/**
 * Created by wufendi on 2018/2/1.
 */
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new webpackDevServer(webpack(config),{
    publicPath:config.output.publicPath,
    hot:true,
    historyApiFallback:true,
    quiet:false,
    noInfo:false,
    stats:{
        assets:false,
        colors:true,
        version:false,
        hash:false,
        timings:false,
        chunks:false,
        chunkModules:false
    }
}).listen(3000,'localhost',function (err) {
    if(err){
        console.error(err);
    }
    console.log('lstening at localhost:3000')
});