    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCuvy7TDrwbcKkf8ac1DaPUbbGT0aCqZZ0",
      authDomain: "om-point-1500675639817.firebaseapp.com",
      databaseURL: "https://om-point-1500675639817.firebaseio.com",
      projectId: "om-point-1500675639817",
      storageBucket: "",
      messagingSenderId: "856152782115"
    };
    firebase.initializeApp(config);

var database = firebase.database();
//openNav function

/* Set the width of the side navigation to -1350 */
function openNav() {

      $(".sidenav").removeClass("sidenav").addClass("open-sidenav");

      $("#main").addClass("main-transform");

      $("#bookings").addClass("main-transform");

      $("#form").addClass("main-transform");

      $("#location").addClass("main-transform");

      $("#arrow-left").addClass("arrow-mainTransform");

      $("arrow-right").addClass("arrow-mainTransform");

      $('footer').addClass("main-transform");
  }

/* Set the width of the side navigation to 0 */
function closeNav() {

      $(".sidenav").removeClass("open-sidenav").addClass("sidenav");

      $("#main").removeClass("main-transform");

      $("#bookings").removeClass("main-transform");

      $("#form").removeClass("main-transform");

      $("#location").removeClass("main-transform");

      $("#arrow-left").removeClass("arrow-mainTransform");

      $("arrow-right").removeClass("arrow-mainTransform");

      $('footer').removeClass("main-transform");
  }
//Page loads
//Clickable: Logo, menu hamburger icon, "OPENING HOURS", "BOOK ONLINE", Social buttons
//function for hiding main menu in Side nav
var hideMainMenuSideNav = function noMenuNav() {

  $('#SidenavMenu').addClass('hide-menu-item');

};
//option 1.
//User clicks logo
//page refreshes
var logo = $('#logo').on('click', function (){
  location.reload(forceGet);
});

//Option 2.
//User clicks menu hamburger icon (#hamburger-icon)
//side nav (#sideNav) opens
//page contents (#main) moves to the left
//footer moves to the left
//hamburger icon (#hamburger-icon) transforms 'X'

var openSideNav = $('#hamburger-icon').on('click', function (e) {
  e.preventDefault();
  /* Set the width of the side navigation to 250px */
    $('#hamburger-icon div').addClass("change");

    openNav(); 

      $('footer').addClass("main-transform");
  });
/* Set the width of the side navigation to 0 */
    closeNav();
  

//Option 3.
//User clicks menu hamburger icon (#hamburger-icon) again
//pages is restored to first load appearance
////side nav (#sideNav) closes
//page contents (#main) moves to the right (inital position)
//footer moves to the right (inital position)
//hamburger icon (#hamburger-icon) transforms back
var exitSideNav = $("#hamburger-icon").on('dblclick', function(){

    $('#hamburger-icon div').removeClass("change");
  });
    closeNav();



//Side nav open:
//user clicks 'ABOUT'
//side nav menu is hidden and about items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #about

var aboutSelect = $('#about').on('click', function() {

    $('#about').addClass('selected');
  
  });

  hideMainMenuSideNav(); 



//user clicks 'ACCOMMODATION'
//side nav menu is hidden and accommodation items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #accommodation

var accommodationSelect = $('#accommodation').on('click', function() {
  
    $('#accommodation').addClass('selected');

   });

  hideMainMenuSideNav(); 




//user clicks 'GALLERY'
//Side nav is hidden and video changes to white. Gallery items appear
//add class .hide-menu-item to #SidenavMenu and #nav-footer
//add class .navSlide-full
//remove class .fullscreen-bg and add class .fullscreen-bg-noColor to first body div where video is stored
//add class .fullscreen-bg_video-noColor to video
//add class .sidenav
//remove class .gallery-hide from #gallery
//user clicks either left or right arrows next to image. Image displaying slides left and new image slides into its place from the right
    //user clicks left arrow 
    //add class .img-slide-out to #gallery
    //add class .img-slide-in to #gallery-1
    //user clicks right arrow
    //add class .img-slide-out to #gallery-1
    //add class .img-slide-in to #gallery
    //etc.
var gallerySelect = $('#gallery').on('click', function() {

  hideMainMenuSideNav (); 

  $('#nav-footer').addClass('hide-menu-item').addClass('navSlide-full');

  $('#video').removeClass('fullscreen-bg').addClass('fullscreen-bg-noColor');

  $('video').addClass('fullscreen-bg_video-noColor');

  closeNav();

  $('#gallery').removeClass('#gallery-hide');

});

  //user clicks logo to leave 'GALLERY'
  //page restore to first load appearance
  //add class .gallery-hide to #gallery/#gallery-1/#gallery-2
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video
var exitGalleryLogo = $('#logo').on('click', function() {

  $('#gallery').addClass('gallery-hide');
  $('#gallery-1').addClass('gallery-hide');
  $('#gallery-2').addClass('gallery-hide');

  $('#video').removeClass('ullscreen-bg-noColor').removeClass('fullscreen-bg');

  $('video').removeClass('fullscreen-bg_video-noColor');

});
  //user clicks menu hamburger icon to escape 'GALLERY'
  //page restore to first load appearance with side nav
  //Call option 2. function if user double clicks call option 3. function
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video
var exitGalleryHamburger = $('#hamburger-icon').on('click', function() {

  $('#gallery').addClass('gallery-hide');
  $('#gallery-1').addClass('gallery-hide');
  $('#gallery-2').addClass('gallery-hide');

  $('#video').removeClass('ullscreen-bg-noColor').removeClass('fullscreen-bg');

  $('video').removeClass('fullscreen-bg_video-noColor');

    openNav();
  });



//user clicks 'LOCATION'
//Side nav is hidden and video changes to white. Location items appear
//add class .hide-menu-item to #SidenavMenu and #nav-footer
//add class .navSlide-full
//remove class .fullscreen-bg and add class .fullscreen-bg-noColor to first body div where video is stored
//add class .fullscreen-bg_video-noColor to video
//add class .sidenav
//remove class .location-hide
//user clicks .sub-menu-nav items (TRANSPORT, ENTERTAINMENT, RECREATION, SURF-PICKS) map. Markers are displayed on the map. create an array?
var locationSelected = $('#location').on('click', function () {

hideMainMenuSideNav (); 

  $('#nav-footer').addClass('hide-menu-item').addClass('navSlide-full');

  $('#video').removeClass('fullscreen-bg').addClass('fullscreen-bg-noColor');

  $('video').addClass('fullscreen-bg_video-noColor');

  closeNav();

  $('#location').removeClass('#location-hide');

});


//map
var styles = [
{
    stylers: [
    { hue: '#8080ff' },
    { saturation: -20 },
  ]
},
{
    featureType:'road',
    elementType:'geometry',
    stylers: [
    { lightness: 100 },
    {visibility: 'simplified' },
  ]
},
{
    featureType: 'road',
    elementType: 'labels',
    stylers: [
    { visibility: 'off' }
 ]
}
];

function initMap() {
    map = new google.maps.Map(document.getElementById("#map"), {
    center: {lat: -36.848629, lng: 174.737587},
    zoom: 8,
    zoomControl: false,
    fullScreenControl: true,
    styles: styles
});

    var marker = new google.maps.Marker( {
      position: {lat: 40.8054491, lng: -73.9654415},
      map: map
    });
}

  //user clicks logo to leave 'LOCATION'
  //page restore to first load appearance
  //add class .location-hide to #location
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video
var exitLocationLogo = $('#logo').on('click', function() {

  $('#location').addClass('location-hide');

  $('#video').removeClass('ullscreen-bg-noColor').removeClass('fullscreen-bg');

  $('video').removeClass('fullscreen-bg_video-noColor');

});
  //user clicks menu hamburger icon to escape 'LOCATION'
  //page restore to first load appearance with side nav
  //Call option 2. function if user double clicks call option 3. function
  //remove class .fullscreen-bg-noColor from first body div where video is stored add class .fullscreen-bg
  //remove class .fullscreen-bg_video-noColor from video
var exitGalleryHamburger = $('#hamburger-icon').on('click', function() {

  $('#location').addClass('location-hide');

  $('#video').removeClass('ullscreen-bg-noColor').removeClass('fullscreen-bg');

  $('video').removeClass('fullscreen-bg_video-noColor');

    openNav();

});

//potential add surf report if hear back about api key in time
//$.ajax ( {
  //type: "GET",
  //url: 'http://magicseaweed.com/api/YOURAPIKEY/forecast/?Piha-Surf-Report/90/',
  //success: function (response){
    //console.log(response);
  //},
  //complete: function () {
  //$('#surf-report' 'div')....
  //}
//});

//user clicks 'CONTACT'
//side nav menu is hidden and contact items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #contact 
      //opening hours in the nav footer will be hidden
      //add class .nav-footerButtonOnly to #nav-footer h2
//user can email directly by clicking email address
  //user can click either menu hamburger-icon or logo to escape 'CONTACT'
var contactSelect = $('#contact').on('click', function() {
  
    $('#contact').addClass('selected');

    $('#nav-footer h2').addClass('nav-footerButtonOnly');
  
    hideMainMenuSideNav();

});

//user clicks 'OPENING HOURS'
//side nav menu is hidden and contact items are displayed in the side nav
//add class .hide-menu-item to #SidenavMenu
//add class .selected to #contact 
      //opening hours in the nav footer will be hidden
      //add class .nav-footerButtonOnly to #nav-footer h2
//user can email directly by clicking email address
  //user can click either menu hamburger-icon or logo to escape 'CONTACT'
var openingHoursSelect = $('#opening-hours').on('click', function() {
console.log (contactSelect);
});

//user clicks 'BOOK ONLINE' button
//Side nav is hidden and video changes to an image. Booking form (#bookings) items appear
//add class .hide-menu-item to #SidenavMenu and #nav-footer
//add class .navSlide-full
//remove class .fullscreen-bg and add class .fullscreen-bg-Changeout to first body div where video is stored
//add class .fullscreen-bg_video-Changeout to video
//add class .sidenav
//remove class .bookings-hide from #bookings
var bookOnlineButton = $('#book-now').on('click', function () {

hideMainMenuSideNav (); 

  $('#nav-footer').addClass('hide-menu-item').addClass('navSlide-full');

  $('#video').removeClass('fullscreen-bg').addClass('fullscreen-bg-Changeout');

  $('video').addClass('fullscreen-bg_video-Changeout');

  closeNav();

  $('#bookings').removeClass('#bookings-hide');

});

//add and store bookings using firebase database
$('#form').on('submit', function(e) {
e.preventDefault ();

var firstName = $('#firstName').val(),
        lastName = $('#lastName').val(),
        phone = $('#phone').val(),
        email = $('#email').val(),
        guests = $('#guests').val(),
        room = $('#room').val(),
        date = $('#date').val(),
        time = $('#time').val(), 
        comments = $('#comments').val();

var commentsRef = database.ref('comments');

commentsRef.push ({
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      guests: guests,
      room: room,
      date: date, 
      time: time,
      comments: comments,
  });
});

  
//can i do one for all? How?
function getComments() {
  database.ref('comments').on('value', function (results) {
    var lastComment = results.val();
    var comment = [];
    
  for (var item in lastComment) {
    var context = {
      comments: lastcomment[item].comments,
      commentsId: item
    };
    
    var source = $('#booking-template').html;
    var template = Handlebars.compile(source);
    var bookingElement = template('context');
    comments.push(bookingElement);

    }
  
    $ ('.comments').empty();

  for (var i in comments) {
    $('.comments').append(comments[i]);
    
    }
  });
}

function getComments() {
  
}

getComments();



//Option 4.
//user clicks 'OPENING HOURS' on the main page
//side nav opens and contact items are displayed. Call contact function.
$('#hours').on('click', function (){

console.log(openSideNav);

console.log (contactSelect);

});

//Option 5.
//user clicks 'BOOK ONLINE' on the main page
//Video changes to an image. Booking form (#bookings) items appear
//remove class .fullscreen-bg and add class .fullscreen-bg-Changeout to first body div where video is stored
//add class .fullscreen-bg_video-Changeout to video
//remove class .bookings-hide from #bookings
$('book-online').on('click', function (){

  console.log (bookOnlineButton);
  
});


//Option 6.
//user clicks social buttons. User is redirected to social pages by links


