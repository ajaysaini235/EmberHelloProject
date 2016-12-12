import Ember from 'ember';
var sckURL = 'ws://192.168.1.4:7000/';
export default Ember.Controller.extend({
  message:'',
  init: function() {
    this._super();
    var socket = this.get('websockets').socketFor(sckURL);
    socket.on('message', this.onMessage, this);
  },

  onMessage: function(event) {
    this.set('message',event.data);
  },

  actions: {
    sendButtonPressed: function() {
      var socket = this.get('websockets').socketFor(sckURL);
      socket.send('Hello Websocket World');
    }
  }

});

