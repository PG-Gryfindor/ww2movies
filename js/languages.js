"use strict"

// ******* Multilingual *******

let languageData = {
     pl: {
         logo: "II Wojna Światowa w filmach",
         login: "Logowanie / Rejestracja",
         form__title_login: "Logowanie",
         form__button: "Kontynuuj",
         form__button2: "Kontynuuj",
         forgot: "Nie pamiętasz hasła?",
         create: "Nie masz jeszcze konta? Zarejestruj się",
         form__title_create: "Utwórz Konto",
         already: "Masz już konto? Zaloguj się"
     },
     en: {
         logo: "World War II Movies",
         login: "Login / Signup",
         form__title_login: "Login",
         form__button: "Continue",
         form__button2: "Continue",
         forgot: "Forgot your password?",
         create: "Don't have account? Create account",
         form__title_create: "Create Account",
         already: "Already have an account? Sign in"
     }
 };
 
 let language = document.querySelector('.language'),
     link = document.querySelectorAll('.lang'),
     logo = document.querySelector('.logo'),
     login = document.querySelector('.login'),
     form__title_login = document.querySelector('.form__title_login'),
     form__button = document.querySelector('.form__button'),
     form__button2 = document.querySelector('.form__button2'),
     forgot = document.querySelector('.forgot'),
     create = document.querySelector('.create'),
     already = document.querySelector('.already'),
     form__title_create = document.querySelector('.form__title_create');
 
 // Check for a previously saved language in the cookie
 let savedLanguage = getCookie("language");
 if (savedLanguage) {
     changeLanguage(savedLanguage);
 }
 
 link.forEach(el => {
     el.addEventListener('click', () => {
         language.querySelector('.active').classList.remove('active');
         el.classList.add('active');
 
         let attr = el.getAttribute('hreflang');
         setCookie("language", attr, 30); // Store the selected language in a cookie
         changeLanguage(attr);
     });
 });
 
 function changeLanguage(attr) {
     logo.textContent = languageData[attr].logo;
     login.textContent = languageData[attr].login;
     form__title_login.textContent = languageData[attr].form__title_login;
     form__button.textContent = languageData[attr].form__button;
     form__button2.textContent = languageData[attr].form__button2;
     forgot.textContent = languageData[attr].forgot;
     create.textContent = languageData[attr].create;
     already.textContent = languageData[attr].already;
     form__title_create.textContent = languageData[attr].form__title_create;
 }

function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
