function byTagName(node, tagName) {
  // Your code here.
  var result = [];
  tagName = tagName.toUpperCase();
  (function recurse(node) {
    node.childNodes.forEach(function(node) {
      if(node.tagName === tagName) {
        result.push(node);
      }
      recurse(node);
    });
  })(node);
  return result;
}

console.log(byTagName(document.body, "h1").length);
// → 1
console.log(byTagName(document.body, "span").length);
// → 3
var para = document.querySelector("p");
console.log(byTagName(para, "span").length);
// → 2