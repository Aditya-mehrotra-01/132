img="";
 status="";
function preload() {
    img=loadImage("room.jpg");
    
}
function draw() {
    image(img,0,0,640,420);
    fill('#FF0000');
   text("table",200,160);
   noFill();
   stroke("#FF0000");
   rect(440,250,105,130);

}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd' , modelLoaded);
  document.getElementById("status").innerHTML="Status = Detecting object";

}

function modelLoaded() {
    console.log( " MODEL LOADED ");
    status = true;
    objectDetector.detect(img,gotResults)
} 

function gotResults(error,results) {
  if (error ) {
 console.log(error);

  }
  console.log(results);
}


