// Get the current year for the copyright 

$('#year').text(new Date().getFullYear());




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




// $("#gallery1").click(function(){
//     $(".gallery-slider").removeClass("d-block");
//     $(".gallery-slider").addClass("d-none");
//     $("#gallery-slider1").removeClass("d-none");
//     $("#gallery-slider1").addClass("d-block");
// });

// $("#gallery2").click(function(){
//     $(".gallery-slider").removeClass("d-block");
//     $(".gallery-slider").addClass("d-none");
//     $("#gallery-slider2").removeClass("d-none");
//     $("#gallery-slider2").addClass("d-block");
// });

// $("#gallery3").click(function(){
//     $(".gallery-slider").removeClass("d-block");
//     $(".gallery-slider").addClass("d-none");
//     $("#gallery-slider3").removeClass("d-none");
//     $("#gallery-slider3").addClass("d-block");
// });



  