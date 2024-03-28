const errordiv = document.querySelector(".error");
const pass = document.querySelector("#password");
const confirmPass = document.querySelector("#Confirmpassword");
const create = document.querySelector(".create-acc")

create.addEventListener('click',()=>{
    if(pass.value !== confirmPass.value){
        errordiv.textContent = "Password doesn't match!!"
    }
})