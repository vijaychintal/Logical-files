let emil = document.getElementById('email')//input tag
let password = document.getElementById('password')
let butten = document.getElementById('btn') //btn tag

butten.addEventListener('click', submit)

function submit(x) {
    x.preventDefault();  //to prevent reloading
    if (emil.value == "vijay@gmail.com" && password.value == "123") {
        window.location.href = "bms.html"
    } else {
        alert("wrong password")
    }
}