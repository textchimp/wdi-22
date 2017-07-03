var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  render: function(){

    // this.$el.html("<h1>AppView rendered. You rule at Backbone.</h1>");

    var template = $('#AppViewTemplate').html();
    this.$el.html( template );

    this.collection.each(function( post ){

      // Show each post in the AppView's collection by
      // getting PostListView to render each individually
      var plv = new app.PostListView({
        model: post
      });
      plv.render();

    }); // each()


  }
});
