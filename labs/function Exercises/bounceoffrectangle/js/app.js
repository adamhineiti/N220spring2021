const ball={
  x : 100,         
  y : 100,       

  xVel : -5,      
  yVel : 5,    

  width : 50,
  height : 50

}

const box={

  x : 150,
  y : 450,

  width : 350,
  height : 350

}




function setup() {

  createCanvas(800, 600);    

}

function draw() {

  background("green");

  fill("blue");



  ball.x = ball.x + ball.xVel;     

  ball.y = ball.y + ball.yVel;     


  if (ball.x < 0 || ball.x > 800) {   
      ball.xVel = ball.xVel * -1;

  }

  if (ball.y < 0 || ball.y > 600) {    
      ball.yVel = ball.yVel * -1;
  }

  if (collideRect(ball.x, ball.y, box.x, box.y, box.width, box.height)) {
    ball.yVel = ball.yVel * -1;
  }

  ellipse(ball.x, ball.y, ball.height, ball.width);



  rect(box.x, box.y, box.width, box.height);

}




function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

  if(circleX > rectX && circleX < rectX + rectW) {

      if(circleY > rectY && circleY < rectY + rectH) {

            return true;

      }

 }

 return false;

}
