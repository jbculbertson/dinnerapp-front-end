'use strict'
const store = require('../store')
const showRecipesTemplate = require('../templates/show-recipes.handlebars')

const createRecipeSuccess = (data) => {
  $('.create-recipe').val('')
  $('#create-recipe-modal').modal('hide')
}

const createRecipeFailure = () => {
}

const showAllRecipesSuccess = (data) => {
  store.recipe = data.recipe
  let showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.recipe-board').append(showRecipesHtml)
}

const showAllRecipesFailure = () => {
}

const deleteRecipeSuccess = () => {
  $('.delete-recipe').val('')
  $('#delete-recipe-modal').modal('hide')
}

const deleteRecipeFailure = () => {
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  showAllRecipesSuccess,
  showAllRecipesFailure,
  deleteRecipeSuccess,
  deleteRecipeFailure
}
