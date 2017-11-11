addEventListener("mousemove", event => {
	var trail = document.createElement("div");
	trail.className = "trail";
	trail.style.left = event.pageX + "px";
	trail.style.top = event.pageY + "px";
	document.body.appendChild(trail);
	setTimeout(function() {
	  trail.remove();
	}, 250);
});