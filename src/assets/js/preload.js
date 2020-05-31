var images = new Array();

function preload(array) {
	for (var i = 0; i < array.length; i++) {
		images[i] = new Image();
		images[i].src = array[i];
	}
}
preload([
	
]);
