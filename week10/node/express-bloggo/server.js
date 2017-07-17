
var express = require('express');
var app = express();

// Start server
app.listen(3000, function(){
  console.log('Server listening on port 3000...');
});

// Set up a static file folder from which files
// should simply be passed through when requested
app.use( express.static('public') );


// Handle a GET request to the root path '/'
app.get('/', function(req, res){

  res.send( '<h1>Hello world!</h1>' + req.query['message'] );

});
