'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('chat')

Route.post('/user', 'UserController.create')

Route.put('/update', 'UserController.update')

Route.get('/playlist', 'UserController.show')

Route.get('/users/active', 'UserController.activeUsers');

Route.put('/users/activeStatus', 'UserController.activeToggle')

