const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer()
server.on("request", (req, res) => {
    const url = req.url
    // if (url === '/') url = '/dist/head.html';
    const fpath = path.join(__dirname, url)
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 Not Found.')
        res.end(dataStr)
    })
})
server.listen(3456, () => {
    console.log('server running at http://127.0.0.1:3456/dist/head.html')
})
module.exports.url = url;