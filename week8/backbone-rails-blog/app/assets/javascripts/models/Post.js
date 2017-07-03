
var app = app || {};

app.Post = Backbone.Model.extend({
  urlRoot: "/posts",

  defaults: {
    author: 'Anonymous',
    title: 'Untitled',
    content: '...'
  },

  initialize: function(){
    console.log('New model initialized.');
  }
});
