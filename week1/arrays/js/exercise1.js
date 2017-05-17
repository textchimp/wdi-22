// Your top choices
//
// Create an array to hold your top choices (colors, presidents, whatever).
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.
//

var dogs = ['Novia Scotia Duck Tolling Retriever', 'Staffy', 'Black Lab', 'Kelpie', 'Cavoodle' ];

for (var i = 0; i < dogs.length; i++) {

  var currentDog = dogs[i];

  var suffix = '';

  var suffixes = ['st', 'nd', 'rd', 'th', 'th', 'th'];

  //
  // if( i === 0 ){
  //   suffix = 'st';
  // } else if( i === 1 ){
  //   suffix = 'nd';
  // } else if( i === 2 ){
  //   suffix = 'rd';
  // } else {
  //   suffix = 'th'; // this catch-all works for everything greater than 3
  // }

  console.log('My ' + (i + 1) + suffixes[i] + ' choice of dog is: ' + currentDog);
}
