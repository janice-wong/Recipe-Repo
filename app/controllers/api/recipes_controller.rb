class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.reverse
    render 'index.json.jbuilder'
  end

  def create
    @recipe = Recipe.create(
      title: params[:title],
      directions: params[:directions],
      owner: params[:owner]
    )
    render 'show.json.jbuilder'
  end

  # def show
  #   @recipe = Recipe.find(params[:id])
  #   render 'show.json.jbuilder'
  # end

  def update
    Recipe.find(params[:id]).update(
      title: params[:title],
      directions: params[:directions],
      owner: params[:owner]
    )
  end

  def destroy
    Recipe.find(params[:id]).destroy
  end
end
