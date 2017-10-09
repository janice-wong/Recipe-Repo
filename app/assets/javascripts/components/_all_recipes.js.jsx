var AllRecipes = React.createClass({
  updateRecipe(recipe) {
    this.props.updateRecipe(recipe);
  },

  render() {
    var recipes = this.props.recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
          <Recipe recipe={recipe} updateRecipe={this.updateRecipe}/>
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
