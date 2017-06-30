
var Movie = Backbone.Model.extend({
  defaults: {
    title: "N/A",
    duration: 0,
    director: "N/A",
    language: "English",
    tags: []
  },

  initialize: function(){
    console.log('New movie created.');

    this.on("change", function(){
      console.log("Change.");
    });

    this.on("change:title", function( movie, newTitle ){
      var message = "The movie titled changed from " + movie.previous('title') + " to " + newTitle;
      console.log( message );
    });

    this.on("change:duration change:director", function(){
      console.log('The duration or the director changed.');
    });
  } // initialize

});

var genericMovie = new Movie();
console.log('Generic movie: ', genericMovie);

var inherentVice = new Movie({
  title: 'Inherent Vice',
  director: 'P.T. Anderson',
  duration: 140,
  tags: ['comedy', 'drama', 'adaptation']
});

var satan = new Movie({
  title: 'Satantango',
  director: 'Bela Tarr',
  language: 'Hungarian',
  duration: 60 * 9,
  tags: ['drama', 'foreign', 'marathon', 'hipster']
});

var title = satan.get('title');
var language = satan.get('language');
var duration = satan.get('duration');
console.log(title, language, duration);

inherentVice.set('language', 'English');  // forgot to set this when we created it
var ivTitle = inherentVice.get('title');
var ivLang = inherentVice.get('language');
var ivDirector = inherentVice.get('director');
console.log(ivTitle, ivLang, ivDirector);


var Movies = Backbone.Collection.extend({
  model: Movie,

  initialize: function(){
    console.log('A new movie collection was created.');

    this.on("add", function( movie ){
      console.log('Added a new movie:', movie);
    });

    this.on("remove", function( movie ){
      console.log('Removed a movie: ', movie);
    })

    this.on("add remove", function(){
      console.log('The collection changed.');
    });

  } // init
});

var emptyMovies = new Movies();

var movieShelf = new Movies();

movieShelf.add([
  satan,
  inherentVice
]);
console.log('Movies on our shelf: ', movieShelf.pluck('title') );

movieShelf.add( genericMovie );

movieShelf.add({
  title: 'Commando',
  director: 'Arnold Schwarzenegger',
  duration: 120,
  language: 'Austrian',
  tags: ['action', 'bloodbath', 'arnie']
});

movieShelf.add([
  {title: 'The Big Lebowski', tags: ['comedy', 'cult', 'cohen bros', 'bowling']},
  {title: 'A Clockwork Orange', tags: ['ultraviolence', 'cult', 'kubrick']},
  {}
]);

movieShelf.each(function( movie ){
  console.log('Title: ', movie.get('title'));
  console.log('director: ', movie.get('director'));
  console.log('duration: ', movie.get('duration') + 'm');
  console.log('Language:', movie.get('language'));
  console.log('Tags:', movie.get('tags'));
  console.log('-----------------------------------');
});

var searchByTag = function( tag ){

  var matches = movieShelf.filter(function( movie ){
    var tags = movie.get('tags');
    var tagExists = _.contains( tags, tag );
    return tagExists;
  });
  return matches;
}; // searchByTag

// Avoid using temporary variables and just return values directly
// for a shorter verison of the function
var searchByTagShort = function( tag ){
  return movieShelf.filter(function( movie ){
    return _.contains( movie.get('tags'), tag );
  });
};


var comedies = searchByTag( 'cult' );
console.log('Comedies on our shelf: ');
_.each(comedies, function( c ){
  console.log( c.get('title') );
})
