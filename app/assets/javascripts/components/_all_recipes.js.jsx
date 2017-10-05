var AllRecipes = React.createClass({
  render() {
    var recipes = this.props.recipes.map((recipe) => {
      return (
        <div>
          <h3>{recipe.title}</h3>
          <p>{recipe.directions}</p>
          <p>{recipe.owner}</p>
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
