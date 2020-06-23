// canvas is used to draw graphics
W=1000
H=1000
function init() {
  canvas = document.getElementById("mycanvas");
  canvas.width = 500;
  canvas.height = 500;
  pen = canvas.getContext("2d");
  rect = {
    x: 20,
    y: 20,
    w: 40,
    h: 40,
    speed: 10,
  };
  console.log("In Init");
}

function draw() {
  pen.clearRect(0, 0, W, H);
  pen.fillRect(rect.x, rect.y, rect.w, rect.h);
  pen.fillStyle = "red";
}

function update() {
  rect.x += rect.speed;
  rect.y += rect.speed;
  if(rect.x > W-rect.w|| rect.x < 0){
      rect.speed *= -1;
      rect.speed *= -1;
  }
}

function gameloop() {
  console.log("In Gameloop");
  draw();
  update();
}

init();
setInterval(gameloop, 100);
