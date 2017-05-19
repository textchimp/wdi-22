// Part 1
var rectangle = {
  length: 4,
  width: 4
};

var isSquare = function(rectangle) {
  return rectangle.length === rectangle.width;
}

var area = function(rectangle) {
  return rectangle.length * rectangle.width;
}

var perimeter = function(rectangle) {
  return 2 * (rectangle.length + rectangle.width);
}

// Part 2
var triangle = {
  sideA: 5,
  sideB: 5,
  sideC: 5
};

// Factory pattern:

var TriangleFactory = function ( a, b, c ) {
  var tri = {};
  tri.sideA = a;
  tri.sideB = b;
  tri.sideC = c;

  return tri;
};

var Triangle = function (a, b, c) {
  if(a === 0 || b === 0 || c === 0){
    return;
  }
  this.sideA = a;
  this.sideB = b;
  this.sideC = c;
  // return "Triangles are evil.";
};

var isEquilateral = function(triangle) {
  return triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC;
}

var isIsosceles = function(triangle) {
  return triangle.sideA === triangle.sideB || triangle.sideB === triangle.sideC;
}

var area = function(triangle) {
  var s = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
  return Math.sqrt(s * (s - triangle.sideA) * (s - triangle.sideB) * (s - triangle.sideC));
}

console.log('Literal object version:');
console.log(isEquilateral(triangle));
console.log(isIsosceles(triangle));
console.log(area(triangle));

console.log('Factory version:');

var factoryTriangle = TriangleFactory(5, 5, 5);

console.log('factoryTriangle: ', factoryTriangle);

console.log(isEquilateral(factoryTriangle));
console.log(isIsosceles(factoryTriangle));
console.log(area(factoryTriangle));


console.log('Constructor version:');

var constructorTriangle = new Triangle(0, 5, 5);

console.log('constructorTriangle: ', constructorTriangle);

console.log(isEquilateral(constructorTriangle));
console.log(isIsosceles(constructorTriangle));
console.log(area(constructorTriangle));
