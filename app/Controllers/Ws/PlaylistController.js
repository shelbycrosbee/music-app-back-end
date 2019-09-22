'use strict'
const Ws = use('Ws')
let playlistOwner = {};


class PlaylistController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }


 async onInitialize({ spotify_id, topic_id }) {
    // console.log(spotify_id);
    // console.log(topic_id);
    if (spotify_id === topic_id) {
      playlistOwner[topic_id] = this.socket.id;
    }
    console.log(playlistOwner[topic_id]);
    this.socket.broadcastToAll('message', `joined topic ${topic_id}`);
    // console.log(playlistOwner);
  }

  onGivePosition(message) {
    if(this.socket.id !== message.friend_id){
    this.socket.emitTo('join', message.playlist, [message.friend_id])};
  }

  onAqui(message) {
    // console.log(playlistOwner[message.topic_id])
    this.socket.emitTo('donde', { friend_id: this.socket.id }, [playlistOwner[message.topic_id]])
  }

  onGiveGlobalPosition(message) {
    this.socket.broadcast('join', message.playlist);
  }

}

module.exports = PlaylistController
