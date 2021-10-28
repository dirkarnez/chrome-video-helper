document.addEventListener('keydown', function (e) {
	if (!window.location.href.startsWith("file://")) {
		return;
	}
	const videoArray = Array.from(document.getElementsByTagName("video"));
	if (videoArray.length != 1) {
		return;
	}
	const video = videoArray[0];
	
	const keyCode = e.code;
	if (keyCode == "ArrowLeft") {
		video.currentTime -= 5;
	} else if (keyCode == "ArrowRight") {
		video.currentTime += 5;
	}
});

