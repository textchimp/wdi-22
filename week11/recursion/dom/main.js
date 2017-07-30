
const traverseDOM = (start, depth=0) => {

  // Ruby: spaces = "    " * depth
  var indent = Array(depth+1).join('    ');

  console.log(`${ indent }${ start.nodeName }: ${ start.className }`);
  for( var i = 0; i < start.children.length; i++ ){
    traverseDOM( start.children[i], depth + 1 );
  }

};

traverseDOM( document.body );
