'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use('Database')

const userData = [
  {
    display_name: 'Taylor',
    active: false,
    topic_id: '1',
    playlist_master: 'The one',
    spotify_id: 'nfxna1leqoph7v525cpm3a6cr',
    uri_link: '4Opixibkf4mLxOnREXTq1I'
  },
  {
    display_name: 'Tom',
    active: false,
    topic_id: '1',
    playlist_master: 'The one',
    spotify_id: 'kpe4iznisivy0txbbk76m0w46',
    uri_link: '37i9dQZF1DWWBHeXOYZf74'
  },
  {
    display_name: 'Shelby',
    active: false,
    topic_id: '1',
    playlist_master: 'The one',
    spotify_id: '22f63oznp4huleaxulv63sjxi',
    uri_link: '0dSNGcFcAoGPxQLpiBqzT4'
  },
  {
    display_name: 'Chris',
    active: false,
    topic_id: '1',
    playlist_master: 'The one',
    spotify_id: 'e3itsm9xo2go4zn5j2lgmkg5g',
    uri_link: '2WDXgJmHzcJlMMi02NsUaY'
  },
  {
    display_name: 'Sara',
    active: false,
    topic_id: '1',
    playlist_master: 'The one',
    spotify_id: 'saralouwho',
    uri_link: '62OqyAX5XFoXu0CykxhOyA'
  }
]

class UserSeeder {
  async run() {
    const savedUsers = userData.map(async user => {
      await Factory.model('App/Models/User').create(user)
    })
    await Promise.all(savedUsers)
  }
}

module.exports = UserSeeder

