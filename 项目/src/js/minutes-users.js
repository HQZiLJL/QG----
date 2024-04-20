// export const addFn = (a, b) => a + b;
import "../css/public.css";
import "../css/minutes-users.css";
console.log('minutes-users');
//监听鼠标经过菜单栏
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav a")
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", (e) => {
        nav.classList.remove("nav-minutes")
    })
    a[i].addEventListener("mouseleave", (e) => {
        nav.classList.add("nav-minutes")
    })
}
