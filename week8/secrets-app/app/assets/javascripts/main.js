var app = app || {};

// Create instance of router for the whole app
app.router = new app.AppRouter();

// Create instance of secrets collection used by the whole app
app.secrets = new app.Secrets();

// app.secretSecrets = new app.Secrets();

// We need to wait for the document to finish loading before we start our
// app, because our app will be writing/appending to DOM elements on the page
$(document).ready(function(){

  // Load all secrets from the Rails DB into the collection using AJAX
  app.secrets.fetch().done(function(){
    // Once secrets are finished loading:
    Backbone.history.start();
  });

});
