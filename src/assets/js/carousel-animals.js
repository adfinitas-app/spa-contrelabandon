$(document).ready(function() {
    const defaultMini = $('.mini-nav-item.active');

    $('.carousel-animal-item').hover(function() {
        $('.carousel-animal-item.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.mini-nav-item').hover(function() {
        $(this).siblings('.mini-nav-item.active').removeClass('active');
        $(this).addClass('active');
    }, function() {
        // $('.mini-nav-item.active').removeClass('active');
        // defaultMini.addClass('active');
    });

    $('.mini-nav').hover(function() {

    }, function() {
        $('.mini-nav-item.active').removeClass('active');
        defaultMini.addClass('active');
    });

    const carouselAnimals = new Swiper('.swiper-container', {
        //slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        //centeredSlides: true
    });
});