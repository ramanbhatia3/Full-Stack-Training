const form = document.getElementById("form");

form.addEventListener("submit", async(event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const age = document.getElementById("age").value;

    const data = {name,email,password,phoneNumber,age};

    // console.log(data);

    const response = await fetch("https://full-stack-training-n6dh.onrender.com/api/user/signup",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)

        
    })

    const res = await response.json();
    console.log(res);
    
    Toastify({
  text: `${res.msg}`,
  className: "info",
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  }
}).showToast();
})