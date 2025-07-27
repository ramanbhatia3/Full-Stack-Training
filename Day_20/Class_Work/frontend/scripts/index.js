function home(){
    window.location.href = "index.html"
}

function login() {
    window.location.href = "login.html"
}

function signup() {
    window.location.href = "signup.html"
}

function products() {
    window.location.href = "products.html"
}


function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}
