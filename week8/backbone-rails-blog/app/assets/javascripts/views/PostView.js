var app = app || {};

app.PostView = Backbone.View.extend({
  el: "#app",

  render: function(){
    var rawTemplate = $("#PostViewTemplate").html();
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );
    // { title: 'text', author: 'guy', content: 'thinkpiece'}

    // Overwrite the top-level app container with the
    // compiled Post show template
    this.$el.html( markup );
  }

});
