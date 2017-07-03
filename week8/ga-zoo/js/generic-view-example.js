$(document).ready(function(){

  console.log('App loaded.');

  var GenericView = Backbone.View.extend({
    el: "#main",

    events: {
      "click h1": "headingClicked",
      "click p": "pClicked"
    },

    // $('p').on('click', function(){...});
    // $("#main").on('click', 'p', function(){...});

    pClicked: function( ){
      // 'this' will ALWAYS be the current view object in Backbone, EVEN inside an event handler
      console.log('P tag clicked: ', this);

      console.log('P tag clicked: ');
      // To get the element that was clicked, use the event object passed in to your callback:
      // (Note that it's a vanilla JS object, so wrap it in $() to call jQuery methods on it)
      $(event.currentTarget).css("border", "10px solid green");
    },

    headingClicked: function( event ){
      // alert('You clicked the heading. Congratulations.');
      // console.log(event);
      this.$el.css("background-color", "hotpink");

      var $p = $('<p>Nice clicking bro.</p>');
      this.$el.append( $p );
    },

    initialize: function(){
      console.log('A new GenericView was created');
    }, //init

    render: function(){
      // Remember: 'this' refers to the current view instance
      // 'this.$el' or 'this.el' refers to the DOM node this View is responsible for rendering:
      //    - either the existing DOM element defined above via 'el'
      //    - or a new, detached DOM element defined via 'tagName'
      this.$el.html("<h1>Hello World</h1>");
      // $('#main').html('stuff');
    }

  });

  var gv = new GenericView();
  gv.render();

});
