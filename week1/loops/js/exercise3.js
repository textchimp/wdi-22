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

  return 'F';

};

for (var i = 60; i <= 100 ; i++) {
  console.log( 'For ' + i + ' you got an ' + assignGrade(i) );
}

//
// var runSomeOtherFunction = function( func, arg ){
//   var result = func( arg );
//   console.log( result );
// };

// runSomeOtherFunction( assignGrade, 90 );
