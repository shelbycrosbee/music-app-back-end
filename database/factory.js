'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', (faker, i, user) => {
  return {
    display_name: user.display_name,
    active: faker.bool(),
    topic_id: '1',
    playlist_master: 'The one',
    spotify_id: user.spotify_id,
    uri_link: user.uri_link,
    profile_pic: '',
    premium: true
  }
})
