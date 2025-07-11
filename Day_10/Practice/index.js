
function addToCart(ele){
    localStorage.setItem("cartData",JSON.stringify(ele))
}

function getDataFromStorage(){
    let data = JSON.parse(localStorage.getItem("cartData"))
    console.log(data);
}

function cartPage(){
    window.location = "cart.html"
}