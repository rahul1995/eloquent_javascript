var field = document.querySelector("input");
// Your code here.
field.addEventListener("keydown", event => {
if(event.keyCode === "Q".charCodeAt(0) ||
   event.keyCode === "W".charCodeAt(0) ||
   event.keyCode === "X".charCodeAt(0))
  event.preventDefault();
});