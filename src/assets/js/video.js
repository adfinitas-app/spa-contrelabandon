$(document).ready(function () {
	let breakpoint = 1000;
	const video = $(".video");

	checkBroke($(window).width());

	function checkBroke(width) {
		if (width > breakpoint) {
			video.css({ height: "auto", width: "100%" });
		} else if (width <= breakpoint) {
			video.css({ height: "100%", width: "auto" });
		}
	}

	$(window).resize(function () {
		const _this = $(this);
		const width = _this.width();

		checkBroke(width);
	});

	$(".btn-skip").on("click", function (e) {
		e.preventDefault();

		video.trigger("ended");
	});

	let ended = false;
	video.on("ended", function () {
		if (ended === true) return;
        ended = true;
        $(".btn-skip").hide();
		$('.btn-skip').next('.btn-nav').removeClass('d-none').next('.btn-nav').removeClass('d-none');
		$(".carousel-animal-item.active").find(".animal-label").css("opacity", "0");

		video.fadeOut(function () {
			$(".carousel-animals").css("opacity", "1");
			$(".header").css("background-image", "none").css({ "background-color": "transparent" });
			$(".carousel-animals").css("height", "500px");
			setTimeout(() => {
				$(".carousel-animal-item.active").find(".animal-label").css("opacity", "");
			}, 400);
		});
	});

	if (getQueryParameter('skip_video') === 'true') {
		video.trigger('ended');
	}
});
