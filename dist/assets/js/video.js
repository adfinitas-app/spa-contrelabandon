"use strict";$(document).ready((function(){var e=$(".video");$(window).resize((function(){$(this).width()})),$(".btn-skip").on("click",(function(n){n.preventDefault(),e.trigger("ended")}));var n=!1;e.on("ended",(function(){!0!==n&&(n=!0,$(".btn-skip").hide(),$(".btn-skip").next(".btn-nav").removeClass("d-none").next(".btn-nav").removeClass("d-none"),$(".carousel-animal-item.active").find(".animal-label").css("opacity","0"),e.fadeOut(200,(function(){$(".carousel-animals").css("opacity","1"),$(".header").css("background-image","none").css({"background-color":"transparent"}),$(".carousel-animals").css("height","450px"),setTimeout((function(){$(".header.desktop .carousel-animal-item.active").find(".animal-label").css("opacity","")}),100)})))})),("true"===getQueryParameter("skip_video")||$(window).width()<=768)&&e.trigger("ended")}));