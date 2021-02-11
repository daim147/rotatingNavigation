const open = document.getElementById("open");
const close = document.getElementById("close");
const conatainer = document.querySelector(".conatiner");
   
open.addEventListener("click", () =>{
conatainer.classList.add("show");
})

close.addEventListener("click", () =>{
    conatainer.classList.remove("show");
    })
    
