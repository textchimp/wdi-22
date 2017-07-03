var app = app || {};

app.Posts = Backbone.Collection.extend({
  url: "/posts",
  model: app.Post,

  initialize: function(){
    console.log('A new Posts collection was created.');
    this.on("add", function( post ){
      var title = post.get('title');
      console.log('A new post: ' + title + ' ...was created.');
    });
  }

});
