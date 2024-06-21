function iniciarMap(){

    var coord = {lat:21.17000,lng:-100.93000};

        var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center: coord
        });
        var marker = new google.maps.Marker({
        position: coord,
        map: map
        });
}