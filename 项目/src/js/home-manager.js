import "../css/public.css";
import "../css/home.css";
// import "../css/personal.css";
console.log('manager');
history.pushState(null, null, document.URL);
window.addEventListener('popstate', function () {
    history.pushState(null, null, document.URL);
})
const nav = document.querySelector(".nav");
const a = document.querySelectorAll(".nav a")
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("mouseenter", (e) => {
        nav.classList.remove("nav-home")
    })
    a[i].addEventListener("mouseleave", (e) => {
        nav.classList.add("nav-home")
    })
}