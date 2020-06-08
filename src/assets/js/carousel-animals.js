$(document).ready(function() {
    const defaultMini = $('.mini-nav-item.active');

    $('.header.desktop .carousel-animal-item').hover(function() {
        $('.carousel-animal-item.active').removeClass('active');
        $(this).addClass('active');
    });

    // $('.header.mobile .carousel-mobile-item').click(function(e) {
    //     if ($(this).hasClass('active') === false)
    //         e.preventDefault();
    //     $('.carousel-mobile-item.active').removeClass('active');
    //     $(this).addClass('active');
    // });
    
    let actualSelected = 1;
    $('.header.mobile .carousel-mobile').scroll(function() {
        const left = $(this).scrollLeft()
        const carouselWidth = $('.header.mobile .carousel-mobile').width();

        let offsetToSelect = 1;

        if (left === 0)
            offsetToSelect = 1;
        else {
            const dist = (left + carouselWidth) / $(this)[0].scrollWidth;
            offsetToSelect = parseInt(dist / 0.20);

            if (dist >= 0.98)
                offsetToSelect = 5;
        }

        if (offsetToSelect === actualSelected)
            return;
        actualSelected = offsetToSelect;
        $('.header.mobile .carousel-mobile-item').removeClass('active');
        $('.header.mobile .carousel-mobile-item.'+offsetToSelect).addClass('active');

    });

    $('.mini-nav-item').hover(function() {
        $(this).siblings('.mini-nav-item.active').removeClass('active');
        $(this).addClass('active');
    }, function() {
        
    });

    $('.mini-nav').hover(function() {

    }, function() {
        $('.mini-nav-item.active').removeClass('active');
        defaultMini.addClass('active');
    });
});