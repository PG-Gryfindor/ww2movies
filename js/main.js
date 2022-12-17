
// ******* Signup/Login Popup ******* 
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message")

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

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        //  AJAX/Fetch login

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

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

const popup = document.getElementById("popup");

function openPopup() {
    popup.classList.add("open-popup")
}

function closePopup() {
    popup.classList.remove("open-popup")
}

// ******* Map ******* 
const key = 'KBNcLm3O2HsmQwAGcJSS ';
const map = new maplibregl.Map({
    container: 'map', // container's id or the HTML element in which MapLibre GL JS will render the map
    style: `https://api.maptiler.com/maps/70623a5f-370e-4bc5-8281-3492c6297486/style.json?key=KBNcLm3O2HsmQwAGcJSS`, // style URL
    center: [0.0, 45.2125578], // starting position [lng, lat]
    zoom: 1.95, // starting zoom
});



map.on('load', function () {
    // Add an image to use as a custom marker
    map.loadImage(
        'pin.png',
        function (error, image) {
            if (error) throw error;
            map.addImage('custom-marker', image);
            map.addSource('movies', {
                'type': 'geojson',
                'data': './movies.json'
            }); 
            // Add a symbol layer
            map.addLayer({
                'id': 'movies',
                'type': 'symbol',
                'source': 'movies',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-size': 0.06,
                    'icon-overlap': 'always'
                }
            });
        });
});

map.on('click', 'movies', function (e) {
    new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<h3>Title</h3>${e.features[0].properties.title}<h3>Year of production</h3>${e.features[0].properties.yearProduction}<h3>Year of action</h3>${e.features[0].properties.yearAction}<h3>Cast</h3>${e.features[0].properties.cast}<h3>Description</h3>${e.features[0].properties.description}<h3>Links</h3><a href = "${e.features[0].properties.imdb}">IMDB</a> <a href = "${e.features[0].properties.filmweb}">filmweb</a>`)
        .addTo(map);
});

map.addControl(new maplibregl.NavigationControl(), 'top-right');

// ******* Audio mp3 *******
const audio = document.getElementById("audio");
const playStopSpan = document.getElementById("play-stop");

let count = 0;

function playStop() {
    if (count == 0) {
        count = 1;
        audio.pause();
        playStopSpan.innerHTML = "music_off";

    } else {
        count = 0;
        audio.play();
        playStopSpan.innerHTML = "music_note";
    }
};