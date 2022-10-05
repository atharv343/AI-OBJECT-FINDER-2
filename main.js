objects = [];
status = "";


function setup() {
  canvas = createCanvas(540, 380);
  canvas.position(380,120);
  video = createCapture(VIDEO);
  video.size(500,380);
  video.hide();
}
function draw(){
  image(video,0,0,540,380);
}
function start(){
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Status : Detecting Objects";
}
function modelLoaded(){
  console.log("Model Loaded");
  status=true;
  video.loop();
  video.speed(1);
  video.volume(0);
}