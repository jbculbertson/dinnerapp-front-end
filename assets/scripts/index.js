'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js')

$(() => {
  setAPIOrigin(location, config)
  authEvents.addHandlers()
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

$(() => {
 // NOT WORKING FOR SOME REASON
  // $('#log-in-button').click(function () {
  //   ('.lander').toggle()
  // })

})

// use require without a reference to ensure a file is bundled
require('./example')
