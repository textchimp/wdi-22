var app = app || {};

app.AppView = Backbone.View.extend({
  el: "#app",

  render: function(){

    var rawTemplate = $('#AppViewTemplate').html();
    this.$el.html( rawTemplate );
    console.log('APP VIEW RENDERED TEMPLATE');
    //$('#app').html('content');

    var secretInputView = new app.SecretInputView();
    secretInputView.render();

  }

});
