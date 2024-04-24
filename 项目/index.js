const http = require("http");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const querystring = require('querystring');
// const login_users = require('./dist/js/login-users');
const { log } = require("console");
let postData = ''
var post = {}
const server = http.createServer((req, res) => {
    // server.on("request", (req, res) => {

    // res.end('123');
    const url = req.url
    // console.log(req);
    // console.log(req.method);
    // console.log(login_users.q === 0);
    const fpath = path.join(__dirname, url)
    // console.log(url === '/dist/head.html' || url === '/dist/js/head.js' || url === '/favicon.ico');
    if (url === '/dist/head.html' || url === '/dist/js/head.js' || url === '/favicon.ico') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if (url === '/dist/login-users.html' || url === '/dist/js/login-users.js') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if (url === '/dist/login-manager.html' || url === '/dist/js/login-manager.js') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    // else if (req.method === 'POST' && url === '/dist/home-users.html') {
    //     postData = ''
    //     req.on('data', chunk => {
    //         postData += chunk.toString();
    //     })
    //     req.on('end', () => {
    //         post = JSON.parse(postData);
    //         const connection = mysql.createConnection({
    //             host: "localhost",
    //             user: "root",
    //             password: "123456",
    //             port: "3306",
    //             database: 'qgstudio',
    //         })
    //         //创建连接
    //         connection.connect();
    //         //制定语句
    //         var userGetSql = "SELECT * FROM userinfo";
    //         connection.query(userGetSql, function (err, result) {
    //             if (err) {
    //                 console.log('[SELECT-ERROR]--:', err.message);
    //                 return;
    //             }
    //             console.log("----------SELECT-----------");
    //             for (let i = 0; i < result.length; i++) {
    //                 if (post.username == result[i].username && post.password == result[i].password) {
    //                     var end = JSON.stringify({ msg: 1, status: 200 })
    //                     res.end(end);
    //                     return;
    //                 }
    //             }
    //             var end = JSON.stringify({ msg: 0, status: 0 })
    //             res.end(end)
    //         })
    //         //关闭连接
    //         connection.end();
    //     })
    // }
    else if (req.method === 'POST' && url === '/dist/home-users.html') {
        postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            console.log('postData', postData);
            post = JSON.parse(postData);
            console.log(post);
            const connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "123456",
                port: "3306",
                database: 'qgstudio',
            })
            //创建连接
            connection.connect();
            //制定插入语句
            var userAddSql = "INSERT INTO userinfo(Id,username,password)VALUES(0,?,?)";
            var userAddSql_Params = [post.username, post.password];
            //插入
            connection.query(userAddSql, userAddSql_Params, function (err) {
                if (err) {
                    consoLe.log('[INSERT ERROR]-:', err.message);
                    return;
                }
                console.log("----------INSERT-----------")
                var end = JSON.stringify({ msg: 1, status: 200 })
                res.end(end)

            })
            console.log(1);
            //制定查询语句
            var userGetSql = "SELECT * FROM userinfo";
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    console.log('[SELECT-ERROR]--:', err.message);
                    return;
                }
                console.log(post.username == result[0].username);
                console.log("----------SELECT-----------");
                console.log(post.username == result[0].username);
                console.log(post.username);
                for (let i = 0; i < result.length; i++) {
                    if (post.username == result[i].username) {
                        var end = JSON.stringify({ msg: -1, status: -1 })
                        res.end(end)
                    }
                }
            })
            //关闭连接
            connection.end();
        })
    }
    // else if (req.method === 'POST' && url === '/dist/home-manager.html') {
    //     postData = ''
    //     req.on('data', chunk => {
    //         postData += chunk.toString();
    //     })
    //     req.on('end', () => {
    //         console.log('postData', postData);
    //         post = JSON.parse(postData);
    //         console.log(post);
    //         const connection = mysql.createConnection({
    //             host: "localhost",
    //             user: "root",
    //             password: "123456",
    //             port: "3306",
    //             database: 'qgstudio',
    //         })
    //         //创建连接
    //         connection.connect();
    //         //制定语句
    //         var userGetSql = "SELECT * FROM userinfo";
    //         connection.query(userGetSql, function (err, result) {
    //             if (err) {
    //                 console.log('[SELECT-ERROR]--:', err.message);
    //                 return;
    //             }
    //             console.log("----------SELECT-----------");
    //             for (let i = 0; i < result.length; i++) {
    //                 console.log(post.manager);
    //                 console.log(post.password);
    //                 console.log(result[i].manager);
    //                 console.log(result[i].password);
    //                 if (post.manager == result[i].manager && post.password == result[i].password) {
    //                     var end = JSON.stringify({ msg: 1, status: 200 })
    //                     console.log(end);
    //                     res.end(end);
    //                     return;
    //                 }
    //             }
    //             var end = JSON.stringify({ msg: 0, status: 0 })
    //             res.end(end)
    //         })
    //         //关闭连接
    //         connection.end();
    //     })
    // }
    else if (req.method === 'POST' && url === '/dist/home-manager.html') {
        postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
        })
        req.on('end', () => {
            console.log('postData', postData);
            post = JSON.parse(postData);
            console.log(post);
            const connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "123456",
                port: "3306",
                database: 'qgstudio',
            })
            //创建连接
            connection.connect();
            //制定查询语句
            var userGetSql = "SELECT * FROM managerinfo";
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    console.log('[SELECT-ERROR]--:', err.message);
                    return;
                }
                console.log("----------SELECT-----------");
                // console.log(post.username == result[0].username);
                for (let i = 0; i < result.length; i++) {
                    if (post.manager == result[i].manager) {
                        var end = JSON.stringify({ msg: -1, status: -1 })
                        res.end(end)
                    }
                }
            })
            //制定插入语句
            var userAddSql = "INSERT INTO managerinfo(Id,manager,password)VALUES(0,?,?)";
            // console.log(post.username);
            var userAddSql_Params = [post.manager, post.password];
            //插入
            connection.query(userAddSql, userAddSql_Params, function (err) {
                if (err) {
                    consoLe.log('[INSERT ERROR]-:', err.message);
                    return;
                }
                console.log("----------INSERT-----------")
                var end = JSON.stringify({ msg: 1, status: 200 })
                res.end(end)

            })
            //关闭连接
            connection.end();
            // res.end(postData);
        })
    }
})
server.listen(3456, () => {
    console.log('server running at http://127.0.0.1:3456/dist/head.html')
})

function UPDATE() {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: '3306',
        database: 'qgstudio',
    })
    //创建连接
    connection.connect();
    //制定语句
    var userAddSql = "UPDATE userinfo SET UserName=?,UserPass=?WHERE Id=?";
    var userAddSql_Params = ['张旺', '5678', 1];
    //更改
    connection.query(userAddSql, userAddSql_Params, function (err, result) {
        if (err) {
            consoLe.log('[UPDATE ERROR]-:', err.message);
            return;
        }
        console.log("----------UPDATE-----------")
        consoLe.log("UPDATE affectedRows", result.affectedRows);
    })
    //关闭连接
    connection.end();
}
function SELECT() {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: '3306',
        database: 'qgstudio',
    });
    //创建连接
    connection.connect();
    //制定语句
    var userGetSql = "SELECT * FROM userinfo";
    connection.query(userGetSql, function (err, result) {
        if (err) {
            console.log('[SELECT-ERROR]--:', err.message);
            return;
        }
        console.log("----------SELECT-----------");
        console.log(result);
    })
    //关闭连接
    connection.end();
}
function INSERT() {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        port: '3306',
        database: 'qgstudio',
    })
    //创建连接
    connection.connect();
    //制定语句
    var userAddSql = "INSERT INTO userinfo(Id,Username,UserPass)VALUES(0,?,?)";
    var userAddSql_Params = ['Wilson', 'abcd'];
    //插入
    connection.query(userAddSql, userAddSql_Params, function (err, result) {
        if (err) {
            consoLe.log('[INSERT ERROR]-:', err.message);
            return;
        }
        console.log("----------INSERT-----------")
        console.log("INSERT ID:", result);
    })
    // 关闭连接
    connection.end();
}