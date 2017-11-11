var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
// Your code here.
var angle = 0, lastTime = null;
function animate(time) {
  angle += (time - lastTime) * 0.0015;
  lastTime = time;
  cat.style.left = (Math.cos(angle) * 200 + 200) + "px";
  cat.style.top = (Math.sin(angle) * 50 + 50) + "px";
  hat.style.left = (Math.cos(angle + Math.PI) * 200 + 200) + "px";
  hat.style.top = (Math.sin(angle + Math.PI) * 50 + 50) + "px";
  
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);