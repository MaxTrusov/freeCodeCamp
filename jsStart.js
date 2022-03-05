let count = 0;

function cc(card) {
   // Only change code below this line
   switch (card) {
      case 2: case 3: case 4: case 5: case 6:
         count += 1;
         break;
      case 7: case 8: case 9:
         break;
      case 10: case 'J': case 'Q': case 'K': case 'A':
         count -= 1;
         break;
   }
   if (count > 0) {
      return +count + " Bet";
   } else {
      return +count + " Hold";
   }
   // Only change code above this line
}
cc(2); cc(3); cc(7); cc('K'); cc('A');


const myDog1 = {
   // Only change code below this line
   "name": "Bim",
   legs: 10,
   tails: 8,
   friends: []
   // Only change code above this line
};

// Setup
const testObj = {
   "hat": "ballcap",
   "shirt": "jersey",
   "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;

// Setup
const testObj1 = {
   "an entree": "hamburger",
   "my side": "veggies",
   "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

// Setup
const testObj2 = {
   12: "Namath",
   16: "Montana",
   19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];

// Setup
const myDog = {
   "name": "Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";

myDog.bark = "bow-wow";

delete myDog.tails;

// Setup
function phoneticLookup(val) {
   let result = "";

   const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank"
   }
   result = lookup[val];

   return result;
}
phoneticLookup("charlie");

// Manipulating Complex Objects
function checkObj(obj, checkProp) {
   if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
   } else {
      return "Not Found";
   }
}

//Manipulating Complex Objects
const myMusic = [
   {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
         "CD",
         "8T",
         "LP"
      ],
      "gold": true
   },
   {
      "artist": "Bob Marley",
      "title": "Solder",
      "release_year": 1973,
      "formats": [
         "CD",
         "LP"
      ],
      "gold": false
   },
];

//Accessing Nested Objects
const myStorage = {
   "car": {
      "inside": {
         "glove box": "maps",
         "passenger seat": "crumbs"
      },
      "outside": {
         "trunk": "jack"
      }
   }
};
const gloveBoxContents = myStorage.car.inside["glove box"];


//Accessing Nested Arrays
const myPlants = [
   {
      type: "flowers",
      list: [
         "rose",
         "tulip",
         "dandelion"
      ]
   },
   {
      type: "trees",
      list: [
         "fir",
         "pine",
         "birch"
      ]
   }
];

const secondTree = myPlants[1].list[1];


//Record Collection obj
const recordCollection = {
   2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
   },
   2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
   },
   1245: {
      artist: 'Robert Palmer',
      tracks: []
   },
   5439: {
      albumTitle: 'ABBA Gold'
   }
};

function updateRecords(records, id, prop, value) {
   if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
   } else if (prop == "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
   } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
   } else if (value === "") {
      delete records[id][prop];
   }
   return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

//Iterate with JavaScript While Loops
const myArray = [];
let i = 5;
while (i >= 0) {
   myArray.push(i);
   i--;
}

// //Iterate with JavaScript For Loops
// const myArray1 = [];
for (let i = 1; i < 6; i++) {
   myArray.push(i);
}

// //Iterate Odd Numbers With a For Loop
// const myArray2 = [];
for (let i = 1; i < 10; i += 2) {
   myArray.push(i);
}


//Count Backwards With a For Loop
// const myArray = [];
for (let i = 9; i > 0; i -= 2) {
   myArray.push(i);
}


//Iterate Through an Array with a For Loop
// const myArr = [2, 3, 4, 5, 6];
let total = 0;
for (let i = 0; i < myArr.length; i++) {
   total += myArr[i];
}



//Nesting For Loops
function multiplyAll(arr) {
   var product = 1;

   for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
         product = product * arr[i][j];
      }
   }
   return product;

}


//Iterate with JavaScript Do...While Loops
const myArray1 = [];
let a = 10;

do {
   myArray1.push(i);
   a++;
} while (a < 10);

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);


//Replace Loops using Recursion
function sum(arr, n) {
   if (n <= 0) {
      return 0;
   } else {
      return sum(arr, n - 1) + arr[n - 1];
   }
}


//Profile Lookup
const contacts = [
   {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
   },
   {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
   },
   {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
   },
   {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
   },
];

function lookUpProfile(name, prop) {
   for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
         if (contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop];
         } else {
            return "No such property";
         }
      }
   }
   return "No such contact";
}

lookUpProfile("Akira", "likes");


//Generate Random Fractions with JavaScript
function randomFraction() {
   return 1 + Math.random();
}


//Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
   return Math.floor(Math.random() * 10);
}

