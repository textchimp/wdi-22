// The Grade Assigner
//
// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

var assignGrade = function( score ){

  if( score >= 90 ){
    return 'A';
  }

  if( score >= 80 ){
    return 'B';
  }

  if( score >= 70 ){
    return 'C';
  }

  if( score >= 50 ){
    return 'D';
  }

  // catch-all: if none of the other 'if' tests have evaluated as true and returned,
  // we will get to this line and fall back to an 'F'
  return 'F';

};

for (var i = 60; i <= 100 ; i++) {
  // In each loop iteration, call assignGrade, passing the current value of i
  console.log( 'For ' + i + ' you got an ' + assignGrade(i) );
}


// First-class functions: down the rabbit-hole
//
// var runSomeOtherFunction = function( func, argToPassedFunction){
//
//   var result = func( argToPassedFunction );  // call the function that was passed as an arg
//   console.log( result );
//
// };
//
// runSomeOtherFunction( assignGrade, 90 ); // pass the variable containing the function, no '()'
