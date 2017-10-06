class Api::IngredientsController < ApplicationController
  def index
    @recipe = Recipe.find(params[:recipe_id])
    @ingredients = @recipe.ingredients
    render 'index.json.jbuilder'
  end

  def create
    Ingredient.create(
      quantity: params[:quantity],
      measurement: params[:measurement],
      ingredient: params[:ingredient],
      recipe_id: params[:recipe_id]
    )
  end
end
