function setup() {
  createCanvas(2160/2, 1566/2);
	bg = loadImage('./drawings.png');
	draw_the_background = true
	background(255)
}

function draw() {
	if (draw_the_background) {
		image(bg, 0, 0, 2160/2, 1566/2);
	}

	strokeWeight(3);
  stroke(0);
  if (mouseIsPressed === true) {
		draw_the_background = false
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
