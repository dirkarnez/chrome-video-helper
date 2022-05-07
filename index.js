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
	} else if (keyCode == "s" || keyCode == "S") {
		const currentTime = document.getElementsByTagName("video")[0].currentTime;
		const event = new Date(2000, 1, 1, 0);
		event.setSeconds(~~currentTime);
		event.setMilliseconds((~~(currentTime - (~~currentTime)) * 1000)); // 3 digits
		console.log(event.toTimeString().substring(0, 8) + "." + event.getMilliseconds());
	}
});

