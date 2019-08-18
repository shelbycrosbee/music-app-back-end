'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.boolean('active')
      table.string('display_name', 254)
      table.string('spotify_id', 80).notNullable().unique()

      //only for storing user's personal playlist
      table.string('uri_link', 254)

      //the stream that this person is listening to && their display_name
      table.string('topic_id', 254)
      table.string('playlist_master', 254)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
