class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all.reverse
    render 'index.json.jbuilder'
  end

  def create
    Recipe.create(
      title: params[:title],
      directions: params[:directions],
      owner: params[:owner]
    )
  end

  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.html { redirect_to recipes_url, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def recipe_params
      params.require(:recipe).permit(:title, :directions, :owner)
    end
end
