// Your code here.

function every(arr, predicate) {
  for(var i = 0; i < arr.length; i++) {
    if(!predicate(arr[i]))
      return false;
  }
  return true;
}

function some(arr, predicate) {
  for(var i = 0; i < arr.length; i++) {
    if(predicate(arr[i]))
      return true;
  }
  return false;
}

/*Recursive versions*/

function everyR(arr, predicate) {
  //console.log("processing everyR with arr: " + arr + " and arrlen: " + arr.length);
  if(arr.length == 0)
    return true;
  return predicate(arr[0]) && everyR(arr.slice(1), predicate);
}

function someR(arr, predicate) {
  //console.log("processing someR with arr: " + arr + " and arrlen: " + arr.length);
  if(arr.length == 0)
    return false;
  return predicate(arr[0]) || someR(arr.slice(1), predicate);
}

console.log(every([NaN, NaN, NaN], isNaN));
// → true
console.log(every([NaN, NaN, 4], isNaN));
// → false
console.log(some([NaN, 3, 4], isNaN));
// → true
console.log(some([2, 3, 4], isNaN));
// → false