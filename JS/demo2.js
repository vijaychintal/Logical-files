// let theme = ()=>
// {
// document.body.style.background="black"
// document.body.style.Color="white"
// let a=document.getElementById("butten").textContent="ligth them"
// }
let but = document.getElementById('butten')
let theme = () => {
    if(but.textContent=='dark them')
    {

    document.body.style.background = "black"
    document.body.style.color ="white"
    let a = document.getElementById("butten").textContent = "ligth them"
    }else{
        document.body.style.background = "white"
    document.body.style.color = "black"
    let a = document.getElementById("butten").textContent = "dark them"
    }
}
