let uName,uPassword, button, check;

function setup() {
  
  createCanvas(800, 600);

  
  
  uName = createInput();
  textSize(20);
  text('Enter user name', 30,85);
  uName.position(20, 115);
  uPassword = createInput();
  text('Enter Password', 30,175);
  uPassword.position(20, 195);
  
 
  button = createButton('submit');
  button.position( 80, 245);
  button.size
  button.mousePressed(appendElement);

  
 
  check = createElement('h2', '');
  check.position(20, 5);

  textAlign(CENTER);
  textSize(50);
}

function appendElement() {
  const name = uName.value();
  const pass=uPassword.value();
  
  if(name==="Username" && pass==="Password")
    {
       check.html('Success');
    }
     else
       
       check.html('Wrong information');
}