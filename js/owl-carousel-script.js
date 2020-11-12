$(document).ready(function(){
    // owl carousel
    
    $('.owl-carousel').owlCarousel({
        center: true,
        items:2,
        loop: false,
        margin: 10,
        nav: true,
        navClass: ["slider-nav-left", "slider-nav-right"],
        responsive:{
            0:{
                items:1.3
            },
            300:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    
    
    $(".owl-carousel").owlCarousel();
    
});