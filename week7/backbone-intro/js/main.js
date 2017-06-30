
console.log('Welcome to Backbone.');

var Animal = Backbone.Model.extend({
  initialize: function(){
    // This runs whenever you do 'new Animal()'
    console.log('Congratulations on creating a new animal.');

    this.on("change", function(){
      console.log('An attribute was changed: ', this.changed);
    });

    this.on("change:name", function(){
      var oldName = this.previous('name');
      var newName = this.get('name');
      console.log('Name was changed from ' + oldName + ' to ' + newName);
    })

  },
  defaults: {
    looksWeird: true,
    hasPouch: false,
  }
});

var kangaroo = new Animal({
  name: 'Michelle the Googler',
  type: 'Giant Kangaroo',
  hasPouch: true,
  looksWeird: true
});

var butterfly = new Animal({
  name: 'Helga',
  type: 'Monarch'
});

var badger = new Animal({
  name: 'Chris Barnaby',
  type: 'Honey',
  lovesBeer: true
});

var meerkat  = new Animal({
  name: 'Rodney',
  type: 'Curious'
});

// "You know what??!! I'm sick of dealing with confusing shit!"
var Animals = Backbone.Collection.extend({
  model: Animal,

  initialize: function(){
    console.log('A new collection of animals (some people might call it a "zoo") was created.');

    this.on("add", function( animal ){
      console.log('An animal was added: ', animal.get('name') );
    });

    this.on("remove", function( animal ){
      var typeOfAnimal = animal.get("type");
      var message = "Be free, sweet " + typeOfAnimal;
      console.log( message );
    });

  }
});


var animals = new Animals([ kangaroo, badger ]);

animals.add({
  name: 'Edgy',
  type: 'Edgehog',
  looksWeird: true,
  lovesBeer: true
})

animals.remove( badger );

var animalsToRemove = animals.where({lovesBeer: true});
animals.remove( animalsToRemove );
