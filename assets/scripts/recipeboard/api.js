'use strict'

const config = require('../config.js')
const store = require('../store')

const createRecipe = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateRecipe = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + data.recipe.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteRecipe = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showAllRecipes = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/recipes',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const showMenu = function (data) {
//   return $.ajax({
//     url: config.apiOrigin + '/recipes',
//     method: 'GET',
//     data
//   })
// }

module.exports = {
  createRecipe,
  showAllRecipes,
  deleteRecipe,
  updateRecipe
  // showMenu
}
