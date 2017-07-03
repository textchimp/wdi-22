var app = app || {};

app.posts = new app.Posts();

app.router = new app.AppRouter();

$(document).ready(function(){
  // Once the DOM is loaded, fetch the posts from the Rails AJAX endpoint ("/posts")
  app.posts.fetch().done(function(){
    // ... When the fetch() AJAX request is finished, we're ready to start the app
    Backbone.history.start();
  });

});
