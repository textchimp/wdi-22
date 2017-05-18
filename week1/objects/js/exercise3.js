/*
The Movie Database

It's like IMDB, but much much smaller!

Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).

Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."
*/

var movie = {
  title: 'Inherent Vice',
  duration: 122,
  stars: ['Joaquim Phoenix', 'Reese Witherspoon', 'Josh Brolin']
};

var movieInfo = function ( m ) {

  var description = m.title + ' lasts for ' +
                    m.duration + ' minutes. Stars: ' +
                    m.stars.join(', ');

  console.log( description );
};

movieInfo( movie );

movieInfo( {title: 'test', duration: 10, stars: ['a', 'b', 'c'] } );
