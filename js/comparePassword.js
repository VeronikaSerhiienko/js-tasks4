var isPassword = comparePassword('fghty');
isPassword('fghrty');
isPassword('fghrty');
isPassword('fghrty');
isPassword('fghrty');
isPassword('fghrty');
isPassword('fghrty');

function comparePassword(password) {
  var counter = 1;
  return function(inputString) {
    counter++;
    if (counter > 5) { 
      console.log('Attention! It is too many');
    } else {
      console.log(inputString === password);
    }
  };  
}