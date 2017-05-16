// The Lifetime Supply Calculator
//
// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 50;
var maximumAge = 110;
var amountPerDay = 5;

var yearsRemaining = maximumAge - currentAge;
var amountPerYear = amountPerDay * 365.25;

var totalSnacksRequired = yearsRemaining * amountPerYear;

console.log( 'You will need ' + totalSnacksRequired + ' to last you until the ripe old age of ' + maximumAge);
