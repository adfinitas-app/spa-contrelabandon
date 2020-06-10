$(document).ready(function () {
	const videoPath = $('.video-container').data('url');
	const video = $(`
		<video autoplay class="video">
			<source src="${videoPath}" type="video/mp4" />
		</video>
	`);
	const videoMobile = $(`
		<video class="video">
			<source src="${videoPath}" type="video/mp4" />
		</video>
	`);

	//desktop
	if ($(window).width() > 768) {		
		$('.video-container').html(video);
	} else {
		$('#modal-video .modal-body').append(videoMobile);
	}

	$(".btn-skip").on("click", function (e) {
		e.preventDefault();

		video.get(0).pause();
		video.trigger("ended");
	});

	let ended = false;
	video.on("ended", function () {
		if (ended === true) return;
		ended = true;
		$(".btn-skip").hide();
		$(".btn-skip")
			.next(".btn-nav")
			.removeClass("d-none")
			.next(".btn-nav")
			.removeClass("d-none");
		$(".carousel-animal-item.active").find(".animal-label").css("opacity", "0");

		$('.video-container').fadeOut(200, function () {
			$(".carousel-animals").css("opacity", "1");
			$(".header").css("background-image", "none").css({ "background-color": "transparent" });
			$(".carousel-animals").css("height", "450px");
			setTimeout(() => {
				$(".header.desktop .carousel-animal-item.active")
					.find(".animal-label")
					.css("opacity", "");
			}, 100);
		});
	});

	if (getQueryParameter("skip_video") === "true" || $(window).width() <= 768) {
		video.trigger("ended");
	}

	$(".js-play-video").on("click", function (e) {
		e.preventDefault();

		const modalVideo = $(this).data("modal");
		$(modalVideo).modal("show");
	});

	$("#modal-video").on("shown.bs.modal", function () {
		videoMobile.css("width", "100%");
		videoMobile.get(0).play();
	});

	$("#modal-video").on("hidden.bs.modal", function () {
		videoMobile.get(0).pause();
	});
});
