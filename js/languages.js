"use strict"

// ******* Multilingual *******


let language = document.querySelector(".language"),
     link = document.querySelectorAll(".lang"),
     logo = document.querySelector(".logo"),
     login = document.querySelector(".login"),
     form__title_login = document.querySelector(".form__title_login"),
     form__button = document.querySelector(".form__button"),
     forgot = document.querySelector(".forgot"),
     create = document.querySelector(".create"),
     already = document.querySelector(".already"),
     form__title_create = document.querySelector(".form__title_create");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          language.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          logo.textContent = languageData[attr].logo
          login.textContent = languageData[attr].login
          form__title_login.textContent = languageData[attr].form__title_login
          form__button.textContent = languageData[attr].form__button
          forgot.textContent = languageData[attr].forgot
          create.textContent = languageData[attr].create
          already.textContent = languageData[attr].already
          form__title_create.textContent = languageData[attr].form__title_create
     })
})
// -------- Language DATA -----------
let languageData = {
     polish: {
          logo: "II Wojna Światowa w filmach",
          login: "Logowanie / Rejestracja",
          form__title_login: "Logowanie",
          form__button: "Kontynuuj",
          forgot: "Nie pamiętasz hasła?",
          create: "Nie masz jeszcze konta? Zarejestruj się",
          form__title_create: "Utwórz Konto",
          already: "Masz już konto? Zaloguj się"
     },
     english: {
          logo: "World War II Movies",
          login: "Login / Signup",
          form__title_login: "Login",
          form__button: "Continue",
          forgot: "Forgot your password?",
          create: "Don't have account? Create account",
          form__title_create: "Create Account",
          already: "Already have an account? Sign in"
     }
}
//---------------------------------------END Language DATA