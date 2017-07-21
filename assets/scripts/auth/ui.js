'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  store.user = data.user
  $('#sign-up-modal').modal('hide')
  $('.sign-up-modal-header').text('')
  $('.sign-in-modal-header').text('')
  $('.messages').show()
  $('.message-board').text('Please login.  I know its annoying - I\'ll fix soon!')
}

const signUpFailure = () => {
  $('.sign-up-modal-header').text('We may already have an account with that email')
  $('.sign-up').val('')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.message-board').text('Welcome back, ' + store.user.email)
  $('#sign-in-modal').modal('hide')
  $('.jumbotron').hide()
  $('#myCarousel').hide()
  $('.navbar').show()
  $('.features').show()
  $('.messages').show()
  $('.sign-in-modal-header').text('')
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
  $('.features').hide()
  $('.messages').hide()
  $('.recipe-board').empty()
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
