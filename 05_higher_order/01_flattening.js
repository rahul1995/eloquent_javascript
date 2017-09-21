var arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
Array.prototype.flatten2D = function() {
  return this.reduce(function(result, current) {
    return result.concat(current);
  }, []);
}
console.log(arrays.flatten2D());
// → [1, 2, 3, 4, 5, 6]