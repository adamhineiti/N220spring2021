function setup() {
    createCanvas(1400, 800);
}

function draw() {
    
    background("lightblue"); 

    for (var i = 0; i < 10; i++) {

        // x position of ball
        var x = 125 * i + 75
        // y position of ball
        var y = mouseY
        // size of ball
        var size = 120

        // when mouse is to left of ball
        if (mouseX > x) {
            // increase size by how far close the ball is (*.075)
            size += .075*(x - mouseX)

        // when mouse is to left of ball
        } else {

            // increase size by how far close the ball is (*.075)
            size += .075*(mouseX - x)
        }

        circle(x, y, size);

        fill("gray");

    }


    fill("gray");
}