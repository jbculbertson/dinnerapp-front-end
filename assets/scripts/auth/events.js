'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const recipeUi = require('../recipeboard/ui')
const recipeApi = require('../recipeboard/api')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(function (response) {
      const loginData = {
        credentials: {
          email: data.credentials.email,
          password: data.credentials.password
        }
      }
      api.signIn(loginData)
        .then(ui.signInSuccess)
    })
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .done(ui.signInSuccess,
      function (response) {
        console.log("you made it within")
        recipeApi.showAllRecipes(data)
          .then(recipeUi.showAllRecipesSuccess)
          .catch(recipeUi.showAllRecipesFailure)
        recipeApi.showAllListItems(data)
          .then(recipeUi.showAllListItemsSuccess)
          .catch(recipeUi.showAllListItemsFailure)
      })
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out-button').on('click', onSignOut)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  addHandlers
}
