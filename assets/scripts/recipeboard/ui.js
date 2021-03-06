'use strict'
const store = require('../store')
const showRecipesTemplate = require('../templates/show-recipes.handlebars')
const showGroceryListTemplate = require('../templates/show-grocery_list.handlebars')

const createRecipeSuccess = (data) => {
}

const createRecipeFailure = () => {
}

const createListItemSuccess = (data) => {
}

const showAllListItemsSuccess = (data) => {
  store.list_items = data.list_items
  $('.ingredient-board').empty()
  let showGroceryListHtml = showGroceryListTemplate({ list_items: data.list_items })
  $('.ingredient-board').append(showGroceryListHtml)
  // $('.grocery-list').val('')
  $('.delete-item').val('')
}

const showAllRecipesSuccess = (data) => {
  store.recipes = data.recipes
  $('.messages').text('Click on an ingredient to add it to your grocery list!')
  $('.recipe-board').empty()
  $('.create-recipe').val('')
  $('#create-recipe-modal').modal('hide')
  $('.update-recipe').val('')
  $('#update-recipe-modal').modal('hide')
  let showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.recipe-board').append(showRecipesHtml)
}

const showAllRecipesFailure = () => {
}

const showMenuFailure = () => {
}

const deleteRecipeSuccess = () => {
}

const deleteRecipeFailure = () => {
}

const deleteListItemSuccess = () => {
}

const deleteListItemFailure = () => {
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  createListItemSuccess,
  showAllRecipesSuccess,
  showAllRecipesFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure,
  showMenuFailure,
  showAllListItemsSuccess,
  deleteListItemSuccess,
  deleteListItemFailure
}
