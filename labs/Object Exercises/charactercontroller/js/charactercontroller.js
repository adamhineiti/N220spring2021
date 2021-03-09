    let xPos=500;
    let yPos=500;


    function setup() {
createCanvas(800, 600);
fill("blue");
}

    function draw() {
background("red");
update();

}

    function update()
{
    if (keyIsDown(LEFT_ARROW)) {
xPos =xPos- 2;
}

    if (keyIsDown(RIGHT_ARROW)) {
xPos =xPos+ 2;
}

    if (keyIsDown(UP_ARROW)) {
yPos =yPos- 2;
}

    if (keyIsDown(DOWN_ARROW)) {
yPos = yPos+ 2;
}


circle(xPos, yPos, 50);
}