const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");
module.exports = {
    //模式
    mode: "development",
    //多个入口，就会有多个出口
    entry: {
        'head': "./src/js/head.js",
        'login-users': "./src/js/login-users.js",
        'login-manager': "./src/js/login-manager.js",
        'home-manager': "./src/js/home-manager.js",
        'home-users': "./src/js/home-users.js",
        'personal': "./src/js/personal.js",
        'draft': "./src/js/draft.js",
        'mine': "./src/js/mine.js",
        'minutes-users': "./src/js/minutes-users.js",
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
                // parser: {
                //     dataUrlCondition: {
                //         //小于10kb的图片转base64
                //         // 优点：减少请求数量缺点：体积会更大
                //         maxSize: 10 * 1024 // 10kb
                //     },
                // },
            },
        ],
    },
    //插件
    plugins: [
        //plugins的配置
        new HtmlWebpackPlugin({
            template: "./src/pages/head.html",
            filename: "head.html",
            chunks: ['head'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/login-users.html",
            filename: "login-users.html",
            chunks: ['login-users'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/login-manager.html",
            filename: "login-manager.html",
            chunks: ['login-manager'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/home-manager.html",
            filename: "home-manager.html",
            chunks: ['home-manager'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/home-users.html",
            filename: "home-users.html",
            chunks: ['home-users'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/minutes-users.html",
            filename: "minutes-users.html",
            chunks: ['minutes-users'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/draft.html",
            filename: "draft.html",
            chunks: ['draft'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/personal.html",
            filename: "personal.html",
            chunks: ['personal'],
        }),
        new HtmlWebpackPlugin({
            template: "./src/pages/mine.html",
            filename: "mine.html",
            chunks: ['mine'],
        }),
    ],
    // devServer: {
    //     port: 3456,
    //     open: true,
    //     static: {
    //         directory: path.join(__dirname, '/dist/head.html'),
    //     },
    // }
}