// Mobile Navigation
const body = document.querySelector('body');

function mobileNavigationOn() {
    body.classList.add('mobile-menu-active');
}
function mobileNavigationOff() {
    body.classList.remove('mobile-menu-active');
}

// Banner Owl Carousel
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

// Testimonials Owl Carousel
$('.testimonials-owl').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
        0: {
            items: 1
        }
    },
    navText: [
        '<span class="material-symbols-outlined">arrow_left_alt</span>', 
        '<span class="material-symbols-outlined">arrow_right_alt</span>'
    ]
});

// Custom Accordion and Tabs
$(document).ready(function() {
    // Handle accordion header clicks
    $('.accordion-header').click(function() {
        // If this header is not already active
        if (!$(this).hasClass('active')) {
            // Close all other accordion contents
            $('.accordion-content').slideUp();
            $('.accordion-header').removeClass('active');
            
            // Open current accordion content
            $(this).addClass('active');
            $(this).next('.accordion-content').slideDown();
            
            // Handle tab switching
            const tabId = $(this).data('tab');
            $('.tab-content').removeClass('active');
            $('#' + tabId).addClass('active');
        }
        // If header is already active, do nothing
    });

    // Set initial state
    $('.accordion-header:first').addClass('active');
    $('.accordion-content:first').show();
});