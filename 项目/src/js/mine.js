// export const addFn = (a, b) => a + b;
import "../css/public.css";
import "../css/mine.css";
import "../css/head12.css";
// import username from '../../index';
console.log('mine');
//监听鼠标经过菜单栏
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav a")
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", (e) => {
        nav.classList.remove("nav-mine")
    })
    a[i].addEventListener("mouseleave", (e) => {
        nav.classList.add("nav-mine")
    })
}
let click = document.querySelector("#click")
// click.click()
let list = []
click.addEventListener("click", () => {
    let xhr = new XMLHttpRequest()
    let qs = 'http://127.0.0.1:3456/dist/mine.html?username=HQZhen12&name=hqz';
    xhr.open("GET", qs)
    xhr.addEventListener("loadend", () => {
        console.log(JSON.parse(xhr.response));
        let nestedObject = JSON.parse(xhr.response);
        // const { msg, status } = nestedObject;
        list = Object.values(nestedObject);
        console.log(list);
        // if (msg === -1 && status === -1) {
        //     alert('服务器火爆请稍后。');
        // }
        render(list);
        search();
        // console.log(msg === 1 && status === 200);
    })
    xhr.send()
})

// let nestedObject = {
//     user1: { id: 1, img: "23", name: 'Alice', status: '0', class: '前端组', topic: '123', time: '345', flie2: 'C:%5Cfakepath%5C1.txt' },
//     user2: { id: 2, img: "233462546", name: 'Bob', status: '-1', class: '后台组', topic: '123', time: '345', flie2: 'C:%5Cfakepath%5C1.txt' },
//     user3: { id: 3, img: "23", name: 'Charlie', status: '1', class: '后台组', topic: '123', time: '345', flie2: 'C:%5Cfakepath%5C1.txt' }
// };
// 使用Object.values()将嵌套对象的值转化为数组  
// let list = Object.values(nestedObject);
// console.log(list);
// 输出: [
//    { id: 1, name: 'Alice' },
//    { id: 2, name: 'Bob' },
//    { id: 3, name: 'Charlie' }
// ]

// render(list);
function render(list) {
    var html = '';
    list.forEach((item, index, list) => {
        console.log(item.status === '0');
        console.log(item.status === '1');
        if (item.status === '0') {
            html = html +
                `<li>
                        <p class="name">姓名：${item.name}</p>
                        <p class="class">组别：${item.class}</p>
                        <p class="time">上传时间：${item.time}</p>
                        <p class="topic">会议主题：${item.topic}</p>
                        <textarea name="content" class="content">纪要内容为:${item.content}</textarea>
                        <input type="checkbox" checked>待审核
                        <button class="detail" name="${index}">详情</button>
                        <hr/>
                </li>`
        }
        else if (item.status === '1') {
            html = html +
                `<li>
                        <p class="name">姓名：${item.name}</p>
                        <p class="class">组别：${item.class}</p>
                        <p class="time">上传时间：${item.time}</p>
                        <p class="topic">会议主题：${item.topic}</p>
                        <textarea name="content" class="content">纪要内容为:${item.content}</textarea>
                        <input type="checkbox" checked>已通过
                        <button class="detail" name="${index}">详情</button>
                        <hr/>
                </li>`
        }
        else {
            html = html +
                `<li>
                        <p class="name">姓名：${item.name}</p>
                        <p class="class">组别：${item.class}</p>
                        <p class="time">上传时间：${item.time}</p>
                        <p class="topic">会议主题：${item.topic}</p>
                        <textarea name="content" class="content">纪要内容为:${item.content}</textarea>
                        <input type="checkbox" checked>被退回
                        <button class="detail" name="${index}">详情</button>
                        <hr/>
                </li>`
        }
    })
    document.querySelector('.todo-list').innerHTML = html
}
// search();
function search() {
    let ARR = list.map(val => {
        return val.name, val.topic, val.class, val.time
    })
    console.log(ARR);
    let text = document.querySelectorAll('li')
    console.log(text);
    let search = document.querySelector('.input-search')
    search.addEventListener('keyup', function (e) {
        console.log(e.target.value);
        for (let i = 0; i < ARR.length; i++) {
            console.log(ARR[i].includes(e.target.value));
            //&& (!e.target.value === '')
            if (e.target.value === '') {
                text[i].classList.remove('iconText1')
                continue
            }
            if (ARR[i].includes(e.target.value)) {
                text[i].classList.add('iconText1')
            }
            else {
                text[i].classList.remove('iconText1')
            }
        }
    })
    search.addEventListener('blur', function (e) {
        console.log(12);
        for (let i = 0; i < ARR.length; i++) {
            text[i].classList.remove('iconText1')
        }
        e.target.value = ''
    })
}

//点击详情按钮查看详情
let ul = document.querySelector(".todo-list")
ul.addEventListener("click", (e) => {
    console.log(e.target);
    // console.log(typeof e.target.name);
    // console.log((typeof e.target.name) === 'number');
    var n = Number(e.target.name);
    if (!isNaN(n)) {
        // alert("是数字");
        let xhr = new XMLHttpRequest()
        // console.log(list[e.target.name].name);
        // console.log(list[e.target.name].topic);
        let Name = list[e.target.name].name;
        let Topic = list[e.target.name].topic;

        let qs = `http://127.0.0.1:3456/dist/detail-users.html`;
        xhr.open("GET", qs)
        xhr.addEventListener("loadend", () => {
            console.log(1);
            console.log(Name);
            console.log(Topic);
            // 请求成功，获取到新的HTML内容  
            var newContent = xhr.response;
            // 将新的HTML内容插入到容器中  
            document.querySelector('.right').classList.add('detai')
            document.querySelector('.right').innerHTML = newContent;
            // document.addEventListener("DOMContentLoaded", (e) => {
            console.log(2);
            let Xhr = new XMLHttpRequest();
            qs = `http://127.0.0.1:3456/api/detail?username=${Name}&topic=${Topic}`;
            Xhr.open("GET", qs)
            Xhr.addEventListener("loadend", () => {
                let Name = document.querySelector("#name")
                let Topic = document.querySelector("#topic")
                // let File1 = document.querySelector("#Img")
                let File2 = document.querySelector("#content")
                let Time = document.querySelector("#time")
                let Class_ = document.querySelector("#class")
                console.log(3);
                console.log(JSON.parse(Xhr.response));
                // JSON.parse(Xhr.response)[HQZhen12];
                const { name, time, Class, topic, content, sign, work } = JSON.parse(Xhr.response)
                console.log(Class);
                Name.value = name;
                Time.value = time;
                Class_.value = Class;
                Topic.value = topic;
                File2.value = content;
                console.log(Class_);
                // File1.src = img;
                if (work === '1') {
                    document.querySelector("#work").checked = true
                    document.querySelector("#relax").checked = false
                }
                else {
                    document.querySelector("#work").checked = false
                    document.querySelector("#relax").checked = true
                }
                console.log(sign);
                let arr = sign.split(",");
                console.log(arr);
                let sign_ = document.getElementsByName("sign")
                for (let i = 0; i < arr.length; i++) {
                    for (let j = 0; j < sign_.length; i++) {
                        if (arr[i] === sign_[j].value) {
                            sign_[j].checked = true
                        }
                    }
                }
            })
            Xhr.send();
        })
        xhr.send();
    }
})