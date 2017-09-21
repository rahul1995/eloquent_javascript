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
console.log(average(ancestry.filter(function(person) {
  return byName[person.mother];
}).map(function(person) {
    return (person.born - byName[person.mother].born);
})));

// → 31.2