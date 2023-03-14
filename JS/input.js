
let header = document.getElementById("title")
let data = document.getElementById("data")
//console.log(data.value);
let submit = () => {
    //      header.textContent=data.value 
    //    // header.style.backgroundColor=data.value
    //     header.style.color="white"
    //     document.body.style.backgroundColor=data.value
    if (data.value >= 2023) {
header.textContent="NOT VALID AGE :WRONG    "
header.style.background="RED"
    } else {
        header.textContent += 2023 - data.value
        header.style.background="GREEN"
    }
}