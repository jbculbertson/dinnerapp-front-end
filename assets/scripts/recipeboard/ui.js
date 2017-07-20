'use strict'
const store = require('../store')
const showRecipesTemplate = require('../templates/show-recipes.handlebars')
const showMenuTemplate = require('../templates/show-menu.handlebars')

const createRecipeSuccess = (data) => {
}

const createRecipeFailure = () => {
}

const showAllRecipesSuccess = (data) => {
  store.recipes = data.recipes
  $('.recipe-board').empty()
  $('.create-recipe').val('')
  $('#create-recipe-modal').modal('hide')
  $('.delete-recipe').val('')
  $('#delete-recipe-modal').modal('hide')
  $('.update-recipe').val('')
  $('#update-recipe-modal').modal('hide')
  let showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.recipe-board').append(showRecipesHtml)

  // const menu = []
  // const onMenu = function (data) {
  //   for (let i = 0; i < data.recipes.length; i++) {
  //     if (data.recipes[i].on_menu) {
  //       menu.push(data.recipes[i].name)
  //     }
  //   }
  //   return menu
  // }
  // $('.menu-board').append(onMenu(data))

  // let showMenuHtml = showMenuTemplate({ recipes: data.recipes })
  // $('.menu-board').append(showMenuHtml)
}

const showAllRecipesFailure = () => {
}

const showMenuSuccess = (data) => {
  // store.recipe = data.recipe
  // let showMenuHtml = showMenuTemplate({ recipes: data.recipes })
  // $('.menu-board').append(showMenuHtml)
}

const showMenuFailure = () => {
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
  deleteRecipeFailure,
  showMenuSuccess,
  showMenuFailure
}
