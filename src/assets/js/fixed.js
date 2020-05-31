$(document).ready(function () {
	$(".fixed").each(function () {
		$(this).width($(this).parent().width());
	});

	$(window).on("resize", function () {
		$(".fixed").each(function () {
			$(this).width($(this).parent().width());
		});
	});
});
