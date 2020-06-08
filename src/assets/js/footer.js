$(document).ready(function () {
	let eventOn = false;

	function handleClose(e) {
		$("#moreNav, #moreFooter").hide();
		$("html").off("click", handleClose);
		eventOn = false;
	}

	$(".js-toggle").on("click", function (e) {
		e.preventDefault();

		const target = $(this).data("target");
		$(target).toggle();

		e.stopPropagation();
		if (eventOn === false) {
			$("html").on("click", handleClose);
			eventOn = true;
		}
	});
});
