
$(document).ready(function(){


  var getRandomStupidity = function(){

    var baseURL = "http://api.giphy.com/v1/gifs/random";

    $.ajax({
      url: baseURL,
      data: {
        api_key: '', // API KEY GOES HERE
        tag: 'infomercial fail'
      }
    })
    .done(function(res){
      console.log(res);
      // debugger;

      var imgURL = res.data.image_url;

      var $img = $('<img>').attr('src', imgURL).css({
        'width': '100vw',
        'height': '100vh',
        'position': 'absolute'
      });
      $('#main').append( $img );

      $img.css('opacity', '0');

      $img
      .animate({opacity: 1.0}, 5000)
      .animate({opacity: 0.0}, 10000, function(){
        $(this).remove();
      });

      //
      // $('body').css({
      //   'background-image': 'url(' + imgURL + ')',
      //   // 'background-repeat': 'no-repeat',
      //   'background-size': 'cover'
      // });

      //
      // for (var i = 0; i < res.data.length; i++) {
      //   var result = res.data[i]
      //
      //   var imgURL = result.images.original.url;
      //   var $img = $('<img>').attr('src', imgURL);
      //
      //   $('#main').append( $img );
      // }


    })
    .fail(function(xhr, status, error){
      console.log(xhr, status, error);
    });

  };  // end getRandomStupidity()

  getRandomStupidity();
  setInterval(getRandomStupidity, 6000);


});
