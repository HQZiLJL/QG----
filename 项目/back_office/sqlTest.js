const mysql = require("mysql");
const index = require("../index");
// const url = require("url");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    port: "3306",
    database: 'db_2',
});
connection.connect((err) => {
    if (err) {
        console.log('[query]-:' + err);
        return;
    }
    console.log('[connection connect] succeed');
})
// connection.query("SELECT 1+1 as solution", (err, rows, fields) => {
//     if (err) {
//         console.log('[query]-:' + err);
//         return;
//     }
//     console.log('The solution is:', rows[0].solution);
// })
const url = index.url;
console.log(url);
if (url) {

}
var sql = 'SELECT * FROM websites';
//查
connection.query(sql, function (err, result) {
    if (err) {
        console.log('[SELECT ERROR] - ', err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('------------------------------------------------------------\n\n');
});
// connection.end((err) => {
//     if (err) {
//         return;
//     }
//     console.log('[connection end] succeed!');
// })
