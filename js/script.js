// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());


// Init carousel

$('.carousel').carousel()


// Sticky navbar

$(document).ready(function() {
    $('.js--sticky-navbar-offset').waypoint(function(direction) {
        if (direction == "down") {
            $('#navbar-sticky').removeClass('d-md-none');
            $('#navbar-sticky').addClass('fixed-top');
        } else {
            $('#navbar-sticky').removeClass('fixed-top');
            $('#navbar-sticky').addClass('d-md-none');
        }
    }, {
        offset: '60px;'
    });
});


// Hide mobile menu after click

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
