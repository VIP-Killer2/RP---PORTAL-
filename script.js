// 🔐 Реєстрація
function register() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let repeat = document.getElementById("repeat").value;
    let msg = document.getElementById("msg");

    if (!username || !password) {
        msg.innerText = "Заповніть всі поля";
        return;
    }

    if (password !== repeat) {
        msg.innerText = "Паролі не співпадають";
        return;
    }

    let user = {
        username: username,
        password: password,
        rank: "Кадет",
        car: "Немає"
    };

    localStorage.setItem("user", JSON.stringify(user));

    msg.innerText = "Успішна реєстрація!";

    setTimeout(() => {
        window.location = "login.html";
    }, 1000);
}


// 🔐 Вхід
function login() {
    let username = document.getElementById("loginUser").value;
    let password = document.getElementById("loginPass").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Спочатку зареєструйся");
        return;
    }

    if (username === user.username && password === user.password) {
        localStorage.setItem("logged", "true");
        window.location.href = "dashboard.html";
    } else {
        alert("Невірний логін або пароль");
    }
}
// 📄 Завантаження профілю
window.onload = function () {
    let user = JSON.parse(localStorage.getItem("user"));

    if (user && document.getElementById("name")) {
        document.getElementById("name").innerText = user.username;
        document.getElementById("rank").innerText = user.rank;
        document.getElementById("car").innerText = user.car;
    }
};


// 🚪 Вихід
function logout() {
    localStorage.removeItem("logged");
    window.location = "login.html";
}
// 📄 Перехід між сторінками
function openPage(page) {
    window.location = page;
}
