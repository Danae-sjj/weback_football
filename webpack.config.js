/**
 * Created by Administrator on 2017/2/8.
 */

module.exports={
    //����ļ�
  entry:__dirname+"/src/scripts/app.js",
  devtool:"source-map",
    //���
  output:{
    path:__dirname+"/prd/",
    filename:"boudle.js"
  },
  module:{
   loaders:[
       //����CSS
       {
           test:/\.css$/,   //����  Ҫ�������е�css�ļ�
           loader:"style-loader!css-loader"   //loader
       },
       //����ES2015
       {
           test:/\.js$/,   //����  Ҫ�������е�js�ļ�
           loader:"babel-loader"   //loader
       },
       //����scss������벻��ͬʱ���ڣ�
       {
           test:/\.sass$/,   //����  Ҫ�������е�scss�ļ�
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




