//Page loads
//When user clicks on 'Location' or 'gallery' side nav bar slides right and background image changes to white. 
//If user slescts gallery image box shown centered with arrows either side.
//if user clicks arrows image slides out to the left, new image slides in from the right
//red 'X' becomes hamburger item again. If user double clicks nav bar slides right completely to show initial main page.
//when user hovers on 'Book online' button in opeing hours. Appearance changes. Black text on white becomes white text on black
//If user clicks book online. Nav bar slides right and form displays in center of the page.
//when user clicks into form field cursor appears
//when user inputs all fields correctly book button is highlighted
//When user clicks book form is submitted and form fades out (fast) and a "Thank you for your booking. We look forward to your stay with us." message is displayed for 30 secs and page refreshes to main page
//

//Elements List:

//body
//html
//header
//.bg (Background image)
//nav
//a
//div
//button
//section
//table
//form
//input
//#contact (contact div)
//.mainMenuItem (inside side navigation panel div) 
//#mini-map (inside contact div)
//#accommodation (accommodation div)
//#book-now (button) (inside accommodation div)
//#main (main page contents to be pushed left by side navigation panel. Styles page content - push the page content to the left when you open the side navigation) 
// .main-transform (inside #main div these are blocks that will be shown or hidden depending on event) (id unique to section ie. main-transform-bookings)
//  #logo (inside header) 
//#menu (main heading next to hamburger icon inside header)
//#bookings (bookings section)
//#form-part-1 (inside #bookings section. One form but seperated whole form into divs so can float side by side)
//#form-part-2 (inside #bookings section. One form but seperated whole form into divs so can float side by side)
var form = $(form).on('click', function (e) {
  e.preventDefault();


})
//#gallery (gallery section)
//#arrow-left & #arrow-right (arrows that will float (horizontally centered) either side of the gallery image)
//.img-container (contains gallery images)
//#Om-Point-gallery (image inside gallery section will slide to the left new image will slide in as it slides out)
//#location (location section)





//when user clicks Hamburger icon (menu button) white navigation bar slides across a third of the page over the background image from the right hand side to left.
//Navigation bar displays menu items ['About', 'Accommodation', 'Gallery', 'Location', 'Contacts'], Opening Hours and a 'Book online' button
//hamburger icon transforms into a red 'X'
//When user clicks on menu item nav bar menu items slide right and new text displays in nav bar. Main background image to the left changes
  //#mySidenavMenu (side navigation panel div)
  //.sidenav (inside side navigation panel div. The navigation menu links) 
  //a .closebtn (inside side navigation panel div. Position and style the close button (top right corner) (linked)
  //.container (contain hamburger menu icon inside header)
  //#hamburger (hamburger menu icon inside header)
  //bar1 .bar2 .bar3 .change (hamburger icon becomes 'X' when user clicks on it and side navigation panel is showing)
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


//If user selected location a map box is diplayed center with marker of current location. Four main headings shown ['Entertainment', 'Restaurants', 'Tourist Site', 'Public Transport'] appear
//when user selects one of the 4 map sub headings markers for selected sub heading appear for the area surroding the B&B
  //.sub-menu-nav(sub-menu navigation items effect map)
  //#map (map inside location section. Updates depending on which sub-menu item user clicks - markers and color change)

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -36.848629, lng: 174.737587},
    zoom: 8,
    zoomControl: false,
    fullScreenControl: true,
    styles: styles

    var marker = new google.mapsMarker ( {
      position: {lat: -36.848629, lng: 174.737587},
      map: map
    });

});
  
}

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




















