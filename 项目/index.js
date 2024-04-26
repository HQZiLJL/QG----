const http = require("http");
const fs = require("fs");
const path = require("path");
const mysql = require("mysql");
const Url = require("url");
const querystring = require('querystring');
// const login_users = require('./dist/js/login-users');
const { log } = require("console");
let postData = ''
var post = {}
// console.log(2);
const server = http.createServer((req, res) => {

    // console.log(1);
    // server.on("request", (req, res) => {
    // res.end('123');
    const url = req.url
    // console.log(req.method === 'GET' && url === '/dist/mine.html');
    const { query, pathname } = Url.parse(url, true);
    // console.log(req.method === 'GET' && pathname === '/dist/mine.html');
    // console.log(req.method);
    // console.log(url);
    // console.log((url === '/dist/mine.html' || url === '/dist/js/mine.js') && req.method === 'GET');
    // console.log(query);
    // console.log(req.method === 'GET' && url === '/api/detail' && query);
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
    else if ((url === '/dist/home-users.html' || url === '/dist/js/home-users.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/home-manager.html' || url === '/dist/js/home-manager.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/mine.html' || url === '/dist/js/mine.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/history.html' || url === '/dist/js/history.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/setting.html' || url === '/dist/js/setting.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/user-info.html' || url === '/dist/js/user-info.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/draft.html' || url === '/dist/js/draft.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/login-manager.html' || url === '/dist/js/login-manager.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/bug.html' || url === '/dist/js/bug.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    else if ((url === '/dist/minutes-users.html' || url === '/dist/js/minutes-users.js') && req.method === "GET") {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    //用户登录
    else if (req.method === 'POST' && url === '/dist/home-users.html') {
        postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
        })

        req.on('end', () => {
            post = JSON.parse(postData);
            // module.export.username = post.username
            const connection = mysql.createConnection({
                host: "localhost",
                user: "root",
                password: "123456",
                port: "3306",
                database: 'qgstudio',
            })
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
                for (let i = 0; i < result.length; i++) {
                    if (post.username == result[i].username && post.password == result[i].password) {
                        var end = JSON.stringify({ msg: 1, status: 200 })
                        res.end(end);
                        return;
                    }
                }
                var end = JSON.stringify({ msg: 0, status: 0 })
                res.end(end)
            })
            //关闭连接
            connection.end();
        })
    }
    //用户注册
    // else if (req.method === 'POST' && url === '/dist/home-users.html') {
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
    //         //制定插入语句
    //         var userAddSql = "INSERT INTO userinfo(Id,username,password)VALUES(0,?,?)";
    //         var userAddSql_Params = [post.username, post.password];
    //         //插入
    //         connection.query(userAddSql, userAddSql_Params, function (err) {
    //             if (err) {
    //                 console.log('[INSERT ERROR]-:', err.message);
    //                 return;
    //             }
    //             console.log("----------INSERT-----------")
    //             var end = JSON.stringify({ msg: 1, status: 200 })
    //             res.end(end)

    //         })
    //         console.log(1);
    //         //制定查询语句
    //         var userGetSql = "SELECT * FROM userinfo";
    //         connection.query(userGetSql, function (err, result) {
    //             if (err) {
    //                 console.log('[SELECT-ERROR]--:', err.message);
    //                 return;
    //             }
    //             console.log(post.username == result[0].username);
    //             console.log("----------SELECT-----------");
    //             console.log(post.username == result[0].username);
    //             console.log(post.username);
    //             for (let i = 0; i < result.length; i++) {
    //                 if (post.username == result[i].username) {
    //                     var end = JSON.stringify({ msg: -1, status: -1 })
    //                     res.end(end)
    //                 }
    //             }
    //         })
    //         //关闭连接
    //         connection.end();
    //     })
    // }
    //管理员登录
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
            //制定语句
            var userGetSql = "SELECT * FROM userinfo";
            connection.query(userGetSql, function (err, result) {
                if (err) {
                    console.log('[SELECT-ERROR]--:', err.message);
                    return;
                }
                console.log("----------SELECT-----------");
                for (let i = 0; i < result.length; i++) {
                    console.log(post.manager);
                    console.log(post.password);
                    console.log(result[i].manager);
                    console.log(result[i].password);
                    if (post.manager == result[i].manager && post.password == result[i].password) {
                        var end = JSON.stringify({ msg: 1, status: 200 })
                        console.log(end);
                        res.end(end);
                        return;
                    }
                }
                var end = JSON.stringify({ msg: 0, status: 0 })
                res.end(end)
            })
            //关闭连接
            connection.end();
        })
    }
    //管理员注册
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
    //         //制定查询语句
    //         var userGetSql = "SELECT * FROM managerinfo";
    //         connection.query(userGetSql, function (err, result) {
    //             if (err) {
    //                 console.log('[SELECT-ERROR]--:', err.message);
    //                 return;
    //             }
    //             console.log("----------SELECT-----------");
    //             // console.log(post.username == result[0].username);
    //             for (let i = 0; i < result.length; i++) {
    //                 if (post.manager == result[i].manager) {
    //                     var end = JSON.stringify({ msg: -1, status: -1 })
    //                     res.end(end)
    //                 }
    //             }
    //         })
    //         //制定插入语句
    //         var userAddSql = "INSERT INTO managerinfo(Id,manager,password)VALUES(0,?,?)";
    //         // console.log(post.username);
    //         var userAddSql_Params = [post.manager, post.password];
    //         //插入
    //         connection.query(userAddSql, userAddSql_Params, function (err) {
    //             if (err) {
    //                 console.log('[INSERT ERROR]-:', err.message);
    //                 return;
    //             }
    //             console.log("----------INSERT-----------")
    //             var end = JSON.stringify({ msg: 1, status: 200 })
    //             res.end(end)

    //         })
    //         //关闭连接
    //         connection.end();
    //         // res.end(postData);
    //     })
    // }
    //纪要录入
    else if (req.method === 'POST' && url === '/api/formdata') {
        postData = ''
        req.on('data', chunk => {
            postData += chunk.toString();
            post = JSON.parse(postData);
            console.log(post);
        })
        req.on('end', () => {
            // console.log('postData', postData);
            post = JSON.parse(postData);
            // console.log(post);
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
            var userAddSql = "INSERT INTO part(`Id`,`img`,`name`,`class`,`time`,`topic`,`content`,`sign`,`work`,`relax`,`status`)VALUES(0,?,?,?,?,?,?,?,?,?,?)";
            // console.log(post.Work);
            // console.log(post.File1);
            // console.log(post.Status);
            var userAddSql_Params = [post.File1, post.Name, post.Class, post.Time, post.Topic, post.File2, post.Sign, post.Work, post.Relax, post.Status];
            //插入
            connection.query(userAddSql, userAddSql_Params, function (err, result) {
                if (err) {
                    console.log('[INSERT ERROR]-:', err.message);
                    var end = JSON.stringify({ msg: -1, status: -1 })
                    res.end(end)
                    return;
                }
                console.log("----------INSERT-----------")
                var end = JSON.stringify({ msg: 1, status: 200 })
                console.log(result);
                res.end(end)
                //关闭连接
                connection.end();
            })
        })
    }
    //我的发布
    else if (req.method === 'GET' && pathname === '/dist/mine.html') {
        // console.log('postData', postData);
        // Query = JSON.parse(query);
        console.log(query);
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
        var userGetSql = "SELECT * FROM part";
        connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[SELECT-ERROR]--:', err.message);
                return;
            }
            console.log("----------SELECT-----------");
            console.log(result);
            let json = {}
            let end = JSON.stringify(json)
            // console.log(post.username == result[0].username);
            for (let i = 0; i < result.length; i++) {
                console.log(query.username);
                console.log(result[i].name);
                console.log(query.username === result[i].name || query.name === result[i].name);
                if (query.username === result[i].name || query.name === result[i].name) {
                    json[result[i].Id] = result[i]
                    end = JSON.stringify(json)
                }
            }
            console.log(end);
            res.end(end)
            //关闭连接
            connection.end();
        })
    }
    //草稿纸
    else if (req.method === 'GET' && pathname === '/dist/draft.html') {
        console.log(query);
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
        var userGetSql = "SELECT * FROM draft";
        connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[SELECT-ERROR]--:', err.message);
                return;
            }
            console.log("----------SELECT-----------");
            // console.log(result);
            let json = {}
            let end = JSON.stringify(json)
            console.log(post.username == result[0].name);
            for (let i = 0; i < result.length; i++) {
                console.log(query.username);
                console.log(result[i].name);
                console.log(query.username === result[i].name && query.status === result[i].status);
                if ((query.username === result[i].name && query.status === result[i].status) || (query.statu === result[i].status && query.username === result[i].name)) {
                    json[result[i].Id] = result[i]
                    end = JSON.stringify(json)
                }
            }
            console.log(end);
            res.end(end)
            //关闭连接
            connection.end();
        })
    }
    //所有纪要内容
    else if (req.method === 'GET' && pathname === '/dist/history.html') {
        console.log(query);
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
        var userGetSql = "SELECT * FROM part";
        connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[SELECT-ERROR]--:', err.message);
                return;
            }
            console.log("----------SELECT-----------");
            // console.log(result);
            let json = {}
            let end = JSON.stringify(json)
            // console.log(post.username == result[0].name);
            for (let i = 0; i < result.length; i++) {
                // console.log(query.username);
                console.log(result[i].name);
                // console.log(query.username === result[i].name && query.status === result[i].status);
                if (query.status === result[i].status) {
                    json[result[i].Id] = result[i]
                    end = JSON.stringify(json)
                }
            }
            console.log(end);
            res.end(end)
            //关闭连接
            connection.end();
        })
    }
    //纪要详情页面请求
    else if ((url === '/dist/detail-users.html' || url === '/dist/js/detail-users.js') && req.method === 'GET') {
        fs.readFile(fpath, 'utf8', (err, dataStr) => {
            if (err) res.end('404 Not Found.')
            else res.end(dataStr)
        })
    }
    //纪要详情数据请求
    else if (req.method === 'GET' && pathname === '/api/detail') {
        // console.log('postData', postData);
        // Query = JSON.parse(query);
        console.log(query);
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
        var userGetSql = "SELECT * FROM part";
        connection.query(userGetSql, function (err, result) {
            if (err) {
                console.log('[SELECT-ERROR]--:', err.message);
                return;
            }
            console.log("----------SELECT-----------");
            // console.log(result);
            // let json = {}
            // let end = JSON.stringify(json)
            // console.log(post.username == result[0].username);
            for (let i = 0; i < result.length; i++) {
                console.log(query.username);
                console.log(result[i].name);
                console.log(query.username === result[i].name || query.topic === result[i].topic);
                if (query.username === result[i].name && query.topic === result[i].topic) {
                    // json[result[i].name] = result[i]
                    console.log(result[i]);
                    end = JSON.stringify(result[i])
                }
            }
            console.log(end);
            res.end(end)
            //关闭连接
            connection.end();
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
            console.log('[UPDATE ERROR]-:', err.message);
            return;
        }
        console.log("----------UPDATE-----------")
        console.log("UPDATE affectedRows", result.affectedRows);
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
            console.log('[INSERT ERROR]-:', err.message);
            return;
        }
        console.log("----------INSERT-----------")
        console.log("INSERT ID:", result);
    })
    // 关闭连接
    connection.end();
}