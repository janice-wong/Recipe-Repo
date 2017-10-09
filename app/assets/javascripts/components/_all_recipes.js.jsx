var AllRecipes = React.createClass({
  updateRecipe(recipe) {
    this.props.updateRecipe(recipe);
  },

  deleteRecipe(recipeId) {
    this.props.deleteRecipe(recipeId);
  },

  render() {
    var recipes = this.props.recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
          <Recipe recipe={recipe} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe}/>
        </div>
      )
    });

    return (
      <div>
        {recipes}
      </div>
    )
  }
});
