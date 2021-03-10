let pg;

function setup() {    
    createCanvas(800, 600);
    pg = createGraphics(249, 650);
}


function draw()


{

fill (10, 12);

rect (0,0, width, height);

fill (255);

noStroke();

ellipse(mouseX, mouseY, 60, 60);

pg.nofill();
pg.background(51);
pg.stroke(255);
pg.ellipse(mouseX-150, mouseY-75, 60, 60);

image(pg, 150, 75);

}




