// let username = document.getElementById("username").value;
// let email = document.getElementById("email").value;
// let password = document.getElementById("password").value;
// let confirmPassword = document.getElementById("confirmPassword").value;


// console.log(username);
// console.log(email);
// console.log(password);
// console.log(confirmPassword);


let form = document.getElementById("form");

//Anonymous Function/Callback *((=>{}))*


form.addEventListener("submit",()=>{
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    // console.log(typeof(password));  //to be corrected
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    console.log(username);
    // console.log(email);
    // console.log(password);
    // console.log(confirmPassword);

    // let psw = password.toString();

    if (password.length < 6) {
        return alert("Password vdda huna jruri hunda c....");
    }

    if(password != confirmPassword){
    return alert("Password does not match")
}
    
    console.log("RBIENT");

    let obj = {
    username, email, password, confirmPassword
}

console.log(obj);

    let userdata = document.getElementById("userdata");
    userdata.style.width="30%"
    userdata.style.margin="auto"
    userdata.style.padding="10px"
    userdata.style.border="2px solid gray"
    userdata.style.borderRadius="8px"
    userdata.style.marginTop="30px"
    userdata.style.textAlign="center"
    userdata.style.boxShadow="box-shadow: rgba(14, 63, 126, 0.06) 0px 0px 0px 1px, rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 2px 2px -1px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px, rgba(42, 51, 70, 0.03) 0px 10px 10px -5px, rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;"

    let h2 = document.createElement("h2");
    h2.innerText=obj.username

    let p1 = document.createElement("p");
    p1.innerText=obj.email

    let p2 = document.createElement("p");
    p2.innerText=obj.password

    let p3 = document.createElement("p");
    p3.innerText=obj.confirmPassword

    userdata.append(h2,p1,p2,p3);
    
})





// document object model - DOM

// DOM MANIPULATION
// DATABASE MANIPULATION