"use strict";$(document).ready((function(){var e=$(".mini-nav-item.active");$(".header.desktop .carousel-animal-item").hover((function(){$(".carousel-animal-item.active").removeClass("active"),$(this).addClass("active")}));var i=1;$(".header.mobile .carousel-mobile").scroll((function(){var e=$(this).scrollLeft(),a=$(".header.mobile .carousel-mobile").width(),t=1;if(0===e)t=1;else{var s=(e+a)/$(this)[0].scrollWidth;t=parseInt(s/.2),s>=.98&&(t=5)}t!==i&&(i=t,$(".header.mobile .carousel-mobile-item").removeClass("active"),$(".header.mobile .carousel-mobile-item."+t).addClass("active"))})),$(".mini-nav-item").hover((function(){$(this).siblings(".mini-nav-item.active").removeClass("active"),$(this).addClass("active")}),(function(){})),$(".mini-nav").hover((function(){}),(function(){$(".mini-nav-item.active").removeClass("active"),e.addClass("active")}));new Swiper(".swiper-container",{spaceBetween:30,freeMode:!0})}));