class Api::IngredientsController < ApplicationController

  def index
    @recipe = Recipe.find(params[:recipe_id])
    @ingredients = @recipe.ingredients
  end

  def new
    @recipe = Recipe.find(params[:recipe_id])
    @ingredient = Ingredient.new
  end

  def create
    @ingredient = Ingredient.create(
      quantity: params[:quantity],
      measurement: params[:measurement],
      ingredient: params[:ingredient],
      recipe_id: params[:recipe_id]
    )

    if @ingredient.save
      redirect_to "/recipes/#{params[:recipe_id]}/ingredients"
    else
      redirect_to "/recipes/#{params[:recipe_id]}/ingredients/new"
    end
  end
end
