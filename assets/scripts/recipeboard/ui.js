'use strict'
const store = require('../store')
const showRecipesTemplate = require('../templates/show-recipes.handlebars')

const createRecipeSuccess = (data) => {
}

const createRecipeFailure = () => {
}

const showAllRecipesSuccess = (data) => {
  store.recipe = data.recipe
  $('.recipe-board').empty()
  $('.create-recipe').val('')
  $('#create-recipe-modal').modal('hide')
  $('.delete-recipe').val('')
  $('#delete-recipe-modal').modal('hide')
  let showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.recipe-board').append(showRecipesHtml)
}

const showAllRecipesFailure = () => {
}

const deleteRecipeSuccess = () => {

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
