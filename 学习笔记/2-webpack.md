npm init   --> package.json\

npm install webpack webpack-cli -D  --> package-lock.json

大核心概念

1. entry(入口)
   指示Vebpack从哪个文件开始打包

2. output(输出)
   指示Webpack打包完的文件输出到哪里去，如何命名等

3. loader(加载器)
   webpack本身只能处理js、json等资源，其他资源需要借助loader,Webpack才能解析

4. plugins(插件)
   扩展Webpack的功能

5. mode(模式)
   主要由两种模式：
   ·开发模式：development
   ·生产模式：production

#### 处理图片

{

​        test: /\.(png|jpe?g|gif|webp|svg)$/,

​        type: 'asset',

​        parser: {

​          dataUrlCondition: {

​            //小于10kb的图片转base64

​            // 优点：减少请求数量缺点：体积会更大

​            maxSize: 10 * 1024 // 10kb

​          }

​        }

}