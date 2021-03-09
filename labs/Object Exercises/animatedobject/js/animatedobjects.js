    function setup()
{
    createCanvas(800, 600);
}


    function draw(){

    this.x=50;
    this.y=50;
    this.size=100;

    background("blue");

    
    let clr = color("red");
fill(clr);  
circle(x,y,size);
}