// Welcome to ES6
console.log('Hello World');

for (var i = 0; i < 10; i++) {
  console.log(i);
}
// 'i' is still visible
console.log(i);

// let: exists only within nearest enclosing block
// (function, if/else, for loop, or even plain curlies)
for (let j = 0; j < 10; j++) {
  console.log(j);
}

{
  let scoped = 10;
  console.log(scoped);
  // => 10
}

// 'scoped' variabled defined with let does not exist outside arbitrary block
console.log(scoped);
//=> Uncaught ReferenceError: a is not defined

var hello = function(){

  // var name;      // JS hoists all 'var' declarations to the top of a function

  console.log(name);

  let name = 'Edgy';

  console.log(name);

};

hello();

const STUDENTS = 14;
STUDENTS

// throws 'assignment to constant variable' error
STUDENTS = 10;

// gives 'already declared' error
const STUDENTS = 14;

// Arrow functions

[1,2,3,4].forEach(function( i ){
  console.log(i);
})

// No parens needed around single argument
[1,2,3,4].forEach( i => console.log(i) );

[1,2,3,4].forEach( (i, j) => console.log(i, j) );

// ES5 style:
[1,2,3,4].map(function(x){
  return x * x;
});

// ES6: implicit return! Hooray!
[1,2,3,4].map( x => x * x );

// If we use curly brackets, we need to 'return' explicity
[1,2,3,4].map( (x, i) => {
  let j = i + 1;
  return x + j;
});

// string interpolation!
let name = 'Edgy';
let greeting = `Hello, ${ name }, sup dogg?`
greeting

// You can run any code inside the interpolation brackets
greeting = `Hello, ${ name + Math.random() }, sup dogg?`

// Syntax error!
var g = "This wants to be
a multi-line string.";

// works!
var g = `This wants to be
a multi-line string.`;

// Default function parameters
var hello = function(name = 'Mikaela'){
  console.log('Hello, ' + name);
}

// Uses 'Mikaela'
hello();
// => Hello, Mikaela

// Uses 'My Edgelord'
hello('My Edgelord');
// => Hello, My Edgelord

var args = function(a, b, ...rest){
  console.log(`a = ${a}, b = ${b}, rest = ${r}`);
}

args(1, 2, 3, 4);
// => a = 1, b = 2, rest = [3,4]

// spread parameters
Math.max(1,2,3,4,5);

var a = [4,5,6];
Math.max(1,2,3, a );

Math.max(1, 2, 3, ...[4,5,6] );


// Destructuring
var a = [1,2,3,4,5,6];
a
var first = a[0];
var second = a[1];
first
second

// Values from the array are placed into the variables on the left hand side of the =, based on their position
var [f, s] = a;
f
s

// Skip variables using blank spaces
var [ ,  , f, s] = a;
f
s

var [f, s, ...r] = a;
f
s
r

var [f, s=10] = a;
f
s

var [fir, sec] = [1];
fir
sec

// default values when destructuring
var [f, s=10] = [1];
f
s

// destructuring for object key/vals
var obj = { firstName: "Harpo", lastName: "Marx"};

var f = obj.firstName;
f

var { firstName: myFirst, lastName: myLast} = obj;
myFirst
myLast

var { firstName, lastName } = obj;
firstName
lastName

var title = 'Edgelord';
var o = { title };

var user = {
  name: 'Jonesy',
  age: 55,
  allergies: {
    shellfish: true,
    peanuts: false
  }
};

var { name, age, allergies: { shellfish: sh, peanuts: p } } = user;

name
age
shellfish
sh
p

var getName = function({ name: x }){
  console.log('name: ', x);
};

getName({
  name: 'Edgelord' ,
});

class Shape {
  constructor() {
    console.log('A new shape was created.');
  }

  sayHi(){
    console.log('A shape says hi');
  }

}

var s = new Shape();   // s = Shape.new (Ruby)
s.sayHi();

class Rectangle extends Shape {  // class Pear < Fruit

  constructor( name ){
    super();
    this.name = name;
    console.log('A new Rectangle was created.');

  }

  sayRectangleStuff(){
    console.log('I am a rectangle.');
  }
}

var r = new Rectangle();

r.sayRectangleStuff();

r.sayHi();


class Player {
  constructor( name ){
    this.name = name;
    console.log('A new player was created.');
  }

  speak(){
    console.log('My name is: ', this.name);
  }

  attack(){
    console.log('ATTACKING!!');
  }

}

var p = new Player('Boris');
p.speak();
p.attack();

class Enemy extends Player {
  kill(){
    console.log('I have taken a life.');
  }

  speak(){
    super.speak();
    console.log('Enemy tough guy talk here.');
  }
}

var e = new Enemy();

e.speak();

e.attack();

e.kill();
