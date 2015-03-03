function clock() { 
	var t = moment(),
		a = t.minutes() * 6,
		o = t.hours() % 12 / 12 * 360 + (a / 12),
		s = t.seconds() * 6;
	$(".hour").css("transform", "rotate(" + o + "deg)");
	$(".minute").css("transform", "rotate(" + a + "deg)");
	$(".second").css("transform", "rotate(" + s + "deg)");
}
function refreshClock() {
	clock(), setTimeout(refreshClock, 1000);
}
refreshClock();
