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

const onOpenUpdateRecipeModal = function () {
  $('#update-recipe-modal').modal('show')
  const id = (this.dataset.recipeId)
  const name = (this.dataset.recipeName)
  const ingredient1 = (this.dataset.recipeIngredient1)
  const ingredient2 = (this.dataset.recipeIngredient2)
  const ingredient3 = (this.dataset.recipeIngredient3)
  const ingredient4 = (this.dataset.recipeIngredient4)
  const ingredient5 = (this.dataset.recipeIngredient5)
  const ingredient6 = (this.dataset.recipeIngredient6)
  const ingredient7 = (this.dataset.recipeIngredient7)
  const ingredient8 = (this.dataset.recipeIngredient8)
  const ingredient9 = (this.dataset.recipeIngredient9)
  const ingredient10 = (this.dataset.recipeIngredient10)
  $('.update-recipe_id').val(id)
  $('.update-recipe_name').val(name)
  $('.update-recipe_ingredient1').val(ingredient1)
  $('.update-recipe_ingredient2').val(ingredient2)
  $('.update-recipe_ingredient3').val(ingredient3)
  $('.update-recipe_ingredient4').val(ingredient4)
  $('.update-recipe_ingredient5').val(ingredient5)
  $('.update-recipe_ingredient6').val(ingredient6)
  $('.update-recipe_ingredient7').val(ingredient7)
  $('.update-recipe_ingredient8').val(ingredient8)
  $('.update-recipe_ingredient9').val(ingredient9)
  $('.update-recipe_ingredient10').val(ingredient10)
}

const addHandlers = function () {
  $('#create-recipe').on('submit', onCreateRecipe)
  $('.recipe-board').on('click', 'li', onAddToGroceryList)
  $('.ingredient-board').on('click', '#delete-grocery-item', onDeleteListItem)
  $('#update-recipe').on('submit', onUpdateRecipe)
  $('.recipe-board').on('click', '#update-recipe-button', onOpenUpdateRecipeModal)
  $('.recipe-board').on('click', '#delete-recipe', onDeleteRecipe)
  // $('#delete-recipe').on('submit', onDeleteRecipe)
}

module.exports = {
  addHandlers
}
