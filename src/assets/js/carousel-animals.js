$(document).ready(function() {
    $('.carousel-animal-item').hover(function() {
        $(this).siblings('.carousel-animal-item.active').removeClass('active');
        $(this).addClass('active');
    });
});