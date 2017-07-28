'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
}

const signUpFailure = () => {
  $('.sign-up-modal-header').text('We may already have an account with that email')
  $('.sign-up').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.messages').text('Hi, ' + store.user.email)
  $('#sign-in-modal').modal('hide')
  $('#sign-up-modal').modal('hide')
  $('.sign-up-modal-header').text('')
  $('.sign-in-modal-header').text('')
  $('.jumbotron').hide()
  $('#myCarousel').hide()
  $('.about-row').hide()
  $('.navbar').show()
  $('.messages').show()
  $('.recipe-board').show()
  $('.ingredient-board').show()
  $('.container').show()
}

const signInFailure = () => {
  $('.sign-in-modal-header').text('Please make sure you have the correct credentials')
  $('.sign-in').val('')
}

const signOutSuccess = () => {
  $('.sign-in').val('')
  $('.sign-up').val('')
  $('.jumbotron').show()
  $('#myCarousel').show()
  $('.navbar').hide()
  $('.messages').hide()
  $('.recipe-board').empty()
  $('.recipe-board').hide()
  $('.ingredient-board').empty()
  $('.ingredient-board').hide()
  $('.container').hide()
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
  $('#change-password-modal').modal('hide')
  $('.change-password').val('')
  $('.message-board').text('Successfully changed password')
}

const changePasswordFailure = () => {
  $('.change-password-modal-header').text('Incorrect credentials.')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
