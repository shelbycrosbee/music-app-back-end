'use strict'
const Ws = use('Ws')
let playlistOwner = { soup: "11"};

class PlaylistController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  /*
  on[X](params){
    this.socket.function('event name', [return_value]);
  }
  */

  onInitialize({ spotify_id, topic_id }) {
    // console.log(spotify_id);
    // console.log(topic_id);
    if (spotify_id === topic_id) {
      playlistOwner[topic_id] = this.socket.id;
    }
    console.log(playlistOwner[topic_id]);
    this.socket.broadcastToAll('message', `joined topic ${topic_id}`);
    // console.log(playlistOwner);
  }

  onVar(message) {
    console.log(message);
    this.socket.broadcastToAll('message', playlistOwner[topic_id])
    // this.socket.emitTo('action', 'message', this.playlistOwner)
  }

  onSingleSend({spotify_id, topic_id}) {
    //Ws.getChannel('playlist:*').topic(`playlist:${spotify_id}`).broadcastToAll('[event name]', playlistOwner[topic_id])
    this.socket.broadcast('[event name]', 'Hello People!')
  }
}

module.exports = PlaylistController
