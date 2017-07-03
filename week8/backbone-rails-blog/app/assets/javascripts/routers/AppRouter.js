var app = app || {};


app.AppRouter = Backbone.Router.extend({
  // This is like the Rails routes.rb file:
  routes: {
    '': 'index',
    'posts': 'index',
    'posts/:id': 'showPost'
  },
  // These are like the Rails controller actions:

  index: function(){
    // Render an AppView
    console.log('Index action started.');
  },

  showPost: function( id ){
    // Find the Post by ID, and use PostView to render it
  }


});
