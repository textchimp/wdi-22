var app = app || {};

app.Secrets = Backbone.Collection.extend({
  url: "/secrets",
  model: app.Secret,

  initialize: function(){

    this.on("add", function( secret ){
      console.log('A secret was added to the collection');

      var secretView = new app.SecretView({
        model: secret
      });
      secretView.render();

      // app.secrets.add({content: "I drink paint."})


    });

  } // init()
});
