mapboxgl.accessToken = mapboxToken;
let mapOptions = {
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-98.4916, 29.4252], // starting position [lng, lat]
    zoom: 10 // starting zoom

}
let map = new mapboxgl.Map(mapOptions)

  geocode("San Antonio, TX", mapboxToken).then(function(result) {
	console.log(result);
	map.setCenter(result);
	map.setZoom(8);
});

geocode("5834 Babcock Rd, San Antonio, TX 78240").then(function(result){
    console.log(result);
    map.setCenter(result);
    map.setZoom(18);
    var popup = new mapboxgl.Popup()
        .setHTML("Macho Libre");

    var marker = new mapboxgl.Marker()
        .setLngLat(result)
        .setPopup(popup)
        .addTo(map);
});

var restArray = [
    {
        address: "8822 Heubner Rd, San Antonio, TX 78240",
        popupHTML: "<p>Pho Sure\n</p>"
    },
    {
        address: "12055 Vance Jackson, San Antonio, TX 78230",
        popupHTML: "<p>Sushi Express Heubner\n</p>"
    },
    {
        address: "6733 Bandera Rd, San Antonio, TX 78238",
        popupHTML: "<p>KungFu Noodle</p>"
    }
]

restArray.forEach(function (rest) {
    console.log(rest);
    geocode(rest.address, mapboxToken).then(function(coordinates) {
        var popup = new mapboxgl.Popup()
            .setHTML(rest.popupHTML);

        var marker = new mapboxgl.Marker()
            .setLngLat(coordinates)
            .setPopup(popup)
            .addTo(map);
    });
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






