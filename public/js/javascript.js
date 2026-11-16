let darkMode = document.querySelector(".darkMode")
let hero =document.querySelector(".hero")
const bgIcone =document.querySelector(".bgIcone")
const affichage =document.getElementById("affichage")
const validation=document.getElementById("validation")
let togglePassworddeux=document.getElementById("togglePassworddeux")
let affichagedeux =document.getElementById("affichagedeux")

let password =document.getElementById("password")
let togglePassword=document.getElementById("togglePassword")

function verificationInput() {
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
   
}
verificationInput()

