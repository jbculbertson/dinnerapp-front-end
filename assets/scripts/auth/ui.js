'use strict'
const store = require('../store')

const signUpSuccess = (data) => {
  store.user = data.user
}

const signUpFailure = () => {
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.jumbotron').hide()
}

const signInFailure = () => {
}

const signOutSuccess = () => {
}

const signOutFailure = () => {
}

const changePasswordSuccess = () => {
}

const changePasswordFailure = () => {
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