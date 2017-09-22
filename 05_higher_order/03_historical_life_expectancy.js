function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// Your code here.

function groupBy(arr, f) {
  var map = {};
  arr.forEach(function(el){
    var key = f(el);
    map[key] = map[key] == undefined ? [el] : map[key].concat(el);
  });
  return map;
}

function century(person) {
  return Math.ceil(person.died/100);
}

var map = groupBy(ancestry, century);
for(var century in map) {
  var arr = map[century];
  map[century] = average(arr.map(function(person) {
    return person.died - person.born
  }));
}

console.log(map);


// → 16: 43.5
//   17: 51.2
//   18: 52.8
//   19: 54.8
//   20: 84.7
//   21: 94