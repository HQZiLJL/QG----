// export const addFn = (a, b) => a + b;
import "../css/public.css";
import "../css/mine.css";
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
var list = [
    { name: 'hqz', status: '0' },
    { name: 'ljl', status: '1' },
    { name: 'zzx', status: '-1' },
]
render(list);
function render(list) {
    var html = '';
    list.forEach((item, index, list) => {
        if (item.status === '0') {
            html = html +
                `<li class="itemComplete">
                    <span class="iconComplete"></span>
                    <p class="btnName">${item.name}</p>
                    <div class="btnGroup">
                    <button class="btnDelete"></button>
                    </div>
                </li>`
        }
        else if (item.status === '1') {
            html = html +
                `<li class="itemComplete">
                <span class="iconComplete iconCompleteActive iconCompleteActive:before"></span>
                <p class="btnName iconText">${item.name}</p>
                <div class="btnGroup">
                    <button class="btnDelete"></button>
                </div>
                </li>`
        }
        else {
            html = html +
                `<li class="itemComplete">
                <span class="iconComplete iconCompleteDefeat iconCompleteDefeat:before"></span>
                <p class="btnName iconText">${item.name}</p>
                <div class="btnGroup">
                    <button class="btnDelete"></button>
                </div>
                </li>`
        }
    })
    document.querySelector('.todo-list').innerHTML = html
}
search();
function search() {
    let ARR = list.map(val => {
        return val.name
    })
    let text = document.querySelectorAll('.btnName')
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