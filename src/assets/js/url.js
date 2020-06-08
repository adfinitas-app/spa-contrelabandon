const authorized_keys = [
	"reserved_code_media",
	"email",
	"wv_email",
	"firstname",
	"wv_firstname",
	"lastname",
	"wv_lastname",
	"utm_source",
	"utm_campaign",
	"utm_medium",
];

transferQueryParams(
	$(".button-don, .carousel-animal-item, .btn-back, .btn-review, .mini-nav-item, .bloc-don")
);

function getQueryParameter(key, url = location.search) {
	if (!url) return null;
	key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
	var match = url.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
	if (match === null) {
		const t = url.match(new RegExp('&' + key + "="));
		if (t) return "";
	}
	return match && decodeURIComponent(match[1].replace(/\+/g, " "));
}

function parseQueryStrings() {
	const pairs = location.search.substr(1).split("&");
	const qs = [];

	for (let i = 0; i < pairs.length; i++) {
		const pair = pairs[i];

		if (pair === "") return;
		var parts = pair.split("=");
		qs.push([parts[0], parts[1] && decodeURIComponent(parts[1].replace(/\+/g, " "))]);
	}
	return qs;
}

function addOrModifyQueryParameter(elem, parameter, newValue, attr = "href") {
	if (!elem || elem.length === 0) return false;

	let elemHref = elem.attr(attr);

	if (elemHref === "#") return "";
	else if (elemHref.charAt(0) === "/") elemHref = window.location.origin + elemHref;

	const extract = elemHref.split("?");

	const elemValue = getQueryParameter(parameter, extract.length === 2 ? "?" + extract[1] : null);


	let addedInterrogation = false;
	let newElemHref = elem.attr(attr);
	let hashtag = "";

	if (newElemHref.indexOf("#") >= 0) {
		// Temporarily remove # at the end of url
		hashtag = newElemHref.substring(newElemHref.indexOf("#"));
		newElemHref = newElemHref.slice(0, newElemHref.indexOf("#"));
	}

	if (newElemHref.indexOf("?") < 0) {
		// Insert ? if not present
		newElemHref += "?";
		addedInterrogation = true;
	}

	if (elemValue === "" || elemValue) {
		// Modify
		newElemHref = newElemHref.replace(`${parameter}=${elemValue}`, `${parameter}=${newValue}`);
	} else {
		// Add
		if (addedInterrogation) newElemHref += `${parameter}=${newValue}`;
		else newElemHref += `&${parameter}=${newValue}`;
	}
	elem.attr(attr, newElemHref + hashtag);
}

function transferQueryParams($links, attr = "href") {
	const qs = parseQueryStrings();

	if (!qs) return;
	for (let i = 0; i < qs.length; i++) {
		const key = qs[i][0];
		const value = qs[i][1];

		$links.each(function () {
			if (authorized_keys.indexOf(key) >= 0) {
				addOrModifyQueryParameter($(this), key, value, attr);
			}
		});
	}
}
