const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {email, password };


    const response = await fetch("https://full-stack-training-n6dh.onrender.com/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });


        const res = await response.json();
        console.log(res);


        localStorage.setItem("token",res.token);
    });

    
