import "../css/personal.css";
function getLocalNum() {
    let number = localStorage.getItem('num')
    if (number)//如果本地存储有数组则返回JSON.parse()之后的对象
        return JSON.parse(number)
    else {//如果本地存储没有数据,则默认写入三条数据,注意存储的利用JSON.stringify()存储JSON格
        var num = 0
        localStorage.setItem('num', JSON.stringify(num))
    }
}
getLocalNum()
var num = getLocalNum()
document.querySelector('.active-num').innerHTML = num
//读取本地存储的数据封装为函数
//需求阄：读取本地存储数据（封装函数）
//
//如果本地存储有数据，则返回JS0N.parse()之后的对象
//  
// 如果本地存储没有数据，则默认写入三条数据，注意存储的利用JS0N.stringify()存储) JSON格式
function getLocalData() {
    let data = localStorage.getItem('data')
    if (data)//如果本地存储有数组则返回JSON.parse()之后的对象
        return JSON.parse(data)
    else {//如果本地存储没有数据,则默认写入三条数据,注意存储的利用JSON.stringify()存储JSON格
        let list = []
        localStorage.setItem('data', JSON.stringify(list))
    }
}
getLocalData()
let inputTodo = document.querySelector('.input-todo')
let useCount = document.querySelector('.useCount')
inputTodo.addEventListener('input', function () {
    console.log(this.value.length)
    useCount.innerHTML = this.value.length
})
//需求②：渲染模块
//先读取本地存储数据，然后渲染
let list = getLocalData()
console.log(list);
render(list);
//新输入的笔记，插入到所有笔记最前面
inputTodo.addEventListener('keyup', function (e) {
    //需求③：添加模块
    //注意，先取的最新的本地存储数据，然后追加
    let list = getLocalData()
    //新增了数据，要把新数据存储到本地存储，别忘记转换
    console.log(e)
    if (e.key === 'Enter') {
        // || !e.target.valve.trim()
        if (e.target.value === '') {
            e.target.value = ''
            useCount.innerHTML = 0
            return alert("内容不能为空！")
        }
        // e.target.valve.trim()
        console.log('按下了回车键')
        var item =
        {
            name: e.target.value,
            complete: 'false'
        }
        list.unshift(item)
        num++;
        localStorage.setItem('num', JSON.stringify(num))
        document.querySelector('.active-num').innerHTML = num
        localStorage.setItem('data', JSON.stringify(list))
        list = getLocalData()
        // render(list);
        var oLi = document.createElement("li");//增加一个li新节点
        oLi.innerHTML =
            `<li class="itemComplete">
                <span class="iconComplete"></span>
                <input class="btnName" value="${item.name}">
                <div class="btnGroup">
                    <button class="btnDelete"></button>
                </div>
            </li>`
        var ul = document.querySelector(".todo-list")
        ul.insertBefore(oLi, ul.children[0])
        e.target.value = ''
        useCount.innerHTML = 0
        render(list)
        //点击圆圈修改样式
        let icon = document.querySelectorAll('.iconComplete')
        let text = document.querySelectorAll('.btnName')
        for (let i = 0; i < icon.length; i++)
            icon[i].addEventListener('click', function () {
                if (icon[i].className.includes('iconCompleteActive')) {
                    icon[i].classList.remove('iconCompleteActive');
                    icon[i].classList.remove('iconCompleteActive:before');
                    text[i].classList.remove('iconText');
                    list[i].complete = 'false'
                    console.log(list[i].complete);
                    num++;
                    console.log(num);
                    localStorage.setItem('num', JSON.stringify(num))
                    document.querySelector('.active-num').innerHTML = num
                }
                else {
                    icon[i].classList.add('iconCompleteActive');
                    icon[i].classList.add('iconCompleteActive:before');
                    text[i].classList.add('iconText');
                    list[i].complete = 'true'
                    console.log(list[i].complete);
                    num--;
                    console.log(num);
                    localStorage.setItem('num', JSON.stringify(num))
                    document.querySelector('.active-num').innerHTML = num
                }
                localStorage.setItem('data', JSON.stringify(list))
            })
        //搜索框对应高亮
        let ARR = list.map(val => {
            return val.name
        })
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
        //用户删除某一条笔记
        let li = document.querySelectorAll('.itemComplete')
        let Delete = document.querySelectorAll('.btnDelete')
        for (let i = 0; i < Delete.length; i++) {
            // li = document.querySelectorAll('.itemComplete')
            // Delete = document.querySelectorAll('.btnDelete')
            Delete[i].addEventListener('click', function (e) {
                console.log(11);
                num--;
                localStorage.setItem('num', JSON.stringify(num))
                document.querySelector('.active-num').innerHTML = num
                console.log(li[i]);
                // console.log(li[i].parentNode);
                li[i].remove()
                list.splice(i, 1)
                // list.splice(--i, 1)
                // localStorage.setItem('data', JSON.stringify(list))
                // console.log(list.splice(i, 1));
                localStorage.setItem('data', JSON.stringify(list))
            })
        }
        //用户修改某一条之前的笔记
        let change = document.querySelectorAll('.todo-list .btnName')
        for (let i = 0; i < change.length; i++) {
            console.log(change[i]);
            change[i].addEventListener('keyup', function (e) {
                if (e.key === 'Enter') {
                    // e.target.valve.trim()
                    if (e.target.value === '') {
                        e.target.value = ''
                        useCount.innerHTML = 0
                        return alert("内容不能为空！");
                    }
                    console.log('按下了回车键')
                    var item =
                    {
                        name: e.target.value,
                        complete: list[i].complete
                    }
                    list[i] = item
                    localStorage.setItem('data', JSON.stringify(list))
                    change[i].value = e.target.value
                }
            })
        }
    }
})

Delete()
Change()
click()
search()
//用户删除某一条笔记
function Delete() {
    let li = document.querySelectorAll('.itemComplete')
    let Delete = document.querySelectorAll('.btnDelete')
    for (let i = 0; i < Delete.length; i++) {
        Delete[i].addEventListener('click', function (e) {
            console.log(11);
            num--;
            localStorage.setItem('num', JSON.stringify(num))
            document.querySelector('.active-num').innerHTML = num
            console.log(li[i]);
            // console.log(li[i].parentNode);
            li[i].remove()
            list.splice(i, 1)
            // localStorage.setItem('data', JSON.stringify(list))
            // console.log(list.splice(i, 1));
            localStorage.setItem('data', JSON.stringify(list))
        })
    }
}
//用户修改某一条之前的笔记
function Change() {
    let change = document.querySelectorAll('.todo-list .btnName')
    for (let i = 0; i < change.length; i++) {
        console.log(change[i]);
        change[i].addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                // e.target.valve.trim()
                if (e.target.value === '') {
                    e.target.value = ''
                    useCount.innerHTML = 0
                    return alert("内容不能为空！");
                }
                console.log('按下了回车键')
                var item =
                {
                    name: e.target.value,
                    complete: list[i].complete
                }
                list[i] = item
                localStorage.setItem('data', JSON.stringify(list))
                change[i].value = e.target.value
            }
        })
    }
}
//遍历伪数组
function render(list) {
    var html = '';
    list.forEach((item, index, list) => {
        if (item.complete === 'false') {
            html = html +
                `<li class="itemComplete">
                    <span class="iconComplete"></span>
                    <input class="btnName" value="${item.name}">
                    <div class="btnGroup">
                    <button class="btnDelete"></button>
                    </div>
                </li>`
        }
        else {
            html = html +
                `<li class="itemComplete">
                <span class="iconComplete iconCompleteActive iconCompleteActive:before"></span>
                <input class="btnName iconText" value="${item.name}">
                <div class="btnGroup">
                    <button class="btnDelete"></button>
                </div>
                </li>`
        }
    })
    // console.log(html);
    document.querySelector('.todo-list').innerHTML = html
}
//点击圆圈修改样式
function click() {
    let icon = document.querySelectorAll('.iconComplete')
    let text = document.querySelectorAll('.btnName')
    for (let i = 0; i < icon.length; i++)
        icon[i].addEventListener('click', function () {
            if (icon[i].className.includes('iconCompleteActive')) {
                icon[i].classList.remove('iconCompleteActive');
                icon[i].classList.remove('iconCompleteActive:before');
                text[i].classList.remove('iconText');
                list[i].complete = 'false'
                console.log(list[i].complete);
                num++;
                console.log(num);
                localStorage.setItem('num', JSON.stringify(num))
                document.querySelector('.active-num').innerHTML = num
            }
            else {
                icon[i].classList.add('iconCompleteActive');
                icon[i].classList.add('iconCompleteActive:before');
                text[i].classList.add('iconText');
                list[i].complete = 'true'
                console.log(list[i].complete);
                num--;
                console.log(num);
                localStorage.setItem('num', JSON.stringify(num))
                document.querySelector('.active-num').innerHTML = num
            }
            localStorage.setItem('data', JSON.stringify(list))
        })
}
//搜索框对应高亮
function search() {
    let ARR = list.map(val => {
        return val.name
    })
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