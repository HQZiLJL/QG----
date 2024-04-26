// export const addFn = (a, b) => a + b;
import "../css/public.css";
import "../css/draft.css";
import "../css/head12.css";
console.log('draft');
//监听鼠标经过菜单栏
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav a")
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", (e) => {
        nav.classList.remove("nav-draft")
    })
    a[i].addEventListener("mouseleave", (e) => {
        nav.classList.add("nav-draft")
    })
}
let click = document.querySelector("#click")
// click.click()
let list = []
click.addEventListener("click", () => {
    let xhr = new XMLHttpRequest()
    let qs = 'http://127.0.0.1:3456/dist/draft.html?username=HQZhen12&status=-1&statu=-2';
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
        if (item.status === '-2') {
            html = html +
                `<li>
                        <p class="name">姓名：${item.name}</p>
                        <p class="class">组别：${item.class}</p>
                        <p class="time">上传时间：${item.time}</p>
                        <p class="topic">会议主题：${item.topic}</p>
                        <textarea name="content" class="content">纪要内容为:${item.content}</textarea>
                        <input type="checkbox" checked>正在编辑
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
                        <textarea name="cancel">退回理由：</textarea>
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