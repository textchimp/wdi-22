var app = app || {};

app.PostListView = Backbone.View.extend({
  tagName: "li",

  render: function(){
    var title = this.model.get('title');
    this.$el.html( title );

    this.$el.appendTo( "#posts" );
  }
});
