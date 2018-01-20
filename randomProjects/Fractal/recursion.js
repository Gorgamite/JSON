function draw(){
  createCanvas(800,800);
  background(51);
  stroke(255);
  noFill();
  drawCircle(300,200,300);

}
function drawCircle(x,y,d){ 
   ellipse(x,y,d);
   if(d>2){

     drawCircle(x-(d*0.5),y,d*0.5);
     drawCircle(x+(d*0.5),y,d*0.5);
     drawCircle(x,y+(d*0.5),d*0.5);
     //drawCircle(x,y-(d*0.5),(d*0.5));
   }
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
