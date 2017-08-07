$(document).ready(function(){


  var getCleverbotResponse = function( banter ){

    var baseURL = "https://www.cleverbot.com/getreply";
    //?key=YOURAPIKEY

    $.ajax({
      url: baseURL,
      data: {
        key: "CC30rGhYX1n4Rt77WrEoK1V5Wxw",
        input: banter
      }
    })
    .done(function(res){
      console.log(res);
      // debugger;

      //res.output
      var $div = $('<div class="bot">').html(res.output);
      $('#conversationWrapper').append($div);

    })
    .fail(function(xhr, status, err){
      console.log(xhr, status, err);
    });

  };

  $('#conversation').keypress(function(ev){
    if( ev.keyCode !== 13 ){
      return;
    }

    var line = $('#conversation').val();
    $('#conversation').val('');

    var $div = $('<div class="human">').html(line);
    $('#conversationWrapper').append($div);

    getCleverbotResponse(line);

  });

  //
  // // $('#submitChat').click(function(){
  //   var line = $('#conversation').val();
  //
  //   var $div = $('<div class="human">').html(line);
  //   $('#conversationWrapper').append($div);
  //
  // // });




});
