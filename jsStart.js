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


const myDog = {
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
const testObj = {
   "an entree": "hamburger",
   "my side": "veggies",
   "the drink": "water"
};

const entreeValue = testObj["an entree"];
const drinkValue = testObj["the drink"];

// Setup
const testObj = {
   12: "Namath",
   16: "Montana",
   19: "Unitas"
};

const playerNumber = 16;
const player = testObj[playerNumber];  