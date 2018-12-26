var form = { 
  name: { 
    value: 'Masha',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  }, 
}; //true

var form1 = { 
  name: { 
    value: 'Ma',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  }, 
}; //false < 3

var form2 = { 
  name: { 
    value: 'Mavfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvfvf',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  }, 
}; //false > 20

var form3 = { 
  name: { 
    value: '',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: false, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  }, 
}; //true

var form4 = { 
  name: { 
    value: 'Masha',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email5example.com',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  }, 
}; //false syntax email

var form5 = { 
  name: { 
    value: 'Masha',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: '',
    validationRules: {
      email: true,
      required: false,
    },
    errorMessage: '',
  }, 
}; //true

var form6 = { 
  name: { 
    value: 'Masha',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@.examplecom',
    validationRules: {
      email: true,
      required: false,
    },
    errorMessage: '',
  }, 
}; // false syntax email

var form7 = { 
  name: { 
    value: 'Masha',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@.examplecom',
    validationRules: {
      email: true,
      required: true,
    },
    errorMessage: '',
  }, 
}; // false syntax email

var form8 = { 
  name: { 
    value: 'Masha',
    validationRules: { 
      minLength: 3, 
      maxLength: 20, 
      required: true, 
    }, 
    errorMessage: '',
  }, 
  email: {
    value: 'email@.examplecom',
    validationRules: {
      email: false,
      required: false,
    },
    errorMessage: '',
  }, 
}; // true

var validationObject = {

  startValidation: function(obj) {
    var isFormValid = true;
    for (var key in obj) {
      if (obj[key].validationRules.required){
        if (this.isEmpty(obj[key])) {
          isFormValid = false;
        }     
      }

      if (obj[key].validationRules.minLength) {
        if (!(this.isValidMinLength(obj[key]))) {
          isFormValid = false;
        }  
      }

      if (obj[key].validationRules.maxLength) {
        if (!(this.isValidMaxLength(obj[key]))) {
          isFormValid = false;
        }  
      }

      if (obj[key].validationRules.email) {
        if (!(this.checkSyntaxOfEmail(obj[key]))) {
          isFormValid = false;
        }  
      }
    }
    return isFormValid;
  },
  
  isValidMinLength: function(propObj) {
    var res = false;
    if ((propObj.value.length === 0) || (propObj.value.length >= propObj.validationRules.minLength)) {
      res = true;
    } else {
      propObj.errorMessage = 'ERROR: length of string should be longer than ' + propObj.validationRules.minLength;
    }
    return res;
  },

  isValidMaxLength: function(propObj) {
    var res = false;
    if (propObj.value.length <= propObj.validationRules.maxLength) {
      res = true;
    } else {
      propObj.errorMessage = 'ERROR: length of string should be less than ' + propObj.validationRules.maxLength;
    }
    return res;
  },

  isEmpty: function(propObj) {
    var res = false;
    if (propObj.value === '') {
      res = true;
      propObj.errorMessage = 'ERROR: Please fill out this field!';
    }
    return res;
  },

  checkSyntaxOfEmail: function(propObj) {
    var res = false;
    var inputEmail = propObj.value;
    if ((propObj.value.length === 0) || ((inputEmail.indexOf('@') >= 1) && (inputEmail.indexOf('.') >= (inputEmail.indexOf('@') + 2)))) {
      res = true;
    } else {
      propObj.errorMessage = 'ERROR: Please enter valid email!';
    }
    return res;
  },
};
console.log('via object method');
console.log(validationObject.startValidation(form));
console.log(form);
console.log(validationObject.startValidation(form1));
console.log(form1);
console.log(validationObject.startValidation(form2));
console.log(form2);
console.log(validationObject.startValidation(form3));
console.log(form3);
console.log(validationObject.startValidation(form4));
console.log(form4);
console.log(validationObject.startValidation(form5));
console.log(form5);
console.log(validationObject.startValidation(form6));
console.log(form6);
console.log(validationObject.startValidation(form7));
console.log(form7);
console.log(validationObject.startValidation(form8));
console.log(form8);

console.log('via function');
console.log(isValidData(form));
console.log(form);
console.log(isValidData(form1));
console.log(form1);
console.log(isValidData(form2));
console.log(form2);
console.log(isValidData(form3));
console.log(form3);
console.log(isValidData(form4));
console.log(form4);
console.log(isValidData(form5));
console.log(form5);
console.log(isValidData(form6));
console.log(form6);
console.log(isValidData(form7));
console.log(form7);
console.log(isValidData(form8));
console.log(form8);


function isValidData(obj) {
  var isFormValid = true;
  for (var key in obj) {
    if (obj[key].validationRules.required){
      if (isEmpty(obj[key])) {
        isFormValid = false;
      }     
    }

    if (obj[key].validationRules.minLength) {
      if (!(isValidMinLength(obj[key]))) {
        isFormValid = false;
      }  
    }

    if (obj[key].validationRules.maxLength) {
      if (!(isValidMaxLength(obj[key]))) {
        isFormValid = false;
      }  
    }

    if (obj[key].validationRules.email) {
      if (!(checkSyntaxOfEmail(obj[key]))) {
        isFormValid = false;
      }  
    }
  }

  function isValidMinLength(propObj) {
    var result = false;
    if ((propObj.value.length === 0) || (propObj.value.length >= propObj.validationRules.minLength)) {
      result = true;
    } else {
      propObj.errorMessage = 'ERROR: length of string should be longer than ' + propObj.validationRules.minLength;
    }
    return result;
  }

  function isValidMaxLength(propObj) { 
    var result = false;
    if (propObj.value.length <= propObj.validationRules.maxLength) {
      result = true;
    } else {
     propObj.errorMessage = 'ERROR: length of string should be less than ' + propObj.validationRules.maxLength;
    }
    return result;
  }

  function isEmpty(propObj) {
    var result = false;
    if (propObj.value === '') {
      result = true;
      propObj.errorMessage = 'ERROR: Please fill out this field!';
    }
    return result;
  }

  function checkSyntaxOfEmail(propObj) {
    var result = false;
    var inputEmail = propObj.value;
    if ((propObj.value.length === 0) || ((inputEmail.indexOf('@') >= 1) && (inputEmail.indexOf('.') >= (inputEmail.indexOf('@') + 2)))) {
      result = true;
    } else {
      propObj.errorMessage = 'ERROR: Please enter valid email!';
    }
    return result;
  }
  return isFormValid;
}