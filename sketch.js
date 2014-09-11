function setup() {
  createCanvas(640, 480);
  
  noFill();

  stroke(255, 0, 0);

}

function draw () {

   background(128, 0, 64);

for (var x = 1; x <= 8; x++)
{
  ellipse(x * 70, x * 20 + 100, x+50, x*10);
}

var size =    Math.abs(mouseX - 320);

ellipse(320, 240, mouseX, mouseY);

}