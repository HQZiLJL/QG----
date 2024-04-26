// export const addFn = (a, b) => a + b;
import "../css/public.css";
import "../css/head12.css";
import "../css/detail-users.css";
console.log('detail-users');
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

//会议类型
let Work = ''
let Relax = ''
let work = document.querySelector("#work");
let relax = document.querySelector("#relax")
work.addEventListener("click", () => {
    if (work.checked === true) {
        Work = '1'
        Relax = '0'
    }
    console.log(Work);
})
relax.addEventListener("click", () => {
    if (relax.checked === true) {
        Relax = '1'
        Work = '0'
    }
    console.log(relax.value);
})

//添加标签（只能选三个）
let abc = 0;
let sign = document.getElementsByName("sign")
for (let i = 0; i < sign.length; i++) {
    sign[i].addEventListener("click", (e) => {
        console.log(sign[i].checked === true);
        if (sign[i].checked === true) {
            abc++;
        }
        if (sign[i].checked === false) {
            abc--;
        }
        if (abc > 3) {
            alert("会议标签只能选三个噢~")
            sign[i].checked = false
            abc--;
        }
    })
}
//获取数据 
let Name = ''
let Topic = ''
let Class = ''
let Time = ''
let File1 = ''
let File2 = ''
let name = document.querySelector("#name")
let topic = document.querySelector("#topic")
let file1 = document.querySelector("#file1")
let file2 = document.querySelector("#file2")
let time = document.querySelector("#time")
let class_ = document.querySelector("#class")
//图片预览
let Img = document.querySelector("#Img");
file1.addEventListener("change", (e) => {
    let fileReader = new FileReader()
    fileReader.readAsDataURL(e.target.files[0])
    fileReader.onload = (e) => {
        console.log(e.target)
        Img.src = e.target.result
        console.log(Img.src);
        File1 = Img.src
        console.log(File1);
    }
})
//取消上传
let cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    file1.value = ''
    Img.src = ''
})
//打开txt文件
file2.addEventListener("change", (e) => {
    let fileReader = new FileReader()
    // let file = file2.file[0]
    console.log(e.target.files[0]);
    fileReader.readAsText(e.target.files[0], "utf-8");
    // fileReader.readAsDataURL(file2.value)
    fileReader.onload = (e) => {
        let content = document.querySelector("#content");
        console.log(e.target)
        content.value = e.target.result
        console.log(content.value);
        File2 = content.value
        console.log(File2);
    }
});

name.addEventListener("mouseleave", (e) => {
    Name = e.target.value
})
topic.addEventListener("mouseleave", (e) => {
    Topic = e.target.value
})
file1.addEventListener("change", (e) => {
    // console.log(e.target.files[0]);
    // const fd = new FormData()
    // fd.append("Img", e.target.files[0])
    // File1 = Img.src
    // console.log(Img.src);
})
file2.addEventListener("change", (e) => {
    // console.log(e.target.files[0]);
    // const fd = new FormData()
    // fd.append("Img", e.target.files[0])
    // File2 = content.value
})
time.addEventListener("mouseleave", (e) => {
    Time = e.target.value
})
class_.addEventListener("mouseleave", (e) => {
    Class = e.target.value
})

//表单验证
function validateForm() {
    console.log(name.value);
    if (name.value == "") {
        name.classList.add('error');
        name.nextElementSibling.textContent = "请输入姓名";
    }
    else {
        name.classList.remove('error');
        name.nextElementSibling.textContent = "";
    }
    if (topic.value == "") {
        topic.classList.add('error');
        topic.nextElementSibling.textContent = "请输入会议主题";
    }
    else {
        topic.classList.remove('error');
        topic.nextElementSibling.textContent = "";
    }
    if (class_.value == "") {
        class_.classList.add('error');
        class_.nextElementSibling.textContent = "请输入组别";
    }
    else {
        class_.classList.remove('error');
        class_.nextElementSibling.textContent = "";
    }
    if (time.value == "") {
        time.classList.add('error');
        time.nextElementSibling.textContent = "请输入会议时间";
    }
    else {
        time.classList.remove('error');
        time.nextElementSibling.textContent = "";
    }
}
var btnUpload = document.querySelector('#btnUpload')
//2.为按钮添加click事件监听
btnUpload.addEventListener('click', function (e) {
    e.preventDefault();
    validateForm();
    //3.获取到选择的文件列表
    var file1 = document.querySelector('#file1').files
    var file2 = document.querySelector('#file1').files
    if (name.value !== '' && topic.value !== '' && class_.value !== '' && time.value !== '') {
        if (file1.length <= 0 || file2.length <= 0) {
            return alert('请选择要上传的文件！')
        }
        alert("上传中~");
    }
})
var btnDraft = document.querySelector('#btnDraft')
//2.为按钮添加click事件监听
btnDraft.addEventListener('click', function () {

    //3.获取到选择的文件列表
    var file1 = document.querySelector('#file1').files
    var file2 = document.querySelector('#file1').files
    if (file1.length <= 0 || file2.length <= 0) {
        return alert('请选择要上传的文件！')
    }
    alert("保存中~");
})

document.addEventListener("DOMContentLoaded", (e) => {
    console.log(2);
    let xhr = new XMLHttpRequest();
    qs = `http://127.0.0.1:3456/dist/detail-users.html?username=${Name}&topic=${Topic}`;
    xhr.open("GET", qs)
    xhr.addEventListener("loadend", () => {
        console.log(3);
    })
    xhr.send();
})


// btnUpload.addEventListener("click", (e) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open("POST", "http://127.0.0.1:3456/api/formdata")
//     xhr.addEventListener("loadend", () => {
//         console.log(xhr.response);
//         const { msg, status } = JSON.parse(xhr.response);
//         console.log(msg === 1 && status === 200);
//         if (msg !== -1 && status !== -1) {
//             Name = Topic = File1 = File2 = Time = Class = ''
//             window.location.href = '../dist/mine.html';
//         }
//         else if (msg === -1 && status === -1) {
//             alert('请输入正确的表单信息。');
//             Name = Topic = File1 = File2 = Time = Class = ''
//         }
//     })
//     xhr.setRequestHeader('Content-Type', 'application/json')
//     let Sign = ''
//     for (let i = 0; i < sign.length; i++) {
//         if (sign[i].checked === true) {
//             Sign = `${sign[i].value},`;
//             // Sign = Sign.replace('', Sign + sign[i].value)
//             // Sign.push(sign[i].value);
//             console.log(Sign);
//         }
//     }
//     let fd = {
//         Sign: Sign,
//         Work: Work,
//         Relax: Relax,
//         Time: encodeURI(Time),
//         Name: Name,
//         Topic: Topic,
//         Class: Class,
//         File1: File1,
//         File2: File2,
//         Status: '1',
//     }
//     let Fd = JSON.stringify(fd)
//     console.log(Fd);
//     xhr.send(Fd)
// })

// //草稿箱
// btnDraft.addEventListener("click", (e) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open("POST", "http://127.0.0.1:3456/api/draft")
//     xhr.addEventListener("loadend", () => {
//         console.log(JSON.parse(xhr.response));
//         const { msg, status } = JSON.parse(xhr.response);
//         console.log(msg === 1 && status === 200);
//         if (msg !== -1 && status !== -1) {
//             // alert("已保存至草稿箱")
//             Name = Topic = File1 = File2 = Time = Class = ''
//             window.location.href = '../dist/draft.html';
//         }
//         else if (msg === -1 && status === -1) {
//             alert('请输入正确的表单信息。');
//             Name = Topic = File1 = File2 = Time = Class = ''
//         }
//     })
//     xhr.setRequestHeader('Content-Type', 'application/json')
//     let Sign = ''
//     for (let i = 0; i < sign.length; i++) {
//         if (sign[i].checked === true) {
//             Sign = `${sign[i].value},`;
//             console.log(Sign);
//         }
//     }
//     let fd = {
//         Sign: Sign,
//         Work: Work,
//         Relax: Relax,
//         Time: encodeURI(Time),
//         Name: Name,
//         Topic: Topic,
//         Class: Class,
//         File1: File1,
//         File2: File2,
//         Status: '1',
//     }
//     let Fd = JSON.stringify(fd)
//     console.log(Fd);
//     xhr.send(Fd)
// })
