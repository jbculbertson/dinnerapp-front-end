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

const createListItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/list_items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const showAllListItems = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/list_items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteListItem = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/list_items/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createRecipe,
  showAllRecipes,
  deleteRecipe,
  updateRecipe,
  createListItem,
  showAllListItems,
  deleteListItem
}
