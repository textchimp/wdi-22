// FixStart
//
// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:
//
// fixStart('babble'): 'ba**le'

var fixStart = function ( str ) {

  var firstChar = str[0];

  var arr = str.split(''); // convert string to array, so we can change individual elements

  console.log('first char is: ' + firstChar);

  for (var i = 1; i < arr.length; i++) {

    var currentChar = arr[i];

    if( currentChar === firstChar ){
      // for debugging:
      // console.log('YES, ' + currentChar + ' === ' + firstChar);

      arr[i] = '*';

      // console.log('str[' + i + '] = ' + arr[i]);
    }

  } //for

  return arr.join(''); // convert our array of characters back into a string before returning
};

console.log( fixStart('babble') );
