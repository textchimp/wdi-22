var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets",
  model: app.Secret,

  initialize: function(){

    this.on("add", function( secret ){
      console.log('A secret was added to the collection', secret);
    });

  } // init()
});
