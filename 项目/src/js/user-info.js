// export const addFn = (a, b) => a + b;
import "../css/public.css";
// import "../css/personal.css";
import "../css/user-info.css";
console.log('user-info');
//消除后退的所有动作。包括 键盘、鼠标手势等产生的后退动作。，用户登录到系统中后，浏览器回退按钮失效，只能点击退出按钮退出系统！
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
})
//监听鼠标经过菜单栏
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav a")
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", (e) => {
        nav.classList.remove("nav-user-info")
    })
    a[i].addEventListener("mouseleave", (e) => {
        nav.classList.add("nav-user-info")
    })
}
