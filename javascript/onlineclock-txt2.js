var c1 = new Image();
var c2 = new Image();
var c3 = new Image();
var c4 = new Image();
var c5 = new Image();
var c6 = new Image();
var c7 = new Image();
var c8 = new Image();
var c9 = new Image();
var c0 = new Image();
var cAM = new Image();
var cPM = new Image();

c1.src = "img/c1.gif";
c2.src = "img/c2.gif";
c3.src = "img/c3.gif";
c4.src = "img/c4.gif";
c5.src = "img/c5.gif";
c6.src = "img/c6.gif";
c7.src = "img/c7.gif";
c8.src = "img/c8.gif";
c9.src = "img/c9.gif";
c0.src = "img/c0.gif";
cAM.src = "img/cam.gif";
cPM.src = "img/cpm.gif";

function extract(h, m, s) {
	if (h <= 9) {
		document.images.a.style.width = 0;
	}
	else {
		document.images.a.width = document.images.b.width;
	}

	document.images.a.src = c1.src;
	document.images.b.src = eval("c" + (h % 10) + ".src");

	document.images.d.src = eval("c" + Math.floor(m / 10) + ".src");
	document.images.e.src = eval("c" + (m % 10) + ".src");

	document.images.g.src = eval("c" + Math.floor(s / 10) + ".src");
	document.images.h.src = eval("c" + (s % 10) + ".src");
}

function show() {
	var time = new Date();
	var hours = time.getHours();
	var minutes = time.getMinutes();
	var seconds = time.getSeconds();

	if (hours > 11) {
		document.images.i.src = cPM.src;
	}
	else {
		document.images.i.src = cAM.src;
	}

	hours = hours % 12
	if (hours == 0) {
		hours = 12;
	}
	extract(hours, minutes, seconds);
	setTimeout("show()", 1000);
}

function changeImageSize(theWidthVar) {
	var thatWidth = Math.floor(document.body.clientWidth);

	var changedClockSize = Math.floor(thatWidth / theWidthVar);
	var changedClockSizeA = changedClockSize + "px";
	var changedClockSizeB = Math.floor(changedClockSize / 2) + "px";

	var array = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];

	array.forEach(element => {

		if (element == "c" || element == "f") {
			document.getElementById(element).style.width = changedClockSizeB;
		}
		else {
			document.getElementById(element).style.width = changedClockSizeA;
		}
		document.getElementById(element).style.height = "auto";
	});
}
