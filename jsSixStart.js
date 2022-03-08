//Compare Scopes of the var and let Keywords
function checkScope() {
   var i = 'function scope';
   if (true) {
      i = 'block scope';
      console.log('Block scope i is: ', i);
   }
   console.log('Function scope i is: ', i);
   return i;
}
checkScope();

function checkScope_1() {
   let i = 'function scope';
   if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
   }
   console.log('Function scope i is: ', i);
   return i;
}
checkScope_1();



//Mutate an Array Declared with const
const s = [5, 7, 2];
function editInPlace() {
   // Only change code below this line
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;
   // Using s = [2, 5, 7] would be invalid

   // Only change code above this line
}
editInPlace();

//Prevent Object Mutation
function freezeObj() {
   const MATH_CONSTANTS = {
      PI: 3.14
   };
   Object.freeze(MATH_CONSTANTS);

   try {
      MATH_CONSTANTS.PI = 99;
   } catch (ex) {
      console.log(ex);
   }
   return MATH_CONSTANTS.PI;
}
const PI = freezeObj();


//Use Arrow Functions to Write Concise Anonymous Functions
const magic = function () {
   return new Date();
};
const magic1 = () => {
   return new Date();
}

// Write Arrow Functions with Parameters
const myConcat = (arr1, arr2) => {
   return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));

//Set Default Parameters for Your Functions
const increment = (number, value = 1) => number + value;

// Use the Rest Parameter with Function Parameters
const sum = (x, y, z) => {
   const args = [x, y, z];
   return args.reduce((a, b) => a + b, 0);
}

const sum1 = (...args) => {
   return args.reduce((a, b) => a + b, 0);
}