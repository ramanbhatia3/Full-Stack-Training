function home() {
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


const form = document.getElementById("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const brand = document.getElementById("brand").value;
    const image = document.getElementById("image").value;
    const category = document.getElementById("category").value;
    const rating = document.getElementById("rating").value;
    const desc = document.getElementById("desc").value;
    const price = document.getElementById("price").value;

    const data = {
        title, brand, image, category, desc, rating, price
    };

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/api/products/create-product", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        body: JSON.stringify(data)
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
    getData()
});
const getData = async () => {
    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8080/api/products/get-products", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        }
    });

    const res = await response.json();

    console.log(res);

    renderProducts(res.data)

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
}

getData();



let searchInput = document.getElementById("search");
let sortSelect = document.getElementById("sort");
let filterSelect = document.getElementById("filter");
let productsContainer = document.getElementById("products");
let cart = JSON.parse(localStorage.getItem("CartData")) || [];

let debounceTimer;


function renderProducts(arr) {
    productsContainer.innerHTML = "";
    document.querySelector(".loader-container").style.display = "none"

    arr.forEach((el, index) => {
        let productBox = document.createElement("div");
        productBox.className = "product-box";

        let heading = document.createElement("h3");
        heading.innerText = el.category;

        let img = document.createElement("img");
        img.src = el.image;

        let title = document.createElement("p");
        title.innerText = el.title;

        let price = document.createElement("p");
        price.innerText = `Price: $${el.price}`;

        let rating = document.createElement("p");
        rating.innerText = `Rating: ${el.rating}`;

        let button = document.createElement("button");
        button.innerText = "Add to Cart";
        button.addEventListener("click", () => {
            addToCart(el);
        });

        productBox.append(heading, img, title, price, rating, button);
        productsContainer.append(productBox);
    });
}

function handleSearch() {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        let searchTerm = searchInput.value.toLowerCase();
        let filteredProducts = data.filter(product => {
            return product.name.toLowerCase().includes(searchTerm);
        });
        renderProducts(filteredProducts);
    }, 3000);
}

function handleSort() {
    let sortedProducts = [...data];
    let sortBy = sortSelect.value;

    if (sortBy === "priceLowHigh") {
        sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHighLow") {
        sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === "ratingHighLow") {
        sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "ratingLowHigh") {
        sortedProducts.sort((a, b) => a.rating - b.rating);
    }

    renderProducts(sortedProducts);
}


function handleFilter() {
    let selectedCategory = filterSelect.value;
    let filteredProducts = selectedCategory === "all"
        ? data
        : data.filter(product => product.category === selectedCategory);

    selectedCategory == "all" ? data : data.filter(product => product.category === selectedCategory);


    renderProducts(filteredProducts);
}

function addToCart(product) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == product.id) {
            return alert(`${cart[i].name} is already added in cart`);
        }
    }
    cart.push(product);
    localStorage.setItem("CartData", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    console.log("Cart:", cart);
}

searchInput.addEventListener("input", handleSearch);
sortSelect.addEventListener("change", handleSort);
filterSelect.addEventListener("change", handleFilter);

// Initial render
setTimeout(() => {
    renderProducts(data);
}, 5000)

function cartPage() {
    window.location.href = "cart.html";
}


const addButton = document.getElementById("addButton");

addButton.addEventListener("click", () => {

    const user = JSON.parse(localStorage.getItem("user"));
    const parent = document.getElementById('parent');

    if (user.role == "admin") {
        parent.style.display = "block"
    }else{
        parent.style.display = "none";
         Toastify({
        text: `You don't have access`,
        className: "info",
        duration: 5000,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        style: {
            background: "#ba3c0a",
            // color:black
        }
    }).showToast();
    }

})