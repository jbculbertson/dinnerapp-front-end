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
  event.preventDefault()
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
  event.preventDefault()
  api.createListItem(data)
    .then(onShowAllListItems)
    .catch(ui.createListItemFailure)
}

const onShowAllListItems = function (event) {
  api.showAllListItems()
    .then(ui.showAllListItemsSuccess)
    .catch(ui.showAllListItemsFailure)
}

const onDeleteListItem = function () {
  // event.preventDefault()
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

// const onOpenUpdateRecipeModal = function (event) {
//   const recipe_id = $(this).parent().attr('data-recipe-id')
// }

const addHandlers = function () {
  $('#create-recipe').on('submit', onCreateRecipe)
  $('.recipe-board').on('click', 'li', onAddToGroceryList)
  $('.ingredient-board').on('click', 'button', onDeleteListItem)
  $('#update-recipe').on('submit', onUpdateRecipe)
  // $('.recipe-board').on('click', '#update-recipe-modal', onOpenUpdateRecipeModal)
  $('.recipe-board').on('click', '#delete-recipe', onDeleteRecipe)
  // $('#delete-recipe').on('submit', onDeleteRecipe)
}

module.exports = {
  addHandlers
}
