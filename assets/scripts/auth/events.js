const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const ui = require('./ui.js')

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .then((response) => {
      console.log('this is' + response)
    })
}

module.exports = {
  onSignUp
}
