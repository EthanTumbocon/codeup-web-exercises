mapboxgl.accessToken = mapboxToken;
let mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 9 // starting zoom

}
let map = new mapboxgl.Map(mapOptions);