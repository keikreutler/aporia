var posts = [ { "type" : "Feature",
    "geometry" : {
        "type": "Point",
        "coordinates": [
          13.441407680511475,
          52.50151533999679
        ]
      },
      "properties": {
        "name": "Bar",
        "description": "With benches outside, colored lights in. Good wifi and cheap beer.\n"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.417160511016846,
          52.501632899215764
        ]
      },
      "properties": {
        "name": "Cafe Alibi",
        "description": "Good wifi, outlets a little scarce."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.41806173324585,
          52.50002622934633
        ]
      },
      "properties": {
        "name": "Kotti Kaffe",
        "description": "I love this place - red velvet couches, you can smoke inside, lots of light."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.430593013763428,
          52.48666116337094
        ]
      },
      "properties": {
        "name": "Melbourne Cantina",
        "description": "Good Eggs Florentine, good wifi."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.440184593200684,
          52.500809978081286
        ]
      },
      "properties": {
        "name": "Rootz Cafe",
        "description": "Good vegan cafe with free wifi.\n\nCons: usually open only afternoon."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.412590026855469,
          52.502429681191614
        ]
      },
      "properties": {
        "name": "Betahaus",
        "description": "An open cafe at the ground floor of the coworking space. Great coffee, not enough power outlets."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.422074317932129,
          52.477003911172226
        ]
      },
      "properties": {
        "name": "Cafe Selig",
        "description": "A very quiet cafe and restaurant with good wifi next to a church. What more could you want? \n\nCons: stroller territory."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.401839733123778,
          52.529433353436936
        ]
      },
      "properties": {
        "name": "St. Oberholz",
        "description": "A cafe with a good working area on the top floor - has start up vibes, but it's open later than most places like this. Pros: you can get away with not buying anything."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.42005729675293,
          52.50031360550477
        ]
      },
      "properties": {
        "_storage_options": {
          "iconUrl": "/uploads/pictogram/library-24_1.png",
          "color": "CadetBlue"
        },
        "name": "Thinkfarm",
        "description": "Coworking space with members by consensus. Lots of plants, lots of communal meals - even has an OpenEnergyMonitor installed.\n\nCons: gates to property closed on weekends."
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          13.381798267364502,
          52.49844562689723
        ]
      },
      "properties": {
        "name": "Wikimedia",
        "description": "They host lots of tech meetups, good wifi, Club Mate by donation."
            }
        },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          28.9744770526886,
          41.0237834232988
        ]
      },
      "properties": {
        "name": "SALT Galata",
        "description": "Salt water, research, windows, coffee."
            }
        }
];


/*L.mapbox.accessToken = 'pk.eyJ1IjoiZ2FtZXJhIiwiYSI6IjNlclVnZDAifQ.a8PjkEfE5i2aOShPawCy1A';
var layer = new L.StamenTileLayer("toner");
var map = L.mapbox.map('map', 'extinctly.f3ad5588', {
    zoomControl: true,
}).setView([41.0237834232988,28.9744770526886], 12);

map.scrollWheelZoom.disable();

map.addLayer(layer);

var mapicon = L.icon({
    iconUrl: '/images/icons/map_future.png',
    iconAnchor:   [12, 5],
});

L.geoJson(posts, {
    pointToLayer: function (feature, latlng) {
		 var marker = L.marker(latlng, {icon: mapicon});
        return marker;
    },
    onEachFeature: onEachFeature
}).on('mouseover', function(e) {
    e.layer.openPopup();
}).addTo(map);

function onEachFeature(feature, featureLayer) {
    featureLayer.bindPopup('<a href="#"><h1>'+ feature.properties.name +'</h1></a>');
}*/