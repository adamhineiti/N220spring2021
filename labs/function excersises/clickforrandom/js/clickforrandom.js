let r, g, b;
 
function setup() {
  createCanvas(800, 600);
 
 
 
 
  r = random(255);
  g = random(255);
  b = random(255);
}
 
function draw() {
  background("orange");
  
 
 
 
 
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, "orange");
  ellipse(360, 200, 200, 200);
}
 
 
function mousePressed() {
  
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    
 
 
 
    
    r = random(255);
    g = random(255);
    b = random(255);
  }
}
