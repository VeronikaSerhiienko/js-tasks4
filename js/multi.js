var multi3 = multi(3);
var multi4 = multi(4);

console.log(multi3(4));
console.log(multi4(5));


function multi(b) {
  return function(a) {
    return a * b;
  };
}