
var express = require('express');
var app = express();

var Sequelize = require('sequelize');
var models = require('./models/');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );

var USER_ID = 1;

models.airplane.hasMany(models.flight,   {foreignKey: 'airplane_id'});
models.flight.belongsTo(models.airplane, {foreignKey: 'airplane_id'});

models.user.hasMany(models.reservation,   {foreignKey: 'user_id'});
models.reservation.belongsTo(models.user, {foreignKey: 'user_id'});

models.flight.hasMany(models.reservation,   {foreignKey: 'flight_id'});
models.reservation.belongsTo(models.flight, {foreignKey: 'flight_id'});


app.use( express.static('public') );

app.listen(3000, function(){
  console.log('Server listening on port 3000...');
});


// GET to /reservations to retrieve list of reservations for this user
app.get('/reservations', function(req, res){

  // Rails ActiveRecord: Reservation.where user_id: USER_ID
  models.reservation.findAll({
    where: {user_id: USER_ID},
    include: [{ model: models.flight }]
  })
  .then(function( reservations ){
    res.json( reservations );
  });

});

// POST to /reservations to create a new reservation
app.post('/reservations', function(req, res){
  console.log( req.body );

  var reservation = req.body;

  reservation.user_id = USER_ID;   // @current_user.id

  // Need strong params! Right now all POST key/values are being saved into our table
  models.reservation.create( reservation ).then(function( r ){
    console.log('Created reservation:', r);
    res.json( r );
  });

});

// Rails ActiveRecord: Flight.all
app.get('/flights', function(req, res){
  models.flight.findAll({
    include: [
      { model: models.airplane },
      { model: models.reservation }
    ]})
    .then(function(flights){
      res.json( flights );
  });
});
