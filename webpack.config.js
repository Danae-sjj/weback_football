/**
 * Created by Administrator on 2017/2/8.
 */

module.exports={
    //入口文件
  entry:__dirname+"/src/scripts/app.js",
  devtool:"source-map",
    //输出
  output:{
    path:__dirname+"/prd/",
    filename:"boudle.js"
  },
  module:{
   loaders:[
       //编译CSS
       {
           test:/\.css$/,   //正则  要编译所有的css文件
           loader:"style-loader!css-loader"   //loader
       },
       //解析ES2015
       {
           test:/\.js$/,   //正则  要编译所有的js文件
           loader:"babel-loader"   //loader
       },
       //编译scss（与抽离不能同时存在）
       {
           test:/\.sass$/,   //正则  要编译所有的scss文件
           loader:"style-loader!css-loader!sass-loader"   //loader
       }
   ]
  },
    devServer:{
        contentBase:__dirname+"/prd/",
        port:"66",
        inline:true,
        host:"localhost",
        historyApiFallback:true
    }
};




