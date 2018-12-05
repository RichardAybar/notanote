const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const ui = require('./ui.js')

// onSignUp receives event object from app.js/.on

// onSignUp receives event object from app.js/.on
const onSignUp = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  // data is sent to SignUp fucntion is api.js
  api.signUp(data)
    .then(ui.signUpSuccess) // .then is  function that takes a call back > response (object from api) and does something with it,
    .catch(ui.signUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.signIn(data)
    .then(ui.signInSuccess) // if your request was succesful
    .catch(ui.signInFailure) // if your request failed
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  $(event.target).trigger('reset')
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}


module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword,
  getFormFields
}



// UI FILE
// SHOWNOTES (NOTES) => {
//NOTES.FOREACH((NOTE)=>{
//  $(NOTES-CONTAINER).APPEND(NOTE.MESSAGE)
//})
//}

//EXPORT ALL ITS FUNCITON
//[{},{},{}]




//ONSIGNIN AND I THEN(RESOIBSE) CALLBACK -> UI.SHOWNOTES(RESPNSE)
