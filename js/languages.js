"use strict"

// ******* Multilingual *******


let language = document.querySelector(".language"),
     link = document.querySelectorAll(".lang"),
     logo = document.querySelector(".logo"),
     login = document.querySelector(".login");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          language.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          logo.textContent = languageData[attr].logo
          login.textContent = languageData[attr].login
     })
})
// -------- Language DATA -----------
let languageData = {
     polish: {
          logo: "II Wojna Światowa w filmach",
          login: "Logowanie / Rejestracja",
        },
        english: {
            logo: "World War II Movies",
            login: "Login / Signup",
     }
}
//---------------------------------------END Language DATA