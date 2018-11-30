const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
// const ui = require('./ui.js')

//onSignUp receives event object from app.js/.on

const onSignUp = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target) //  return {name: asdasd passswoird: dsafsdf}
  // data is sent to SignUp fucntion is api.js
  api.signUp(data)
.then((responsefromAPI) => {//.then is  function that takes a call back > response (object from api) and does something with it,
      console.log(responsefromAPI.email)
    })
}


module.exports = {
  onSignUp
}
