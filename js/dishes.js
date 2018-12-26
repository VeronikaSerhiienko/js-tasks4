(function(food) { 
  if (food === 'cookies') { 
    console.log('More please :)'); 
  } else { 
    console.log('Some food please :)'); 
  } 
})('cookies');

var dishes = function(food) {
  if (food === 'cookies') { 
    console.log('More please :)'); 
  } else { 
    console.log('Some food please :)'); 
  }
};

dishes('cookies');
dishes('sweets');