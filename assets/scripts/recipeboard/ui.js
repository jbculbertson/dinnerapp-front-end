'use strict'
const store = require('../store')
const showRecipesTemplate = require('../templates/show-recipes.handlebars')

const createRecipeSuccess = (data) => {
  console.log(data)
}

const createRecipeFailure = () => {
}

const showAllRecipesSuccess = (data) => {
  store.recipe = data.recipe
  let showRecipesHtml = showRecipesTemplate({ recipes: data.recipes })
  $('.message-board').append(showRecipesHtml)
  console.log(data)
}

const showAllRecipesFailure = () => {
}

module.exports = {
  createRecipeSuccess,
  createRecipeFailure,
  showAllRecipesSuccess,
  showAllRecipesFailure
}
