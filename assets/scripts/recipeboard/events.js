'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}

const onDeleteRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.deleteRecipe(data.recipe.id)
    .then(ui.deleteRecipeSuccess)
    .catch(ui.deleteRecipeFailure)
}

const onShowAllRecipes = function (event) {
  event.preventDefault()
  api.showAllRecipes()
    .then(ui.showAllRecipesSuccess)
    .catch(ui.showAllRecipesFailure)
}

const addHandlers = function () {
  $('#create-recipe').on('submit', onCreateRecipe)
  $('#show-all-recipes').on('click', onShowAllRecipes)
  $('#delete-recipe').on('submit', onDeleteRecipe)
}

module.exports = {
  addHandlers
}
