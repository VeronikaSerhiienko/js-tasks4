console.log(multi(3)(4));
console.log(multi(4)(5));

function multi(b) {
  return function(a) {
    return a * b;
  };
}