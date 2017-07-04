var app = app || {};

app.SecretInputView = Backbone.View.extend({
  el: "#secretForm",

  render: function(){
    var rawTemplate = $("#SecretInputViewTemplate").html();
    this.$el.html( rawTemplate );
  }
});
