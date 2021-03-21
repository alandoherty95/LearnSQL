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
        placeDescription: "King John's Castle is a 13th-century castle located on Kings Island in Limerick, next to the River Shannon. The foundation of the city of Limerick, however, is generally dated to 922, when the Viking leader Thormodu Helgason established a permanent base on Kings Island, this is the area where King John's Castle now stands.",
        LatLng: [{
            lat: 52.66971206665039, 
            lng: -8.625608444213867
        }],
        type: 'attractions'
    },
    {
        placeName: "Saint Mary's Cathedral",
        placeDescription: "Saint Mary’s Cathedral was founded in 1168 AD and stands majestically over the City of Limerick on the banks of the River Shannon. It is one of the most important medieval buildings to survive intact in Ireland, which is still performing its original function. It is the oldest building in Limerick still in continuous daily use.",
        LatLng: [{
            lat: 52.6681899,
            lng: -8.6235454
        }],
        type: 'attractions'
    },
    {
        placeName: "Treaty Stone",
        placeDescription: "The Treaty Stone is a monument with a stone said to be used in the signing of the 1691 Treaty of Limerick, marking the surrender of the city to William of Orange. The Treaty Stone stands across the River Shannon from King John's Castle.",
        LatLng: [{
            lat: 52.6698134,
            lng: -8.6281917
        }],
        type: 'attractions'
    },
    {
        placeName: "Riverside Walk",
        placeDescription: "The Limerick City Riverside Walk is a scenic 3.25km shared walking and cycling trail which runs through the historic Shannon Fields and City Centre. There are many historic bridges, including Thomond Bridge and Sarsfield Bridge, to see on this walk.",
        LatLng: [{
            lat: 52.66546437993901,
            lng: -8.626859872110707
        }],
        type: 'attractions'
    },
    {
        placeName: "UL Campus",
        placeDescription: "The University of Limerick campus is truly one of the most beautiful university campuses in the world. Visitors never fail to be impressed by this peaceful green place with its trees, its fountains and the beautiful River Shannon flowing gracefully through. In spring, UL is a symphony of birdsong, while in autumn, it is a celebration of colour.",
        LatLng: [{
            lat: 52.67363069366351,
            lng: -8.57273651495968
        }],
        type: 'attractions'
    },
    {
        placeName: "Castletroy Neighbourhood Park",
        placeDescription: "Castletroy Neighbourhood Park is a large outdoor public park. It features an array of natural habitats, including a 4,300 sq. metre lake, wetlands, wildflower grass areas and woodlands. It also features 1.2 km of pedestrian pathways, a fully equipped children’s playground, skateboarding area and circular cycle route.",
        LatLng: [{
            lat: 52.661808013916016,
            lng: -8.538951873779297
        }],
        type: 'attractions'
    },
    {
        placeName: "People's Park",
        placeDescription: "The People's Park is a large public park located near Pery Square in Limerick. It can be found just west of the railway station and bus terminal. At the northern edge of the park is the Limerick City Gallery of Art. The park was formally opened in 1877, in memory of Richard Russell, a prominent local businessman.",
        LatLng: [{
            lat: 52.65807342529297,
            lng: -8.627958297729492
        }],
        type: 'attractions'
    },
    {
        placeName: "Sarsfield Bridge",
        placeDescription: "Sarsfield Bridge is a five-span limestone road bridge. It was built between 1824-35 connecting Sarsfield Street and Ennis Road. It was once a swivel bridge that could open allowing large vessels to pass into the upper quays. This function is no longer in use although the mechanisms can still be seen under the bridge.",
        LatLng: [{
            lat: 52.6659174,
            lng: -8.6310764
        }],
        type: 'attractions'
    },
    {
        placeName: "Bunratty Castle & Folk Park",
        placeDescription: "Bunratty Castle is a 15th-century castle and living 19th-century village bringing the periods alive at this family-friendly museum. The castle and the adjoining folk park are run by Shannon Heritage as tourist attractions. It is widely recognised as the most complete and authentic castle in Ireland.",
        LatLng: [{
            lat: 52.6978336,
            lng: -8.8121413
        }],
        type: 'activities'
    },
    {
        placeName: "The Hunt Museum",
        placeDescription: "The Hunt Museum preserves and exhibits the original artefacts gathered, over a lifetime, by John and Gertrude Hunt and known as the Hunt Collection. The Hunt Museum Trust was established in 1974 to hold the Collection and the property at Craggaunowen, a 16th-century Irish tower house that the Hunts had restored.",
        LatLng: [{
            lat: 52.66633987426758,
            lng: -8.624337196350098
        }],
        type: 'activities'
    },
    {
        placeName: "Limerick City Gallery of Art",
        placeDescription: "Limerick City Gallery of Art is the largest contemporary art gallery in the Mid-Western Region, annually exhibiting national and international artists in a diverse exhibition programme. Limerick City Gallery of Art is one of the leading contemporary art galleries in Ireland and home to an important collection of art.",
        LatLng: [{
            lat: 52.6588619,
            lng: -8.628419
        }],
        type: 'activities'
    },
    {
        placeName: "Aura Leisure Centre",
        placeDescription: "Aura Leisure Centre is a public leisure facility with a gym, swimming pool, sauna, steam room and sports hall. Aura has a proven track record in working to support the delivery of public leisure facilities nationwide. It is located at Grove Island Shopping Centre on the Corbally side of the city.",
        LatLng: [{
            lat: 52.66879653930664,
            lng: -8.614601135253906
        }],
        type: 'activities'
    },
        {
        placeName: "Cratloe Woods",
        placeDescription: "Cratloe Woods is a forested area around the village of Cratloe, just outside of Limerick City. Cratloe Wood Car Park and Picnic Site is located adjacent to Cratloe village and on the western side Cratloe Forest property which is over 700 Hectares in extent. The site is operated by Coillte, who operate a number of forestry areas in Ireland.",
        LatLng: [{
            lat: 52.66879653930664,
            lng: -8.614601135253906
        }],
        type: 'activities'
    },
        {
        placeName: "Nevsail Watersports",
        placeDescription: "The Limerick Watersports & Activity Centre is based in the heart of Limerick City behind the Hunt Museum. A range of water and land based activities are on offer for all ages, abilities and group sizes. Group activities include team building, hen & stag parties as well as school tours and kids birthdays.",
        LatLng: [{
            lat: 52.666432513426216,
            lng: -8.625121561336258
        }],
        type: 'activities'
    },
        {
        placeName: "Milk Market",
        placeDescription: "The Milk Market is a covered market selling fresh fruits, vegetables, meats, dairy items, crafts & baked goods since 1852. It provides Limerick residents and visitors with access to a wide variety of local, in-season products, typically directly from the producer.",
        LatLng: [{
            lat: 52.663665310677956,
            lng: -8.621588330297785
        }],
        type: 'activities'
    },
        {
        placeName: "Crescent Shopping Centre",
        placeDescription: "The Crescent Shopping Centre is a major shopping centre serving Limerick. It is located in Dooradoyle, on the southern outskirts of the city. The Crescent Shopping Centre is the biggest and most successful shopping complex outside of Dublin. It is home to over 90 stores, a host of cafes and restaurants, creche and 12 screen cinema.",
        LatLng: [{
            lat: 52.64048373515425,
            lng: -8.64533731710641
        }],
        type: 'activities'
    }
];

window.onload = function () {
    initMap();
};

function addMarkerInfo() {
    for( var i = 0; i < markersOnMap.length; i++ ) {
        var contentString = '<h3>' + markersOnMap[i].placeName + '</h3>' + '<p>' + markersOnMap[i].placeDescription + '</p>';

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
            infowindow.open(marker.get('map'), marker);
            InfoObj[0] = infowindow;
        });
    }
}

function closeOtherInfo() {
    if( InfoObj.length > 0) {
        InfoObj[0].set("marker", null);
        InfoObj[0].close();
        InfoObj[0].length = 0;
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 15,
        center: centerCords
    });
    addMarkerInfo();
}