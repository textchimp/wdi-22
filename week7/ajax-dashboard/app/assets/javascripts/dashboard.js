$(document).ready(function(){

  console.log('Loaded.');

  var getDashboardData = function(){
    $.ajax({
      url: 'http://daeaf8be.ngrok.io/info-api'
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
  };

  // setInterval(getDashboardData, 3000);

});
