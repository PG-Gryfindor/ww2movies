"use strict"

let layerID = 'movies';
let sourceLayer = '/index.php?controller=point&method=getGeoJSON';
let currentLayer;

// ******* Switching Years_nav *******
const changingBG = document.querySelector('.changeBG')

function changeToAll() {
    changingBG.style.background = `url(./img/bg-1939.jpg)`;
    layerID = 'movies' ;
    sourceLayer = '/index.php?controller=point&method=getGeoJSON';
    removeOldLayers();
    addNewLayers();
}

function changeTo1939() {
    changingBG.style.background = `url(./img/bg-1939.jpg)`;
    layerID = '1939' ;
    sourceLayer = '/index.php?controller=point&method=getGeoJSON';
    removeOldLayers();
    addNewLayers();
}

function changeTo1940() {
    changingBG.style.background = `url(./img/bg-1940.jpg)`;
    layerID = '1940';
    sourceLayer = '/index.php?controller=point&method=getGeoJSON&year=1940';
    removeOldLayers();
    addNewLayers();
}

function changeTo1941() {
    changingBG.style.background = `url(./img/bg-1941.jpg)`;
    layerID = '1941';
    sourceLayer = '/index.php?controller=point&method=getGeoJSON&year=1941';
    removeOldLayers();
    addNewLayers();
}
function changeTo1942() {
    changingBG.style.background = `url(./img/bg-1942.jpg)`;
    layerID = '1942';
    sourceLayer = '/index.php?controller=point&method=getGeoJSON&year=1942';
    removeOldLayers();
    addNewLayers();
}
function changeTo1943() {
    changingBG.style.background = `url(./img/bg-1943.jpg)`;
    layerID = '1943';
    sourceLayer = '/index.php?controller=point&method=getGeoJSON&year=1943';
    removeOldLayers();
    addNewLayers();
}
function changeTo1944() {
    changingBG.style.background = `url(./img/bg-1944.jpg)`;
    layerID = '1944';
    sourceLayer = '/index.php?controller=point&method=getGeoJSON&year=1944';
    removeOldLayers();
    addNewLayers();
}
function changeTo1945() {
    changingBG.style.background = `url(./img/bg-1945.jpg)`;
    layerID = '1945';
    sourceLayer = '/index.php?controller=point&method=getGeoJSON&year=1945';
    removeOldLayers();
    addNewLayers();
}

// ******* Map ******* 
const key = 'KBNcLm3O2Lm3O2HsmQwAGcJSS';
const map = new maplibregl.Map({
  container: 'map', // container's id or the HTML element in which MapLibre GL JS will render the map
  style: `https://api.maptiler.com/maps/70623a5f-370e-4bc5-8281-3492c6297486/style.json?key=KBNcLm3O2HsmQwAGcJSS`, // style URL
  center: [0.0, 45.2125578], // starting position [lng, lat]
  zoom: 1.9, // starting zoom
});
map.addControl(new maplibregl.NavigationControl(), 'top-right');

// ******* Maps Markers *******
map.on('load', function (){
map.loadImage(
    './img/pin.png',
    function (error, image) {
        if (error)
            throw error;
        map.addImage('custom-marker', image);
        addNewLayers();
    });});

function removeOldLayers(){
    if(currentLayer){
        map.removeLayer(currentLayer);
        map.removeSource(currentLayer);
    }
}

function addNewLayers(){
    currentLayer = layerID;
    map.addSource(layerID, {
        'type': 'geojson',
        'data': sourceLayer
    });
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
    map.on('click', layerID, function (e)
    {
        let likedText = e.features[0].properties.liked != null ? `<div><b>${e.features[0].properties.liked ? `<a href='http://localhost:8080/index.php?controller=movie&method=unlike&id=${e.features[0].id}'>Odlub</a>` : `<a href='http://localhost:8080/index.php?controller=movie&method=like&id=${e.features[0].id}'>Polub</a>`}</b></div>` : '';
        new maplibregl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(`<h3>TITLE</h3>${e.features[0].properties.title}
            <h3>YEAR OF PRODUCTION</h3>${e.features[0].properties.yearProduction}
            <h3>YEAR OF ACTION</h3>${e.features[0].properties.yearAction}
            <h3>CAST</h3>${e.features[0].properties.cast}
            <h3>DESCRIPTION</h3>${e.features[0].properties.description}
            ${likedText}
            <h3>LINKS\n</h3>
                <a href = "${e.features[0].properties.imdb}">IMDB</a><br> 
                <a href = "${e.features[0].properties.filmweb}">filmweb</a>`)
            .addTo(map);
        });
    }
