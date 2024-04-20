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
signup.addEventListener("click", () => {
    // console.log(11);
    document.querySelector(".container").classList.add('change')
})

let signin = document.querySelector("#signIn")
signin.addEventListener("click", () => {
    // console.log(12);
    document.querySelector(".container").classList.remove("change")
})

let input1 = document.querySelector("#inputone")
input1.addEventListener("mouseleave", (e) => {
    // console.log(e.target.value);
    username = e.target.value
})
let input2 = document.querySelector("#inputtwo")
input2.addEventListener("mouseleave", (e) => {
    // console.log(e.target.value);
    password = e.target.value
})
let signIn = document.querySelector(".signin")
signIn.addEventListener("click", (e) => {
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://119.91.210.79:3000/login")
    xhr.addEventListener("loadend", () => {
        const { msg, status } = JSON.parse(xhr.response)
        console.log(xhr.response);
        // console.log({ msg, status });
        if (msg === "登录成功！" && status === 1) {
            // alert('QGoffer等你来领喂');
            window.location.href = '../dist/users.html';
        }
        else
            alert('输个对的帐号密码？');
        // console.log(xhr.response);
    })
    xhr.setRequestHeader('Content-Type', 'application/json')
    const user = {
        username: username,
        password: password
    }
    const User = JSON.stringify(user)
    username = password = '1'
    console.log(username);
    console.log(password);
    input1.value = ''
    input2.value = ''
    xhr.send(User)
})
let input3 = document.querySelector("#inputthree")
input3.addEventListener("mouseleave", (e) => {
    username = e.target.value
})
let input4 = document.querySelector("#inputfour")
input4.addEventListener("mouseleave", (e) => {
    password = e.target.value
})
let signUp = document.querySelector(".signup")
signUp.addEventListener("click", (e) => {
    console.log(username);
    console.log(password);
    console.log(username == password == '1');
    if (!username == '1' && !password == '1')
        alert('注册一下呗~');
    else
        alert('注册成功！');
    input3.value = ''
    input4.value = ''
})
let prompt = document.querySelector(".prompt")
prompt.addEventListener("click", () => {
    alert("用户名: qgstudio     密码: qgstudio")
})