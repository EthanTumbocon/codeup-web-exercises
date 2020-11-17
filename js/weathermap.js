function(){
    "use strict";


    $(document).ready(function () {
        "use strict";
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            q: "San Antonio, US"
        }).done(function (data) {
            console.log(data);
        });
        // $.get("http://api.openweathermap.org/data/2.5/weather", {
        //     APPID: OPEN_WEATHER_APPID,
        //     q: "San Antonio, US"
        // }).done(function (data) {
        //     console.log(data);
        // });

        // mapboxgl.accessToken = mapboxToken;
        // let mapOptions = {
        //     container: 'map',
        //     style: 'mapbox://styles/mapbox/streets-v11',
        //     center: [-98.4916, 29.4252],
        //     zoom: 10
        //
        // }
        // function geocode(search, token) {
        //     var baseUrl = 'https://api.mapbox.com';
        //     var endPoint = '/geocoding/v5/mapbox.places/';
        //     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
        //         .then(function(res) {
        //             return res.json();
        //             // to get all the data from the request, comment out the following three lines...
        //         }).then(function(data) {
        //             return data.features[0].center;
        //         });
        // }
        // let map = new mapboxgl.Map(mapOptions)
        // geocode("San Antonio, TX", mapboxToken).then(function(result) {
        //     console.log(result);
        //     map.setCenter(result);
        //     map.setZoom(8);
        //     var popup = new mapboxgl.Popup()
        //         .setHTML("Macho Libre");
        //     var marker = new mapboxgl.Marker()
        //         .setLngLat(result)
        //         .setPopup(popup)
        //         .addTo(map);
        // });


    });











}