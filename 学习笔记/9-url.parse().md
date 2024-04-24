parse()方法接受一个URL字符串，解析它，然后返回一个URL对象。如果urlString不是字符串，则抛出类型错误。如果存在auth属性但无法解码，则会抛出URIError。

语法：
url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
参数1：必填 {string} 要解析的url地址
参数2：{boole} 将查询（query）参数解析成对象形式，默认为false
参数3：{boole} 如果为真，在文字字符串//之后和下一个/之前的第一个标记将被解释为主机。例如，给定//foo/bar，结果将是{host: ‘foo’， pathname: ‘/bar’}，而不是{pathname: ‘//foo/bar’}。默认值:false。

##### 默认情况下输出 // console.log(req.url);

`Url {
  protocol: null,
  slashes: null,
  auth: null,
  host: null,
  port: null,
  hostname: null,
  hash: null,
  search: '?name=sing&age=25',
  query: [Object: null prototype] { name: 'sing', age: '25' },
  pathname: '/list',
  path: '/list?name=sing&age=25',
  href: '/list?name=sing&age=25'
}`

##### parseQueryString 为ture

`// query 参数解析成对象形式
 query: [Object: null prototype] { name: 'sing', age: '25' }`

##### 通常的引入方法

`// url对象
const url = require('url');
// 解构
let { query, pathname } = url.parse(req.url, true);`

