"use strict"




let layerID = 'movies' ;
let sourceLayer = './json/movies.json';
// ******* Switching Years_nav *******
const changingBG = document.querySelector('.changeBG')

function changeTo1939() {
    if (document.getElementsByClassName('.1939')) {
        changingBG.style.background = `url(./img/bg-1939.jpg)`;

        layerID = 'movies';
        sourceLayer = './json/movies.json';
        
    } 
}

function changeTo1940() {
    if (document.getElementsByClassName('.1940')) {

        changingBG.style.background = `url(./img/bg-1940.jpg)`;
        layerID = '1944';
        sourceLayer = './json/1944.json';
    } 
}

function changeTo1941() {
    if (document.getElementsByClassName('.1941')) {

        changingBG.style.background = `url(./img/bg-1941.jpg)`;
        layerID = '1944';
        sourceLayer = './json/1944.json';
    } 
}

function changeTo1942() {
    if (document.getElementsByClassName('.1942')) {

        changingBG.style.background = `url(./img/bg-1942.jpg)`;
        layerID = '1944';
        sourceLayer = './json/1944.json';
    } 
}

function changeTo1943() {
    if (document.getElementsByClassName('.1943')) {

        changingBG.style.background = `url(./img/bg-1943.jpg)`;
        layerID = '1944';
        sourceLayer = './json/1944.json';
    } 
}

function changeTo1944() {
    if (document.getElementsByClassName('.1944')) {

        changingBG.style.background = `url(./img/bg-1944.jpg)`;

        layerID = '1944';
        sourceLayer = './json/1944.json';
        
    } 
}

function changeTo1945() {
    if (document.getElementsByClassName('.1945')) {

        changingBG.style.background = `url(./img/bg-1945.jpg)`;
        layerID = '1944';
        sourceLayer = './json/1944.json';
    } 
}


// ******* Map ******* 
const key = 'KBNcLm3O2HsmQwAGcJSS ';
const map = new maplibregl.Map({
  container: 'map', // container's id or the HTML element in which MapLibre GL JS will render the map
  style: `https://api.maptiler.com/maps/70623a5f-370e-4bc5-8281-3492c6297486/style.json?key=KBNcLm3O2HsmQwAGcJSS`, // style URL
  center: [0.0, 45.2125578], // starting position [lng, lat]
  zoom: 1.9, // starting zoom
});
map.addControl(new maplibregl.NavigationControl(), 'top-right');

 // ******* Maps Markers *******

 


 map.on('load', function () {
    // Add an image to use as a custom marker
    map.loadImage(
        './img/pin.png',
        function (error, image) {
            if (error)
                throw error;
            map.addImage('custom-marker', image);
            map.addSource(layerID, {
                'type': 'geojson',
                'data': sourceLayer
            });
            // Add a symbol layer
            map.addLayer({
                    'id': layerID,
                    'type': 'symbol',
                    'source': layerID,
                    'layout': {
                        'icon-image': 'custom-marker',
                        'icon-size': 0.06,
                        'icon-overlap': 'always'
                    }
                });
            
        });
});



map.on('click', layerID, function (e) {
    new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<h3>TITLE</h3>${e.features[0].properties.title}
                <h3>YEAR OF PRODUCTION</h3>${e.features[0].properties.yearProduction}
                <h3>YEAR OF ACTION</h3>${e.features[0].properties.yearAction}
                <h3>CAST</h3>${e.features[0].properties.cast}
                <h3>DESCRIPTION</h3>${e.features[0].properties.description}
                <h3>LINKS\n</h3>
                    <a href = "${e.features[0].properties.imdb}">IMDB</a><br> 
                    <a href = "${e.features[0].properties.filmweb}">filmweb</a>`)
        .addTo(map);
});