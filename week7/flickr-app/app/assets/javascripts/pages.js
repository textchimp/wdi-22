$(document).ready(function(){

  console.log('Loaded.');

  /*
  We need to:

  1. On submit of the search form:
  2. Get the search text entered
  3. Make an AJAX request to Flickr API (search endpoint) using the specified search words from the form
  4. When we get the results back,
  5. Iterate over the results and construct an image URL in the appropriate format
  6. Create new image DOM elements for each URL and append them to the page
  7. $$$ PROFIT $$$
  8. Pagination? Infinite scroll?

  */

  var displayPhoto = function( photo ){
    // Create a new <img> element, set the src URL attribute, and append the element to the page

    var thumbURL = generateThumbnailURL( photo, 'q' );     // ..... _q.jpg  (150 x 150)
    var fullSizeURL = generateThumbnailURL( photo, 'k' );  // ..... _h.jpg  (1600 x 1600)

    // Wrap each thumbnail in a link tag, which links to the full size image
    var $a = $('<a>').attr('href', fullSizeURL);
    var $img = $('<img>').attr('src',thumbURL);

    $a.append($img);   // <a href="FULL_SIZE_IMAGE_URL"><img src="THUMBNAIL_IMAGE_URL"></a>
    $('body').append($a);

  };

  var generateThumbnailURL = function( photo, sizeChar ){
    // From: https://www.flickr.com/services/api/misc.urls.html
    // URL format: https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg

    sizeChar = sizeChar || 'q';   // set a default value if the argument is not given

    var url = "https://farm";
    url += photo.farm;
    url += ".staticflickr.com/";
    url += photo.server;
    url += "/";
    url += photo.id;
    url += '_';
    url += photo.secret;
    url += '_';
    url += sizeChar;
    url += '.jpg';

    // return [
    //   "https://farm",
    //   photo.farm,
    //   ".staticflickr.com/",
    // ].join();

    // console.log(url);

    return url;
  };


  var handleSearchData = function( data ){
    console.log( data );
    // debugger;

    var arrayOfPhotos = data.photos.photo;

    for (var i = 0; i < arrayOfPhotos.length; i++) {
      var currentPhoto = arrayOfPhotos[i];
      displayPhoto( currentPhoto );
    }
  };

  var searchFlickr = function( query ){

    var baseURL = "https://api.flickr.com/services/rest";
    var API_KEY = "3ab66c44737420e50ceaee170f6eb074";

    // Construct a URL like:
    // https://api.flickr.com/services/rest?method=flickr.photos.search&api_key=3ab66c44737420e50ceaee170f6eb074&text=Satantango&format=json&nojsoncallback=true

    $.ajax({
      url: baseURL,
      data: {
        api_key: API_KEY,
        method: 'flickr.photos.search',
        text: query,
        format: 'json',
        nojsoncallback: 1,
        page: 1
      }
    })
    .done( handleSearchData )
    .fail(function(xhr, status, err){
      console.log('AJAX ERROR:', xhr, status, err);
    })

  };


  $('form').on('submit', function(ev){

    ev.preventDefault();

    $('img').remove();  // get rid of the existing

    var searchQuery = $('#searchFlickr').val();
    console.log('submit: ', searchQuery);

    searchFlickr( searchQuery );
  });


});
