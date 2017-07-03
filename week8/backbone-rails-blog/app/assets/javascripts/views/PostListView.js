var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: "li",

  events: {
    "click": "showPost"
  },

  showPost: function(){
    var id = this.model.get('id');
    console.log('Clicked ID: ', id);
    app.router.navigate( "/posts/" + id, true );
  },

  render: function(){
    var title = this.model.get('title');
    this.$el.html( title );

    this.$el.appendTo( "#posts" );
  }
});
