'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.createRecipe(data)
    .then(ui.createRecipeSuccess)
    .catch(ui.createRecipeFailure)
}

const onShowAllRecipes = function (event) {
  const data = getFormFields(this)
  console.log(data)
  event.preventDefault()
  api.showAllRecipes(data)
    .then(ui.showAllRecipesSuccess)
    .catch(ui.showAllRecipesFailure)
}

const addHandlers = function () {
  $('#create-recipe').on('submit', onCreateRecipe)
  $('#show-all-recipes').on('click', onShowAllRecipes)
}

module.exports = {
  addHandlers
}
