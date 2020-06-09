$(document).ready(function () {
	const btnDon = $(".button-don.btn-nav");

	const qs = parseQueryStrings();

	function queryContain(key) {
		if (!qs) return false;
		for (let i = 0; i < qs.length; i++) {
			if (qs[i][0] === key) return qs[i][1];
		}
		return false;
	}

	const reserved_code_media = queryContain("reserved_code_media");

	if (reserved_code_media !== false) {
		if (reserved_code_media === "" || reserved_code_media.slice(0, 4) === "W20P") {
			addOrModifyQueryParameter(btnDon, "cid", "224", "href");
			if (reserved_code_media === "")
				addOrModifyQueryParameter(
					btnDon,
					"reserved_code_media",
					"W20PD0ZZL",
					"href"
				);
		} else if (reserved_code_media.slice(0, 4) === "W20F") {
			addOrModifyQueryParameter(btnDon, "cid", "223", "href");
		}
	}

});
