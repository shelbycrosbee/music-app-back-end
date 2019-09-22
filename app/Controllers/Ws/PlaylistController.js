'use strict'
const Ws = use('Ws')
const User = use('App/Models/User');

let playlistOwner = {};
let activeUsers = {};


class PlaylistController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }

  async addEventListeners(){
    this.socket.on('close', () => {
      this.deactivateUser(activeUsers[this.socket.id]);
    })
  }

  async activateUser(spotify_id) {
    const user = await User.findBy('spotify_id', spotify_id);
    user.active = 1;
    await user.save();
  }

  async deactivateUser(spotify_id) {
    const user = await User.findBy('spotify_id', spotify_id);
    user.active = 0;
    await user.save();
  }


  async onInitialize({ spotify_id, topic_id }) {
    this.addEventListeners();
    activeUsers[this.socket.id] = spotify_id;
    this.activateUser(spotify_id);
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
    if (this.socket.id !== message.friend_id) {
      this.socket.emitTo('join', message.playlist, [message.friend_id])
    };
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
