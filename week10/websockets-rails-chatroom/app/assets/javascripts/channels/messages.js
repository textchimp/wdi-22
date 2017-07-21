
App.messages = App.cable.subscriptions.create('MessagesChannel', {
  received: function(data){
    return $('#messages').append( this.renderMessage(data) );
  },

  renderMessage: function( msg ){
    return "<p><strong>" + msg.user + "</strong>: " + msg.message + "  </p>";
  }

});
