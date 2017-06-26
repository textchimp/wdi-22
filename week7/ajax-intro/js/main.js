


$(document).ready( function(){


  console.log('All sorted.');

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    // Don't run the rest of the function if the state is not 4 (finished receiving response)
    if( xhr.readyState !== 4 ) {
      return;
    }

    // All code from here on will only be run when the request is finished
    // (i.e. it's safe to start processing the response data)

    console.log('FINISHED!');


    var searchResults = JSON.parse( xhr.responseText );
    console.log('searchResults  = ', searchResults);

    // debugger;

    for (var i = 0; i < searchResults.results.length; i++) {
      var result = searchResults.results[i];

      console.log(i, result.title, result.id);   //  searchResults.results[i].title

      var $para = $('<p class="result">').html(result.title);  // create new detached DOM node

      $('#main').append($para);    // append new node to div#main DOM element

    }



  };


  xhr.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=REAL-API-KEY-GOES-HERE&query=alien&page=2");
  xhr.send();

});
