const token = localStorage.getItem("token");

async function fetchCart() {
    const response = await fetch("http://localhost:8080/api/cart", {
        method: "GET",
        headers: {
            "Authorization": token
        }
    });

    const result = await response.json();
    if (result.cart && result.cart.products.length > 0) {
        renderCart(result.cart.products);
    } else {
        document.getElementById("cartItems").innerHTML = "<p>Your cart is empty.</p>";
    }
}

function renderCart(products) {
    const cartContainer = document.getElementById("cartItems");
    cartContainer.innerHTML = "";

    products.forEach((item) => {
        const product = item.productId;

        const div = document.createElement("div");
        div.className = "cart-product";

        const img = document.createElement("img");
        img.src = product.image;

        const title = document.createElement("h3");
        title.innerText = product.title;

        const quantity = document.createElement("p");
        quantity.innerText = `Quantity: ${item.quantity}`;

        const price = document.createElement("p");
        price.innerText = `Price: $${product.price}`;

        const removeBtn = document.createElement("button");
        removeBtn.innerText = "Remove";
        removeBtn.addEventListener("click", () => {
            removeFromCart(product._id);
        });

        div.append(img, title, quantity, price, removeBtn);
        cartContainer.append(div);
    });
}

async function removeFromCart(productId) {
    const response = await fetch(`http://localhost:8080/api/cart/remove/${productId}`, {
        method: "DELETE",
        headers: {
            "Authorization": token
        }
    });

    const result = await response.json();
    Toastify({
        text: result.msg,
        className: "info",
        duration: 3000,
        gravity: "top",
        position: "center",
        style: {
            background: "linear-gradient(to right, #ff416c, #ff4b2b)",
        }
    }).showToast();
    fetchCart();
}

fetchCart();
