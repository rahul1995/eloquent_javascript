//Need to attach ancestry.js file before this

function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

// Your code here.
console.log(average(ancestry.reduce(function(arr, person) {
  if(byName[person.mother])
    return arr.concat(person.born - byName[person.mother].born);
  return arr;
}, [])));

// → 31.2