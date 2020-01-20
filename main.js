function weather(){
    var location = document.getElementById("location");
    var apiKey = "c5ffdee5314c98e7f8e61f045ffc72dc";
    var url = "https://api.darksky.net/forecast/";

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        location.innerHTML = 
        "Latitude is " + latitude + "° Longitude is " + longitude + "°";

        $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback",
            function(data) {
                $("#temp").html(data.currently.temperature + "° F");
                $("#minutely").html(data.minutely.summary);
            }
        );

    }

    function error() {
        location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
}

weather();