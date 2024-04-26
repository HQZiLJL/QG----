import "../css/login.css";
let username = ''
let password = ''

let input = document.querySelectorAll("input")
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("mouseenter", () => {
        input[i].classList.add("focus")
    })
    input[i].addEventListener("mouseleave", (e) => {
        if (e.target.value === '')
            input[i].classList.remove("focus")
    })
}

let signup = document.querySelector('#signUp')
signup.addEventListener("click", (e) => {
    document.querySelector(".container").classList.add('change')
})

let signin = document.querySelector("#signIn")
signin.addEventListener("click", (e) => {
    document.querySelector(".container").classList.remove("change")
})

let input1 = document.querySelector("#username")
input1.addEventListener("mouseleave", (e) => {
    username = e.target.value
})
let input2 = document.querySelector("#password")
input2.addEventListener("mouseleave", (e) => {
    password = e.target.value
})
let signIn = document.querySelector(".signin")
signIn.addEventListener("click", (e) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://127.0.0.1:3456/dist/home-users.html")
    xhr.addEventListener("loadend", () => {
        console.log(xhr.response);
        const { msg, status } = JSON.parse(xhr.response);
        console.log(msg === 1 && status === 200);
        if (msg === 1 && status === 200) {
            // alert("1")
            window.location.href = '../dist/home-users.html';
            login();
        }
        else {
            username = password = '1'
            alert('输个对的帐号密码？');
            input1.value = ''
            input2.value = ''
        }
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    let user = {
        username: encodeURI(username),
        password: encodeURI(password)
    }
    let User = JSON.stringify(user)
    xhr.send(User)
})
login();
function login() {
    //勾上就是用cookie进行记录用户名和密码
    //要使用cookie
    // console.log(document.getElementById("username").value);
    document.cookie = "username=" + document.getElementById("username").value;
    document.cookie = "password=" + document.getElementById("password").value;
    input1.value = ''
    input2.value = ''
}

let input3 = document.querySelector("#usernam")
input3.addEventListener("mouseleave", (e) => {
    username = e.target.value
})
let input4 = document.querySelector("#passwor")
input4.addEventListener("mouseleave", (e) => {
    password = e.target.value
})
let signUp = document.querySelector(".signup")
signUp.addEventListener("click", (e) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://127.0.0.1:3456/dist/home-users.html")
    xhr.addEventListener("loadend", () => {
        const { msg, status } = JSON.parse(xhr.response);
        console.log(msg === 1 && status === 200);
        if (msg === -1 && status === -1) {
            alert("该用户名已存在！");
            input1.value = ''
            input2.value = ''
        }
        else if (msg === 1 && status === 200) {
            alert("欢迎加入QG大家庭~")
            window.location.href = '../dist/login-users.html';
            input1.value = ''
            input2.value = ''
        }
    })

    xhr.setRequestHeader('Content-Type', 'application/json')
    let user = {
        username: encodeURI(username),
        password: encodeURI(password)
    }
    let User = JSON.stringify(user)
    console.log(User);
    // xhr.send(User)
    input1.value = ''
    input2.value = ''
    xhr.send(User);
})

let prompt = document.querySelector(".prompt")
prompt.addEventListener("click", () => {
    alert("用户名: HQZhen12     密码: 123456")
})
// export { username };