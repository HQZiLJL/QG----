import "../css/head.css";
console.log("head");
let users = document.querySelector(".users");
let manager = document.querySelector(".manager");
users.addEventListener("click", () => {
    if (users.checked === true) {
        manager.checked = false;
        let leap = setInterval(function () {
            window.location.href = "../dist/login-users.html";
            clearInterval(leap)
        }, 800)
    }
})
manager.addEventListener("click", () => {
    if (manager.checked === true) {
        users.checked = false;
        let leap = setInterval(function () {
            window.location.href = "../dist/login-manager.html";
            clearInterval(leap)
        }, 800)
    }
})