
"use strict"
// ******* Dark/Light Theme *******
let theme = window.localStorage.getItem('theme')
//console.log(theme);
if (theme === null ||theme === 'light') {
    mode = document.getElementById('mode');
    mode.innerHTML = 'dark_mode';
} else {
    mode = document.getElementById('mode');
    document.body.classList.toggle('dark');
    mode.innerHTML = 'light_mode';
}
// ******* Signup/Login Popup ******* 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    if(messageElement == null) {
        return;
    }

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messegeElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    //loginForm.addEventListener("submit", e => submitLoginForm(e));

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 3) {
                setInputError(inputElement, "Username must be at least 3 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

async function submitLoginForm(e) {
    e.preventDefault();

    var data = {
        login: document.getElementById('form__input-login').value,
        password: document.getElementById('form__input-password').value,
    };

    let url = `/index.php?controller=auth&method=login&login=${data.login}&password=${data.password}`;
    const response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
        });
    let json = response.json();
    console.log(json);
    if(json.result.result != null) {
        setFormMessage(loginForm, "error", "Logged in");
        closePopup();
    } else {
        setFormMessage(loginForm, "error", "Invalid username/password combination");
    }
}

const popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}


// ******* Audio mp3 *******
const audio = document.getElementById("audio");
const playStopSpan = document.getElementById("play-stop");

let count = 0;

function playStop() {
    if  (count == 0) {
        count = 1;
        audio.pause();
        playStopSpan.innerHTML = "music_off";

    }else{
        count = 0;
        audio.play();
        playStopSpan.innerHTML = "music_note";
    }
};

// ******* Dark/Light Theme Toggle*******
document.querySelector('.theme-toggle-button').addEventListener('click', () => {
    document.body.classList.toggle('dark')
    let mode = document.getElementById('mode');
    
    if (mode.innerHTML === 'dark_mode') {
        mode.innerHTML = 'light_mode';
        window.localStorage.setItem('theme', 'dark');
    } else {
        mode.innerHTML = 'dark_mode';
        window.localStorage.setItem('theme', 'light');
    }
})

//******************************************* */


