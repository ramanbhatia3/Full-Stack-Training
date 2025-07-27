function home(){
    window.location.href = "index.html"
}

function login(){
    window.location.href="login.html"
}

function signup(){
    window.location.href="signup.html"
}

function products(){
    window.location.href="products.html"
}



const form = document.getElementById("form");

form.addEventListener("submit", async(event)=>{
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
        email, password
    }

    const response = await fetch("http://localhost:8080/api/user/login", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

    const res = await response.json();

    console.log(res);
    Toastify({
        text: `${res.msg}`,
        className: "info",
        duration: 5000,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();

    // console.log(res)

    localStorage.setItem("token", res.token);
    localStorage.setItem("user", JSON.stringify(res.user));

    window.location.href = "products.html"
});

