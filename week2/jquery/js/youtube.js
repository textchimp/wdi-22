// Vanilla JS DOM Access Nightmare
//
// var links = document.querySelectorAll('a');
//
// for (var i = 0; i < links.length; i++) {
//
//   var link = links[i];
//   var url  = link.getAttribute('href');
//
//   console.log( url );
//
//   var thumbnailURL = youtube.generateThumbnailUrl( url  );
//   console.log( thumbnailURL );
//
//   var img = document.createElement( 'img' );  // detached DOM node!
//
//   img.setAttribute( 'src', thumbnailURL );
//
//   link.appendChild( img ); // attached to the DOM!
//
// }

// yayQuery

var $allALinks = $('ul a');

$allALinks.each(function() {

  var url = $(this).attr('href');
  // console.log(this);
  // console.log('original url', url);

  var thumbnail = youtube.generateThumbnailUrl(url);
  // console.log('thumbnail', thumbnail);

  var $img = $('<img>').attr('src', thumbnail);

  $(this).append( $img );

});
