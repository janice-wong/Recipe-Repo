class Api::IngredientsController < ApplicationController
  def index
    @recipe = Recipe.find(params[:recipe_id])
    @ingredients = @recipe.ingredients
    render 'index.json.jbuilder'
  end

  def create
    @ingredient = Ingredient.create(
      quantity: params[:quantity],
      measurement: params[:measurement],
      ingredient: params[:ingredient],
      recipe_id: params[:recipe_id]
    )
    render 'show.json.jbuilder'
  end

  # def show
  #   @ingredient = Ingredient.find(params[:id])
  #   render 'show.json.jbuilder'
  # end

  def update
    Ingredient.find(params[:id]).update(
      quantity: params[:quantity],
      measurement: params[:measurement],
      ingredient: params[:ingredient]
    )
  end

  def destroy
    Ingredient.find(params[:id]).destroy
  end
end
