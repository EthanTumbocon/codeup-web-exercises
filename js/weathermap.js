(function () {

    "use strict";

    $(document).ready(function () {
        $.get("http://api.openweathermap.org/data/2.5/forecast", {
            APPID: OPEN_WEATHER_APPID,
            q: "San Antonio, US",
            units: 'imperial'
        }).done(function (data) {
            console.log(data);
        });
        $.get("http://api.openweathermap.org/data/2.5/weather", {
            APPID: OPEN_WEATHER_APPID,
            q: "San Antonio, US"
        }).done(function (data) {
            console.log(data);
            var html =``
            forEach(){

            }
             html += `
                    <div id="weather-cards">
                            <div class="card" style="width: 18rem;">
                            <div class="card-body">
                            <h5 class="current-date"></h5>
                            <p class="name"> ${data.name} </p>
                            </div>
                             <ul class="list-group list-group-flush">
                                 <li id="weather-type" class="list-group-item"></li>
                                 <li id="temperature" class="list-group-item"></li>
                                <li id="humidity" class="list-group-item"></li>
                                </ul>
                            </div>
                       </div>`

        //      html += `
        // // <div id="weather-cards">
        // //         <div class="card" style="width: 18rem;">
        // //         <div class="card-body">
        // //         <h5 class="current-date"></h5>
        // //         <p class="name"> ${data.name} </p>
        // //         </div>
        // //          <ul class="list-group list-group-flush">
        // //              <li id="weather-type" class="list-group-item"></li>
        // //              <li id="temperature" class="list-group-item"></li>
        // //             <li id="humidity" class="list-group-item"></li>
        // //             </ul>
        // //         </div>
        // //    </div>`
            $('#weather-card').html(html)





        });

        mapboxgl.accessToken = mapboxToken;
        var coordinates = document.getElementById('coordinates');
        let mapOptions = {
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-98.4916, 29.4252],
            zoom: 10

        }

        function geocode(search, token) {
            var baseUrl = 'https://api.mapbox.com';
            var endPoint = '/geocoding/v5/mapbox.places/';
            return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
                .then(function (res) {
                    return res.json();
                    // to get all the data from the request, comment out the following three lines...
                }).then(function (data) {
                    return data.features[0].center;
                });
        }

            var map = new mapboxgl.Map(mapOptions)
            var marker = new mapboxgl.Marker({
                draggable: true
            })
                .setLngLat(result)
                .addTo(map)
        function onDragEnd() {
            var lngLat = marker.getLngLat();
            coordinates.style.display = 'block';
            coordinates.innerHTML =
                'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
        }

        marker.on('dragend', onDragEnd);
        //    need to make the marker draggable
        //    need to make a new marker on click (event listener) and have it send coordinates to console
        //    need to let it display on the
        });

})();