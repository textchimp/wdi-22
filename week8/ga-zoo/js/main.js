// Use '{{ varname }}' as template interpolation tags, instead of '<%= varname %>'
// (to avoid conflicts with Rails ERB template tags)
_.templateSettings = {
     evaluate : /\{\[([\s\S]+?)\]\}/g,
     interpolate : /\{\{([\s\S]+?)\}\}/g
};

var Animal = Backbone.Model.extend({
  defaults: {
    alive: true
  }
});

var Animals = Backbone.Collection.extend({
  model: Animal,
  initialize: function(){
    this.on('add', function( a ){
      console.log('An animal was added to the collection:', a);
    });
    this.on('remove', function( a ){
      console.log('An animal was removed from the collection:', a);
    });
  } // init
});

var gaZoo = new Animals();

var giraffe = new Animal({
  type: 'Giraffe'
});

gaZoo.add( giraffe );

gaZoo.add([
   {type: "Quokka"},
   {type: "Eastern Stink Badger"},
   {type: "Dugong", name: "Frederick"}
 ]);


 var AnimalView = Backbone.View.extend({
   el: "#main",

   initialize: function(){
     console.log('Initialized a new AnimalView.');
   }, // init

   render: function(){
    //  var animal = this.model;
    //  var type = animal.get('type');
    //  this.$el.html("<h1>" + type + "</h1>");

    // Get raw template HTML from <script> tag on page
    var rawTemplate =  $("#animalTemplate").html();
    // Pass raw template into underscore template function to return a template-creating function
    var template = _.template( rawTemplate );

    var markup = template( this.model.attributes );    //{type: 'Quokka', alive: true} );

    // var currentHTML = this.$el.html();
    this.$el.append( markup );
   }


 });


 var ZooView = Backbone.View.extend({
   el: "#main",

   initialize: function(){
     this.listenTo(this.collection, "remove", this.render);
   },

   events: {
     "click h1": "clickedHeading",
     "click button": "deleteAnimal"
   },

   deleteAnimal: function( event ){
     var $clicked = $( event.currentTarget );
     console.log( $clicked, $clicked.parent() );
     //$clicked.parent().remove();
     var type = $clicked.parent().find('h1').text(); // get the animal type from the <h1> tag

     var animalToDelete = this.collection.findWhere({
       type: type
     });

     this.collection.remove( animalToDelete );
   },

   clickedHeading: function( event ){
     $( event.currentTarget ).css("background-color", "hotpink");
   },

   render: function(){
     // Render all the animals in this collection (as opposed to just one)

    var currentView = this;

     currentView.$el.html( "<h1>Animals in our Zoo</h1>");

    //  var rawTemplate = $("#animalTemplate").html();
    //  var template = _.template( rawTemplate );

     // Iterate over the models in this view's collection
     currentView.collection.each(function( animal ){
      //  console.log(this);

      //  var markup = template( animal.attributes );
      //  currentView.$el.append( markup );

      var v = new AnimalView({
        model: animal
      });
      v.render();

     });

   } // render()

 });

//  var zooCollectionView = new ZooView({
//    collection: gaZoo
//  });
 //
//  zooCollectionView.render();


var Router = Backbone.Router.extend({
  routes: {
    '': 'showZoo', // default (root) route, show index page
    'animals': 'showZoo',
    'animals/:id': 'showAnimal',  // show details page for single animal
    '*args': 'errorPage' // catch-all for unsupported routes
  },

  showZoo: function(){
    // Render an instance of ZooView, which iterates over all the models
    // in the gaZoo collection
    var zv = new ZooView({
        collection: gaZoo
    });
    zv.render();
  },

  showAnimal: function(){
    // Render the view for a single, specific animal
    var av = new AnimalView({
      model: giraffe
    });
    $('#main').empty();
    av.render();
  }



}); // Router()


var router = new Router();

$(document).ready(function(){
  Backbone.history.start();
});



  //  var av = new AnimalView({
  //    model: giraffe
  //  });
   //
  //  av.render();
   //
  //  var qv = new AnimalView({
  //    model: new Animal({type: "Quokka"})
  //  });
   //
  //  qv.render();
   //
  //

  //
  // gaZoo.each(function( animal ){
  //   var v = new AnimalView({
  //     model: animal
  //   });
  //   v.render();
  // });
  //
