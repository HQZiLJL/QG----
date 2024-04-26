// 处理data参数
// eparam
// { data } 需要发送到服务器的数据
// @returns{ string } 返回拼接好的查询字符
function resolveData(data) {
    var arr = []
    for (let k in data) {
        arr.push(k + '=' + data[k])
    }
    return arr.join('&')
}

function HQZhen(options) {
    var xhr = new XMLHttpRequest()
    //把外界传递过来的参数对象，转换为查询字符串
    var qs = resolveData(options.data)
    if (options.method.toUpperCase() === 'GET') {
        //发起GET请求
        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()
    } else if (options.method.toUpperCase() === "POST") {
        //发起POST请求
        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)
    }
    xhr.onreadystatechange = function () {
        if (xhr.readystate == 4 && xhr.status == 200) {
            var result = JSON.parse(xhr.responseText)
            options.success(result)
        }
    }
}
