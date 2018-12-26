var a1 = createCounterWithObjectMethod();
var a2 = createCounterWithObjectMethod();
console.log(a1.counter());
console.log(a1.counter());
console.log(a2.counter());
console.log(a2.counter());

function createCounterWithObjectMethod() {
  var count = 1;
  return {
    counter: function() {
      return count++;
    }
  };
}