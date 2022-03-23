
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

//Extract Matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result_4 = extractStr.match(codingRegex);

//Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result_5 = twinkleStar.match(starRegex);


//Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /un./; 
let result_6 = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities
let quoteSample_1 = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result_7 = quoteSample.match(vowelRegex);

// Match Letters of the Alphabet
let quoteSample_2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result_8 = quoteSample.match(alphabetRegex); 

//Match Numbers and Letters of the Alphabet
let quoteSample_3 = "Blueberry 3.141592653s are delicious.";
let myRegex_1 = /[h-s2-6]/gi;
let result_9 = quoteSample.match(myRegex_1);

// Match Single Characters Not Specified
let quoteSample = "3 blind mice.";
let myRegex_2 = /[^0-9aeiou]/gi;
let result_10 = quoteSample.match(myRegex_2);


//Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex_3 = /s+/g;
let result_11 = difficultSpelling.match(myRegex_3);