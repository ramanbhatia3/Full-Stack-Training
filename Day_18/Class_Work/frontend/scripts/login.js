const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        Toastify({
            text: "Passwords do not match!",
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)",
            }
        }).showToast();
        return;
    }

    const data = { username, email, password };

    try {
        const response = await fetch("http://localhost:8080/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();
        console.log(res);

        Toastify({
            text: `${res.msg}`,
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            }
        }).showToast();
    } catch (error) {
        console.error("Login Error:", error);
        Toastify({
            text: "Something went wrong. Please try again.",
            style: {
                background: "red"
            }
        }).showToast();
    }
});
