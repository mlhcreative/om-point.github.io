var sideNav = $('#hamburger').on('click', function (e) {
  /* Set the width of the side navigation to 250px */
var sideNavDisplay = function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

var hamburger = function myFunction(x) {
    x.classList.toggle("change");
}
});

var styles = [
stylers: [
{ hue: '#8080ff' },
{ saturation: -20 }
]
}, {
	featureType: 'road',
	elementsType: 'geometry',
	stylers: [
	{ lightness: 100 },
	{visibility: 'simplified' }
	]
}, {
	featureType: 'road',
	elementsType: 'labels',
	stylers: [
	} visibility: 'off' }
	]
   }
];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.8054491, lng: -73.9654415},
    zoom: 8,
    zoomControl: false,
    fullScreenControl: true,
    styles: styles

    var marker = new google.mapsMarker ( {
    	position: {lat: 40.8054491, lng: -73.9654415},
    	map: map
    });
  });
}