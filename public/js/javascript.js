let darkMode = document.querySelector(".darkMode")
let hero =document.querySelector(".hero")
const bgIcone =document.querySelector(".bgIcone")
const affichage =document.getElementById("affichage")

let password =document.getElementById("password")
let togglePassword=document.getElementById("togglePassword")
darkMode.addEventListener("click",() => {

    if (hero.style.background==="white") {
        hero.style.background="#0F172A"
        darkMode.innerHTML="off"
        hero.classList.add("text-white")
        bgIcone.style.background="white"
        bgIcone.style.padding="1rem"
        bgIcone.style.width="150px"
        bgIcone.style.borderRadius="1rem"

    }else{
        hero.classList.remove("text-white")
        hero.style.background="white"
        darkMode.innerHTML="on"
    }
})

togglePassword.addEventListener("click",() =>{
    if (password.type ==="password") {
        password.type="text"
        togglePassword.classList.replace("fa-eye" ,"fa-eye-slash")
    }else{
        password.type="password"
        togglePassword.classList.replace("fa-eye-slash","fa-eye")
    }
})
password.addEventListener("input",() =>{
    let refyPassword =password.value.length

    if (refyPassword  > 0 && refyPassword < 4) {
        affichage.innerHTML = "faible"
        affichage.style.color="red"
        password.style.borderColor="red"
    }else if (refyPassword >=4 && refyPassword <6 ) {
        password.style.borderColor="yellow"
        affichage.style.color="yellow"
        affichage.innerHTML ="moyenne"
    }else if (refyPassword >=6 ) {
        password.style.borderColor="green"
        affichage.innerHTML ="forte"
        affichage.style.color="green"
    }else{
         password.style.borderColor=""
        affichage.innerHTML=""
    }
})

