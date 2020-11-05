mapboxgl.accessToken = mapboxToken;
let mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [34.0522, -118.2437], // starting position [lng, lat]
    zoom: 10 // starting zoom

}
let map = new mapboxgl.Map(mapOptions)

geocode("Los Angeles, CA", mapboxToken).then(function(result) {
	console.log(result);
	map.setCenter(result);
	map.setZoom(8);
});













// var markerOptions;
// markerOptions = {
//     color: "#f0000",
//     draggable: true
// };
//  let machoMarker = new mapboxgl.Marker(markerOptions)
//      .setLngLat([-98.4861, 29.4260])
//      .addTo(map);
//     let popup = new mapboxgl.Popup()
//         .setLngLat([-98.4861, 29.4260])
//         .setHTML("<h1> The Alamo</h1>")
//         .addTo(map);
// var popup = document.getElementById("test-btn");
// popup.addEventListener("click", function() {
//        console.log("popup");
//     });






