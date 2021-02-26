function setup() {
    createCanvas(800, 600); // canvas size
    noStroke(); // stops outlines
    for (let i = 0; i < 230; i++) { // draw circles
      fill(random(500), random(500), random(500), random(500)); // color lightness
      ellipse(random(windowWidth), random(windowHeight), random(600)); // code to do with the ellipse itself 
    }
  }
