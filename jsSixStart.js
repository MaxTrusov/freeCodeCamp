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


// Use the Spread Operator to Evaluate Arrays In-Place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
arr2 = [...arr1];

console.log(arr2);


//Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
   yesterday: 75,
   today: 77,
   tomorrow: 80
};

const { today } = HIGH_TEMPERATURES;
const { tomorrow } = HIGH_TEMPERATURES;


//
const HIGH_TEMPERATURES_1 = {
   yesterday: 75,
   today: 77,
   tomorrow: 80
};

const { today: highToday } = HIGH_TEMPERATURES_1;
const { tomorrow: highTomorrow } = HIGH_TEMPERATURES_1;

//C Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
   yesterday: { low: 61, high: 75 },
   today: { low: 64, high: 77 },
   tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday } } = LOCAL_FORECAST;
const { today: { high: highToday_1 } } = LOCAL_FORECAST;

// Use Destructuring Assignment to Assign Variables from Arrays
let a = 8, b = 6;
[a, b] = [b, a];

//Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {

   const [a, b, ...arr] = list;
   return arr;
}
const arr = removeFirstTwo(source);


//Use Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
   max: 56.78,
   standard_deviation: 4.34,
   median: 34.54,
   mode: 23.87,
   min: -0.75,
   average: 35.85
};

const half = ({ max, min }) => {
   return (max + min) / 2;
}



//Create Strings using Template Literals
const result = {
   success: ["max-length", "no-amd", "prefer-arrow-functions"],
   failure: ["no-var", "var-on-top", "linebreak"],
   skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
   const failureItems = [];
   for (let i = 0; i < arr.length; i++) {
      failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
   }
   return failureItems;
}
const failuresList = makeList(result.failure);


//Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
   return {
      name: name,
      age: age,
      gender: gender
   };
};

const createPerson_1 = (name, age, gender) => ({ name, age, gender });

//Write Concise Declarative Functions with ES6
const bicycle = {
   gear: 2,
   // setGear: function (newGear) {
   //    this.gear = newGear;
   // }
   setGear(newGear) {
      this.gear = newGear;
   }
};
bicycle.setGear(3);
console.log(bicycle.gear);


//Use class Syntax to Define a Constructor Function
class Vegetable {
   constructor(name) {
      this.name = name;
   }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name);



class Thermostat {
   constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
   }
   get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
   }
   set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
   }

}

//Use export to Share a Code Block
const uppercaseString = (string) => {
   return string.toUpperCase();
}
const lowercaseString = (string) => {
   return string.toLowerCase()
}
export { uppercaseString, lowercaseString };


// Reuse JavaScript Code Using import
import { uppercaseString, lowercaseString } from './index.js';

uppercaseString("hello");
lowercaseString("WORLD!");


// Use * to Import Everything from a File
import * as stringFunctions from "./index.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// Create an Export Fallback with export default
export default function subtract(x, y) {
   return x - y;
}

//Import a Default Export
import subtract from "./index.js";
subtract(7, 4);

//Create a JavaScript Promise
const makeServerRequest = new Promise((resolve, reject) => {

});


// Complete a Promise with resolve and reject
const makeServerRequest_1 = new Promise((resolve, reject) => {
   let responseFromServer;

   if (responseFromServer) {
      resolve("We got the data");
   } else {
      reject("Data not received");
   }
});


//Handle a Fulfilled Promise with then
const makeServerRequest_2 = new Promise((resolve, reject) => {
   let responseFromServer = true;

   if (responseFromServer) {
      resolve("We got the data");
   } else {
      reject("Data not received");
   }
});

makeServerRequest_2.then(result => {
   console.log(result);
});



