var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",

  events: {
    "click button": "createSecret"
  },

  createSecret: function(){

    var userInput = this.$el.find("textarea").val();
    console.log( userInput );

    var secret = new app.Secret({
      content: userInput
    });

    secret.save();  // persist to database via AJAX call

    // Add to our collection, which triggers a render of
    // SecretView for this model, i.e. adds it to our <ul> list
    app.secrets.add( secret );

    this.$el.find("textarea").val('').focus();

  },

  render: function(){
    var rawTemplate = $("#SecretInputViewTemplate").html();
    this.$el.html( rawTemplate );
  }
});
