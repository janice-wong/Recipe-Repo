var AllRecipes = React.createClass({
  render() {
    var recipes = this.props.recipes.map((recipe) => {
      return (
        <div key={recipe.id}>
          <Recipe recipe={recipe} />
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
