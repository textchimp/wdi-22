var app = app || {};

app.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'initializeSecrets'
  },

  initializeSecrets: function(){
    console.log('Navigated to default route initializeSecrets()');

    var appView = new app.AppView();
    appView.render();

  }

});
