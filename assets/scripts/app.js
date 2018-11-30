'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events.js')
// document ready, doesnt run code until html is done loading
$(() => {
  // selects html ID and .on attaches event listener to ID,
  // .on takes 2 paramters, event tht it is listening for and the callback function that uses that event
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out-button').on('submit', authEvents.onSignOut)
})

// const events = require('./auth/events.js')
// HTML -  getFormFields - ID
//   html submit is clickeD events.onsIGNUP
//   $(ID).onSubmit(events.onsignup)
// const api = require('./auth/api.js')
// api.signUp({credentials: {
//   email: 'value@gmail.com',
//   password: 'value123',
//   password_confirmation: 'value123'
// }})

// your JS code goes here
