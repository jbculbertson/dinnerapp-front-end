'use strict'

const config = require('../config.js')
const store = require('../store')

const createRecipe = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    data
  })
}

const deleteRecipe = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + data,
    method: 'DELETE'
  })
}

const showAllRecipes = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
    data
  })
}

module.exports = {
  createRecipe,
  showAllRecipes,
  deleteRecipe
}
