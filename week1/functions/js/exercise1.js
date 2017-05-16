// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Write a function named tellFortune that:
//
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

var tellFortune = function( numChildren, partnerName, location, jobTitle ){

  var fortune = 'Perhaps you will be a ' + jobTitle + ' in ' + location + ', and married to ' + partnerName + ' with ' + numChildren + ' kid(s).';

  // console.log( fortune );
  return fortune;
};


console.log( tellFortune(1, 'Jonesy', 'Hawaii', 'pro surfer' ) );

tellFortune(2, 'Mary', 'Katoomba', 'bartender' );

tellFortune(3, 'Petey', 'the bush', 'hired killer' );
