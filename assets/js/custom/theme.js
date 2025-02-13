// Mobile Navigation
const body = document.querySelector('body');

function mobileNavigationOn() {
    body.classList.add('mobile-menu-active');
}
function mobileNavigationOff() {
    body.classList.remove('mobile-menu-active');
}

// Owl Carousel
$('.hero-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive:{
        0:{
            items:1
        },
    }
})