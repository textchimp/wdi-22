// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

// set celsius to 47

var celsius = 47;

var fahrenheit = (celsius * 1.8) + 32;

console.log( celsius + '°C is ' + fahrenheit + '°F');

fahrenheit = 116.6;
celsius = (fahrenheit - 32) / 1.8;

console.log(fahrenheit + '°F is ' + celsius + '°C');
