var c1 = createCounter();
var c2 = createCounter();
console.log(c1());
console.log(c1());
console.log(c2());
console.log(c2());

function createCounter() {
  var counter = 1;
  return function() {
    return counter++;
  };
}