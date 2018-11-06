
var canvas = document.getElementById("canvas1");
if (canvas.getContext)
{
  context = canvas.getContext('2d');
}

function drawCurve()
{
  context.beginPath();
  context.fillStyle="rgb(138, 9, 8)";
  context.moveTo(100,200);
  context.quadraticCurveTo(200, 100, 300, 200);
  context.fill();
  context.beginPath();
  context.fillStyle="rgb(138, 9, 8)";
  context.moveTo(100,200);
  context.quadraticCurveTo(200,300, 300, 200);
  context.fill();
}
{
  context.beginPath();
  context.fillStyle="rgb(14, 9, 8)";
  context.moveTo(140,200);
  context.quadraticCurveTo(200, 20, 260, 200);
  context.fill();

}
drawCurve();
