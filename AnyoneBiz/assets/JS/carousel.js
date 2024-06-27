document.addEventListener('DOMContentLoaded', function() {
    var owlCarousel = $('#owl-carousel');
    owlCarousel.owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
          
        }
    });
});