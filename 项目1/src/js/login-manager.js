import "../css/login.css";
let manager = ''
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
signup.addEventListener("click", () => {
    // console.log(11);
    document.querySelector(".container").classList.add('change')
})

let signin = document.querySelector("#signIn")
signin.addEventListener("click", () => {
    // console.log(12);
    document.querySelector(".container").classList.remove("change")
})

let input1 = document.querySelector("#manager")
input1.addEventListener("mouseleave", (e) => {
    // console.log(e.target.value);
    manager = e.target.value
})
let input2 = document.querySelector("#password")
input2.addEventListener("mouseleave", (e) => {
    // console.log(e.target.value);
    password = e.target.value
})
// let signIn = document.querySelector(".signin")
// signIn.addEventListener("click", (e) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open("POST", "http://119.91.210.79:3000/login")
//     xhr.addEventListener("loadend", () => {
//         const { msg, status } = JSON.parse(xhr.response)
//         console.log(xhr.response);
//         // console.log({ msg, status });
//         if (msg === "登录成功！" && status === 1) {
//             // alert('QGoffer等你来领喂');
//             window.location.href = '../dist/users.html';
//         }
//         else
//             alert('输个对的帐号密码？');
//         // console.log(xhr.response);
//     })
//     xhr.setRequestHeader('Content-Type', 'application/json')
//     const user = {
//         username: username,
//         password: password
//     }
//     const User = JSON.stringify(user)
//     username = password = '1'
//     console.log(username);
//     console.log(password);
//     input1.value = ''
//     input2.value = ''
//     xhr.send(User)
// })
// let input3 = document.querySelector("#manager1")
// input3.addEventListener("mouseleave", (e) => {
//     username = e.target.value
// })
// let input4 = document.querySelector("#password")
// input4.addEventListener("mouseleave", (e) => {
//     password = e.target.value
// })
// let signUp = document.querySelector(".signup")
// signUp.addEventListener("click", (e) => {
//     console.log(username);
//     console.log(password);
//     console.log(username == password == '1');
//     if (!username == '1' && !password == '1')
//         alert('注册一下呗~');
//     else
//         alert('注册成功！');
//     input3.value = ''
//     input4.value = ''
// })


let signIn = document.querySelector(".signin")
signIn.addEventListener("click", (e) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://127.0.0.1:3456/dist/home-manager.html")
    xhr.addEventListener("loadend", () => {
        console.log(JSON.parse(xhr.response));
        const { msg, status } = JSON.parse(xhr.response);
        console.log(msg === 1 && status === 200);
        if (msg === 1 && status === 200) {
            alert("1")
            window.location.href = '../dist/home-manager.html';
            login();
        }
        else {
            manager = password = '1'
            alert('输个对的帐号密码？');
            input1.value = ''
            input2.value = ''
        }
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    const user = {
        manager: encodeURI(manager),
        password: encodeURI(password)
    }
    const User = JSON.stringify(user)
    xhr.send(User)
})
login();
function login() {
    //勾上就是用cookie进行记录用户名和密码
    //要使用cookie
    // console.log(document.getElementById("username").value);
    document.cookie = "manager=" + document.getElementById("manager").value;
    document.cookie = "password=" + document.getElementById("password").value;
    manager = password = '1'
    input1.value = ''
    input2.value = ''
}

let input3 = document.querySelector("#manager1")
input3.addEventListener("mouseleave", (e) => {
    manager = e.target.value
})
let input4 = document.querySelector("#password1")
input4.addEventListener("mouseleave", (e) => {
    password = e.target.value
})
let signUp = document.querySelector(".signup")
signUp.addEventListener("click", (e) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://127.0.0.1:3456/dist/home-manager.html")
    xhr.addEventListener("loadend", () => {
        // console.log(JSON.parse(xhr.response));
        const { msg, status } = JSON.parse(xhr.response);
        console.log(msg === 1 && status === 200);
        if (msg === -1 && status === -1) {
            alert("该用户名已存在！");
            input1.value = ''
            input2.value = ''
        }
        else if (msg === 1 && status === 200) {
            alert("欢迎加入QG大家庭~")
            window.location.href = '../dist/login-manager.html';
            input1.value = ''
            input2.value = ''
        }
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    const manage = {
        manager: encodeURI(manager),
        password: encodeURI(password)
    }
    const Manager = JSON.stringify(manage)
    // xhr.send(User)
    xhr.send(Manager);
})
let prompt = document.querySelector(".prompt")
prompt.addEventListener("click", () => {
    alert("用户名: qgqd     密码: qgqd")
})