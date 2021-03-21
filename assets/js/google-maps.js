var map;
var InfoObj = [];
var centerCords = {
    lat: 52.6647,
    lng: -8.62306 
};

var icons = {
    attractions: {
        icon: 'https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/icons/green-dot.png?raw=true'
    },
    activities: {
        icon: 'https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/icons/yellow-dot.png?raw=true'
    },
    coffee: {
        icon: 'https://github.com/alandoherty95/Milestone-Project-2/blob/master/assets/icons/red-dot.png?raw=true'
    }
};

var markersOnMap = [
    {
        placeName: "King John's Castle",
        LatLng: [{
            lat: 52.66971206665039, 
            lng: -8.625608444213867
        }],
        type: 'attractions'
    },
    {
        placeName: "Saint Mary's Cathedral",
        LatLng: [{
            lat: 52.6681899,
            lng: -8.6235454
        }],
        type: 'attractions'
    },
    {
        placeName: "Treaty Stone",
        LatLng: [{
            lat: 52.6698134,
            lng: -8.6281917
        }],
        type: 'attractions'
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>';

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener('click', function() {
            closeOtherInfo();
            infowindow.open(map, marker);
            InfoObj[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if( InfoObj.lenght > 0) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].lenght = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: centerCords
    });
}