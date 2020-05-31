$(document).ready(function () {
	$(".js-toggle").on("click", function (e) {
		e.preventDefault();
		$($(this).data("target")).toggle();
	});
});
