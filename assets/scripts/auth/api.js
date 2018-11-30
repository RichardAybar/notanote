'use strict'

 const config = require('../config.js')

 const signUp = (data) => {
   //gets data from events.js
   //ajax is a function that take in an object as a parameter
   //POST is  a restful action /CRUD
   return $.ajax({
     url: config.apiUrl + '/sign-up',
     method: 'POST',
     data: {credentials: data}
   })
 }

module.exports = {
  signUp
}
