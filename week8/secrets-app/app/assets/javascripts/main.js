var app = app || {};

// Create instance of router for the whole app
app.router = new app.AppRouter();

app.secrets = new app.Secrets();

// Create instance of secrets collection used by the whole app

// app.secretSecrets = new app.Secrets();

// We need to wait for the document to finish loading before we start our
// app, because our app will be writing/appending to DOM elements on the page
$(document).ready(function(){

  // Load all secrets from the Rails DB into the collection using AJAX
  Backbone.history.start();

  app.secrets.fetch();

  // Check for new secrets on the server every 2s
  // (they will be automatically rendered thanks to our
  // collection's add event handler)
  window.setInterval(function(){
    app.secrets.fetch();
  }, 2000);

});
