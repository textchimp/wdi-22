var app = app || {};

// This view's responsibility is to:
// - Create a new list item (<li>)
// - Set its text to be the content of the model that was set as the model for this view
// - Prepend the item to #secrets

app.SecretView = Backbone.View.extend({
  tagName: "li",

  render: function(){
    var content = this.model.get("content");
    this.$el.html( content );
    this.$el.prependTo( "#secrets" );
    var $secrets = $("#secrets");
    console.log('element to prepend to: ', $secrets);
  }
});
