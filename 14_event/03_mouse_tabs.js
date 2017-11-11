function asTabs(node) {
  // Your code here.
  function prepend(child) {
    node.insertBefore(child, node.firstChild);
  }
  Array.prototype.slice.call(node.childNodes)
  .filter(node => node.nodeType === document.ELEMENT_NODE)
  .reverse().forEach(tab => {
    var button = document.createElement("button");
    button.textContent = button.className = tab.getAttribute("data-tabname");
    prepend(button);
  });
  
  node.addEventListener("click", event => {
    node.querySelectorAll("button").forEach(button => {
      if(button === event.target)
        button.style.backgroundColor = "pink";
      else button.style.backgroundColor = "";
    })
    node.querySelectorAll("div").forEach(div => {
      if(div.getAttribute("data-tabname") === event.target.className)
        div.style.display = "block";
      else div.style.display = "none";
    });
  });
  node.firstChild.click();
}
asTabs(document.querySelector("#wrapper"));