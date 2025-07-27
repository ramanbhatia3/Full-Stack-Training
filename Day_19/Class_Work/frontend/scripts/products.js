const form = document.getElementById("form");

form.addEventListener("submit",async (event)=>{
    event.preventDefault();

    const title = document.getElementById("title").value;
    const brand = document.getElementById("brand").value;
    const image = document.getElementById("image").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const rating = document.getElementById("rating").value;
    const category = document.getElementById("category").value;

    const data = {
        title,brand,image,price,description,rating,category
    };


    const token = localStorage.getItem("token");

    const response = await fetch("https://full-stack-training-n6dh.onrender.com/api/product/create-product", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token",

            },
            body: JSON.stringify(data)
        });

        const res = await response.json();
        console.log(res);
        
})

const getData = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("https://full-stack-training-n6dh.onrender.com/api/product/get-product", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token",

            },
            body: JSON.stringify(data)
        });
        const res = await response.json();
        console.log(res);
}