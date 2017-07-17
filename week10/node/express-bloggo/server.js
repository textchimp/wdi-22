
var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var models = require('./models/');

models.user.hasMany(models.post,   { foreignKey: 'user_id'});
models.post.belongsTo(models.user, { foreignKey: 'user_id'});

var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Start server
app.listen(3000, function(){
  console.log('Server listening on port 3000...');
});

// Set up a static file folder from which files
// should simply be passed through when requested
app.use( express.static('public') );

// app.get('/index.html', function(req, res){
//   res.sendFile(__dirname + '/public/index.html')
// });



// Rails config/routes.rb:
// get '/' => 'pages#home'

// Sinatra:
// get '/' do
//   "Hello World"
// end

// Handle a GET request to the root path '/'
app.get('/', function(req, res){
  res.send( '<h1>Hello world!</h1>' + req.query['message'] );
});


app.get('/posts/:id', function(req, res){

  var postID = req.params.id;

  // Rails ActiveRecord: 
  // @post = Post.find params[:id]
  render json: @post

  models.post.find({
    where: { id: postID }
  })
  .then(function( p ){

    res.render('post', {
      title: 'Welcome to the Post',
      post: p
    });

  });

});

app.get('/users', function(req, res){

  // Rails ActiveRecord: User.all
  models.user.findAll({
    include: [{ model: models.post }]
  }).then(function(user_results){

    console.log(user_results);

    res.render('users', {
      title: 'Welcome to JS Server-side hell',
      users: user_results
    });

    // res.send('<h1>User Index</h1>');
    // var output = '<h1>User Index</h1>';
    // iterate over user results passed to callback by .findAll()
    // for (var i = 0; i < users.length; i++) {
    //   var userData = users[i].get();
    // }
    // users.forEach(function(u){
    //   var userData = u.get();
    //   output += "<p>" + userData.name + "</p>";
    //   output += '<img src="' + userData.image + '">'
    // });
    // res.send( output );
  });
});
