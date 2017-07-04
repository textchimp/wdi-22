var app = app || {};

app.Secret = Backbone.Model.extend({
  urlRoot: "/secrets",

  defaults: {
    content: "I hate and fear water"
  },

  initialize: function(){
    console.log("A new secret was created.");
  }

});
