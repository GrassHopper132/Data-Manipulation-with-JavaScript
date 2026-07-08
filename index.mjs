// The initial numbers that must be verified.
const n1 = 10; 
const n2 = 15; 
const n3 = 20; 
const n4 = 5;  
const allDivisibleBy5 = (n1 % 5 === 0) && (n2 % 5 ===0) && (n3 % 5 ===0) && (n4 % 5 ===0)
console.log(`Are all numbers divisible by 5? {allDivisibleBy5}`);
//Are all numbers divisible by 5? {allDivisibleBy5}
//50
//true

//Section 2

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(isSum50)
// true    50
//Section 3
console.log(n1 + n2 + n3 + n4)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(`Are there at least two odd numbers? ${isTwoOdd}`);
// Are there at least two odd numbers? true

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
const isUnderOrEqual25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnderOrEqual25)
// true


// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique)
// true

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);
//True

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  console.log(dontDoThis)
 // True


//Practical Math
 // Road Trip 
 const totalDistance = 1500;
 const fuelBudget = 175;
 const costPerGallon = 3;
 // variables
 const speed60 =60;
 const mpg60 = 28;
 // div
 const gallonsNeeded60 = totalDistance / mpg60;
 const fuelCost60 = gallonsNeeded60 * costPerGallon;
 //cost
 const isBudgetEnough60 = fuelCost60 <= fuelBudget;
 //trip time
 const tripTime60 = totalDistance / speed60;

 console.log(`\n--- Traveling at ${speed60} mpg---`);
 console.log(`Gallons of fuel needed: ${gallonsNeeded60}`);
 console.log(`Will the budget cover the expense? ${isBudgetEnough60} (Total Cost: $${fuelCost60})`);
 console.log(`Trip durantion: ${tripTime60} hours`);
// -- Traveling at 60 mpg---
// Gallons of fuel needed: 53.57142857142857
// Will the budget cover the expense? true (Total Cost: $160.71428571428572)
// Trip durantion: 25 hours