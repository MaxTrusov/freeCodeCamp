
// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); 

// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; 
let result_1 = waldoRegex.test(waldoIsHiding);


//Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result_2 = petRegex.test(petString);

//Ignore Case While Matching
let myStr = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i; 
let result_3 = fccRegex.test(myStr);