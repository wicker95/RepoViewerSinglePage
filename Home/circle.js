'use strict';

var canvas = undefined;

function setup() {
	canvas = createCanvas(windowWidth, windowHeight);
	
	textFont('Roboto Mono');
}

function draw() {
	background(0);

	stroke(255);
	noFill();

	var now = new Date();

	var mil = now.getMilliseconds();
	var sec = now.getSeconds() + mil / 1000;
	var s = sec / 60;
	var min = now.getMinutes() + s;
	var m = min / 60;
	//var hou = now.getHours() % 12 + m;
	var hou = now.getHours() + m;
	var h = hou / 12;

	translate(width / 2, height / 2);

	var x = Math.min(width, height) * 0.9;
	var x2 = x * 0.9;
	var x3 = x * 0.8;

	strokeCap(SQUARE);
	strokeWeight(30 / 1000 * x);
	textAlign(CENTER, CENTER);

	push();
	rotate(-HALF_PI);

	arc(0, 0, x, x, 0, h * TAU);
	arc(0, 0, x2, x2, 0, m * TAU);
	arc(0, 0, x3, x3, 0, s * TAU);
	pop();

	noStroke();
	fill(255);

	textSize(100 / 1000 * x);
	var clockText = [floor(hou), floor(min), floor(sec)].map(function (n) {
		return ('0' + n).slice(-2);
	}).join(':');
	text(clockText, 0, 0);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
//# sourceURL=pen.js
