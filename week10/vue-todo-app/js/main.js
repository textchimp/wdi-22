
Vue.component('todo-item', {
  props: ['todo'],
  template: '\
    <li>\
    <input type="checkbox" v-model="todo.done">\
    {{ todo.text }}\
    </li>\
  '});

var app = new Vue({
  el: '#app',
  data: {
    visible: true,
    newItemText: '',
    message: 'Hello World', //'Popup text' + Date.now()
    todo_list: [
      { text: 'item 1', done: true },
      { text: 'item 2', done: false }
    ]
  }, // data
  mounted: function(){
    console.log('component mounted');
  },
  watch: {
    todo_list: function(newValue){
      console.log(newValue);
      // $.post({
      //   url: '/todos',
      //   data: {
      //     todos: newValue
      //   }
      // });
    }
  },
  methods: {
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('');
    },
    addItem: function(){
      this.todo_list.push({
        text: this.newItemText,
        done: false
      });
      this.newItemText = '';
    }
  }

});
