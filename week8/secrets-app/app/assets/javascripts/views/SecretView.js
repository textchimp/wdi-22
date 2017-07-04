var app = app || {};

// This view's responsibility is to:
// - Create a new list item (<li>)
// - Set its text to be the content of the model that was set as the model for this view
// - Prepend the item to #secrets

app.SecretView = Backbone.View.extend({
  tagName: "li",

  render: function(){
    console.log('attributes:', this.model.attributes);
    var content = this.model.get("content");
    this.$el.html( content );
    this.$el.prependTo( "#secrets" );
    console.log('el', this.$el);
    console.log( 'secrets list:', $("#secrets") );
  }
});
