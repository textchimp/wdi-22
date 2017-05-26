
var $cat = $('#cat');

console.log($cat);


window.setInterval(function(){

  var left = $cat.css( 'left' );
  left  = parseInt( left );

  debugger;

  // console.log(left);

  $cat.css('left', (left + 10) + 'px');

  if( left > window.innerWidth - $cat.width() ){
    $cat.css('border', '10px solid red')
  }

}, 50);
