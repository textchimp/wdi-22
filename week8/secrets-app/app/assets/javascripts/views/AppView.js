var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  render: function(){

    var rawTemplate = $('#AppViewTemplate').html();
    this.$el.html( rawTemplate );
    //$('#app').html('content');

    var secretInputView = new app.SecretInputView();
    secretInputView.render();



  }

});
