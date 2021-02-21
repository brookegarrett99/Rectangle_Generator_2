let scribble;
var d;
let x = 0;
var r = [236, 221, 214,165, 136, 106, 65, 31,31, 31, 31, 31,31,31,31,246]
var g = [255,255,255,255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255] 
var b = [31,31,31,31,31, 31, 31, 72, 87, 98, 117, 150, 173, 184, 192, 0]  
function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  
 scribble = new Scribble ();
  gui = new Gui();
let gui_setup = new dat.GUI();
  gui_setup.add(gui, 'Rectangles', 0, 4).step(1);
  gui_setup.add(gui, 'Distance', 0, 185).step(1);
  gui_setup.add(gui, 'strokeWeight', 0, 10).step(1);

  

  
}


function draw() {
  background(150); 
   stroke(0);
  strokeWeight(2);
 scribble.scribbleFilling( [0,3000,3000,0], [0,0,3000,3000], 5, 90 );

  
  
  //  rect(20, 20, 200, 200);fill(236, 255, 31); 
 //  noStroke(); rect(221, 20, 200, 200);fill(221, 255, 31);rect(422, 20, 200, 200);fill(214, 255, 31);rect(623, 20, 200, 200);fill(165, 255, 31);
  
 //  rect(20, 221, 200, 200);fill(136, 255, 31); 
 //  rect(221, 221, 200, 200);fill(106, 255, 31);rect(422, 221, 200, 200);fill(65, 255, 31);rect(623, 221, 200, 200);fill(31, 255, 72);
  
 //  rect(20, 422, 200, 200);fill(31, 255, 87);
 // rect(221, 422, 200, 200);fill(31, 255, 98);rect(422, 422, 200, 200);fill(31, 255, 117);rect(623, 422, 200, 200);fill(31, 255, 150);
  
 //rect(20, 623, 200, 200);fill(31, 255, 173); 
 // rect(221, 623, 200, 200);fill(31, 255, 184);rect(422, 623, 200, 200);fill(31, 255, 192);rect(623, 623, 200, 200);fill(246, 255, 0);

  for(var i = 0; i < gui.Rectangles; i++) {
    strokeWeight(gui.strokeWeight);
    rect(x, 20 + i * 200, 200-gui.Distance, 200);fill(r[i], g[i], b[i]);
    
    rect(x+200, 20 + i * 200, 200-gui.Distance,200);fill(r[i* 1+4],g[i* 1+4],b[i* 1+4]);
    rect(x+400, 20 + i * 200, 200-gui.Distance,200);fill(r[i + 8],g[i+8], b[i+8]);
    rect(x+600, 20 +i *200,200-gui.Distance,200);fill(r[i+12], g[i+12], b[i+12]);
    
    
    x = x + 1;
  if (x > width) {
    x = 0;
  }
  }
  
  
}

//function mousePressed() {
//  loop();
//}

// function mouseReleased() {
//   noLoop();
// }

function update() {
 redraw();
}

function Gui() {
  this.Rectangles = 4;
  this.strokeWeight = 4;
  this.Distance = random(0,185);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}