function withBoxUnlocked(body) {
  // Your code here.
  var initiallyLocked = box.locked;
  if(initiallyLocked)
  	box.unlock();
  try {
  	body();
  } finally {
    if(initiallyLocked)
      box.lock();
  }
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}
console.log(box.locked);
// → true