function setup() {
  createCanvas(1200, 700);
	bg = loadImage('./drawing.png');
	draw_the_background = true
	background(255)
}

function draw() {
	if (draw_the_background) {
		image(bg, 350, 100);
	}

	strokeWeight(3);
  stroke(0);
  if (mouseIsPressed === true) {
		draw_the_background = false
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
