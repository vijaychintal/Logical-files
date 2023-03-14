// let save=document.getElementById('save')

// const s= async() => {

//     let name=document.getElementById('name').value;
//     let pass=document.getElementById('pass').value;
//     let pass=document.getElementById('pass').value;
// let response=await fetch('http://localhost:8080/get ');
// let response1=await fetch(' http://localhost:8080/save',{
//     method:'POST',
//     headers:{
//         'Accept':'application/json',
//         'Content-type':'application/json'

//     },
//     body:JSON.stringify({
//         name:name,
//         pasword:pass
//     })

// })

// }
// save.addEventListener('click',s)



   function hi() {
        console.log('helo');
    
   const s= fetch("http://localhost:8080/get")
        .then((res) => res.json())
        .then((data) =>{
           return data;
        })
        .catch((error) => console.log("somthing wen wrong"))
    

    }
    hi();