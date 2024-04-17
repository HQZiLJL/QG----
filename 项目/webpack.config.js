const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");
module.exports = {
    //多个入口，就会有多个出口
    entry: {
        'home': "./src/js/home.js",
        'aboutMe': "./src/js/aboutMe.js",
    },
    //出口(输入)
    output: {
        // 文件的输出路径
        path: path.resolve(__dirname, 'dist'),//绝对路径
        //文件名
        filename: "js/[name].js",
    },
    //加载器
    module: {
        rules: [
            //loader的配置
            {
                test: /\.css$/,
                use: [
                    //执行顺序：从右到左（从下到上）
                    "style-loader",//将js中css通过创建style标签添加html文件中生效
                    "css-loader",//将css资源编译成commonjs的模块到js中
                ],
            },
            {
                test: /\.(png|jpe?g|gif|webp|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        //小于10kb的图片转base64
                        // 优点：减少请求数量缺点：体积会更大
                        maxSize: 10 * 1024 // 10kb
                    },
                },
            },
        ],
    },
    //插件
    plugins: [
        //plugins的配置
        new HtmlWebpackPlugin({
            template: "./src/pages/home.html",
            filename: "home.html",
            chunks: ['home'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/aboutMe.html",
            filename: "aboutMe.html",
            chunks: ['aboutMe'],
        })
    ],
    //模式
    mode: "development",
}