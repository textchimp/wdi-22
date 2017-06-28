$(document).ready(function(){

  console.log('Loaded.');

  $.ajax({
    url: '/info-api'
  })
  .done(function(res){

    $('#up').html( res.uptime );

    $('#catname_title').html( res.catname.title );
    $('#catname_first').html( res.catname.first_name );
    $('#catname_last').html( res.catname.surname );

    $('#hog').html( res.cpuhog );

  })
  .fail(function(xhr, status, err){
    console.log(xhr, status, err);
  });

});
