function setup() {
  createCanvas(640, 480);
  background(128, 0, 64);
  noFill();

  stroke(255, 0, 0);

/*
  var x;

  x = 1;
  ellipse(x * 150, 100, 50, 50);

  x = 2;
  ellipse(x * 150, 100, 50, 50);

  x = 3;
  ellipse(x * 150, 100, 50, 50);
  */
   for (var x = 1; x <=8; x++)
  {
    ellipse(x * 70, x * 20 + 100, x + 50, x * 10);
  }
}