'use strict'
const User = use('App/Models/User')
class UserController {

  async show({ request, response }) {
    const { spotify_id } = request.all();
    const user = await User.query().where(`spotify_id`, '=', spotify_id).fetch();
    response.send({ uri_link: user.rows[0].uri_link ? `spotify:playlist:${user.rows[0].uri_link}` : 'spotify:playlist:7GhIk7Il098yCjg4BQjzvb' });
  }

  async activeUsers({request, response}){
    const activeUsers = await User.query().where('active', '=', '1').fetch();
    response.send(activeUsers);
  }

  async activeToggle({request, response}){
    const {spotify_id, topic_id, active} = request.all()
    const user = await User.findBy('spotify_id',spotify_id);
    // console.log(user)
    user.topic_id = topic_id;
    user.active = active;
    await user.save();
    response.send(user);
  }

  async create({ request, response }) {
    const { spotify_id, active, premium, display_name } = request.all();
    const user = await User.query().where(`spotify_id`, '=', spotify_id).fetch();
    let newUser = 'user already exists';
    if (!user.rows[0]) {
      newUser = await User.create({ spotify_id, active, premium, display_name, uri_link: '62OqyAX5XFoXu0CykxhOyA',
     });
    }
    response.send(newUser);
  }

  async update({ request, response }) {
    const { spotify_id, uri_link } = request.all();
    console.log(spotify_id, uri_link)
    const user = await User.findBy('spotify_id',spotify_id);
    console.log(user);
    user.uri_link = uri_link;
    await user.save();
    response.send(user);
  }

  async setTopicID({request, response}) {
    const { spotify_id, topic_id } = request.all();
    const user = await User.findBy('spotify_id',spotify_id);
    user.topic_id = topic_id;
    await user.save();
    response.send(user);
  }

  async storePlaylist({request, response}) {
    const { spotify_id, playlist_uri } = request.all();
    const user = await User.findBy('spotify_id',spotify_id);
    user.uri_link = playlist_uri;
    await user.save();
    response.send(user);
  }




}

module.exports = UserController
