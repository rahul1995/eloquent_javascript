// Your code here.

function logFive(seq) {
  count = 0;
  while(count < Math.min(5, seq.length)) {
    console.log(seq.nth(count));
    count++;
  }
}

function ArraySeq(arr) {
  this.arr = arr;
}
Object.defineProperty(ArraySeq.prototype, "length", {
  get: function() {
    return this.arr.length;
  }
})
ArraySeq.prototype.nth = function(n) {
  return this.arr[n];
}

function RangeSeq(from, to) {
  this.from = from;
  this.to = to;
}
Object.defineProperty(RangeSeq.prototype, "length", {
  get: function() {
    return this.to - this.from + 1;
  }
})
RangeSeq.prototype.nth = function(n) {
  return this.from + n;
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104