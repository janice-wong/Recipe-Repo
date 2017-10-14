var Body = React.createClass({
  getInitialState() {
    return { recipes: [] }
  },

  componentDidMount() {
    $.getJSON('/api/recipes.json', response => { this.setState({ recipes: response }) });
  },

  handleSubmit(recipe) {
    this.state.recipes.unshift(recipe);
    this.setState({ recipes: this.state.recipes });
  },

  updateRecipe(recipe) {
    var recipeIndex = this.state.recipes.indexOf($.grep(this.state.recipes, function(e) { return e.id === recipe.id})[0]);

    $.ajax({
      url: `/api/recipes/${recipe.id}`,
      type: 'PUT',
      data: recipe
    });
  },

  deleteRecipe(recipeId) {
    $.ajax({
      url: `/api/recipes/${recipeId}`,
      type: 'DELETE',
      data: recipeId,
      success: () => {
        var newState = this.state.recipes.filter((i) => { return i.id != recipeId });
        this.setState({ recipes: newState });
      }
    });
  },

  render() {
    return (
      <div>
        <NewRecipe handleSubmit={this.handleSubmit} />
        <AllRecipes recipes={this.state.recipes} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe} />
      </div>
    )
  }
});
