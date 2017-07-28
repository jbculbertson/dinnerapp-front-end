'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')

const onCreateRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createRecipe(data)
    .then(onShowAllRecipes)
    .catch(ui.createRecipeFailure)
}

const onUpdateRecipe = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.updateRecipe(data)
    .then(onShowAllRecipes)
    .catch(ui.updateRecipeFailure)
}

const onDeleteRecipe = function (event) {
  api.deleteRecipe(this.dataset.id)
    .then(onShowAllRecipes)
    .catch(ui.deleteRecipeFailure)
}

const onShowAllRecipes = function (event) {
  api.showAllRecipes()
    .then(ui.showAllRecipesSuccess)
    .catch(ui.showAllRecipesFailure)
}

const onCreateListItem = function (data) {
  // const data = getFormFields(this)
  event.preventDefault()
  api.createListItem(data)
    .then(onShowAllListItems)
    .catch(ui.createListItemFailure)
}

const onShowAllListItems = function (event) {
  // event.preventDefault()
  api.showAllListItems()
    .then(ui.showAllListItemsSuccess)
    .catch(ui.showAllListItemsFailure)
}

const onDeleteListItem = function () {
  api.deleteListItem(this.dataset.id)
    .then(onShowAllListItems)
    .catch(ui.deleteListItemFailure)
}

const onAddToGroceryList = function (event) {
  const data = {
    'list_item': {
      'item': this.id
    }
  }
  onCreateListItem(data)
}

const addHandlers = function () {
  $('#create-recipe').on('submit', onCreateRecipe)
  $('#update-recipe').on('submit', onUpdateRecipe)
  $('.recipe-board').on('click', 'li', onAddToGroceryList)
  $('.ingredient-board').on('click', 'button', onDeleteListItem)
  $('.recipe-board').on('click', 'button', onDeleteRecipe)
}

module.exports = {
  addHandlers
}
