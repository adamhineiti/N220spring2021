/*
 
N220 Section 23459
Adam Hineiti 
Snake 
16 February 2021
 
*/
 
"use strict";

    var radius = 20;
    var x = [0,0,0,0,0,0,0,0,0,0,0];
    var y = [0,0,0,0,0,0,0,0,0,0,0];
    function setup() {

    createCanvas(800, 600);

}

    function draw() {
    
        x.shift();
    
    x.push(mouseX);
    
    y.shift();
    
    y.push(mouseY);
    
    background('red');
    
    for(let i=0;i<10;i++){
    
        ellipse( x[i], y[i], radius, radius );
}
}
