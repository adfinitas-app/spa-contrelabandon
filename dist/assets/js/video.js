"use strict";$(document).ready((function(){var e=$(".video-container").data("url"),n=$('\n\t\t<video class="video">\n\t\t\t<source src="'.concat(e,'" type="video/mp4" />\n\t\t</video>\n\t')),o=$('\n\t\t<video controls class="video">\n\t\t\t<source src="'.concat(e,'" type="video/mp4" />\n\t\t</video>\n\t'));$(".video-preview-container").click((function(){$(this).hide(),$(".video-control-container").show(),n.show(),n.get(0).play()})),$(".video-control.reset").click((function(){n.get(0).currentTime=0})),$(".video-control.play").click((function(){n.get(0).play()})),$(".video-control.pause").click((function(){n.get(0).pause()})),$(window).width()>768?$(".video-container").append(n):$("#modal-video .modal-body").append(o),$(".btn-skip").on("click",(function(e){e.preventDefault(),n.get(0).pause(),n.trigger("ended")}));var t=!1;n.on("ended",(function(){!0!==t&&(t=!0,$(".btn-skip").hide(),$(".btn-skip").next(".btn-nav").removeClass("d-none").next(".btn-nav").removeClass("d-none"),$(".carousel-animal-item.active").find(".animal-label").css("opacity","0"),$(".video-container").fadeOut(200,(function(){$(".carousel-animals").css("opacity","1"),$(".header").css("background-image","none").css({"background-color":"transparent"}),$(".carousel-animals").css("height","450px"),setTimeout((function(){$(".header.desktop .carousel-animal-item.active").find(".animal-label").css("opacity","")}),100)})))})),("true"===getQueryParameter("skip_video")||$(window).width()<=768)&&n.trigger("ended"),$(".js-play-video").on("click",(function(e){e.preventDefault();var n=$(this).data("modal");$(n).modal("show")})),$("#modal-video").on("shown.bs.modal",(function(){o.css("width","100%"),o.get(0).play()})),$("#modal-video").on("hidden.bs.modal",(function(){o.get(0).pause()}))}));