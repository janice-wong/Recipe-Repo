var Body = React.createClass({
  getInitialState() {
    return { recipes: [], displayAdd: false }
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

  toggleAdd() {
    this.setState({displayAdd: !this.state.displayAdd});
  },

  render() {
    var addRecipe = this.state.displayAdd ? "Done" : "Add Recipe";

    return (
      <div>
        <div className="col-md-12">
          <p><button className="btn btn-sm btn-default" onClick={this.toggleAdd}>{addRecipe}</button></p>
        </div>
        <React.addons.CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          { this.state.displayAdd ? <NewRecipe handleSubmit={this.handleSubmit} /> : null }
        </React.addons.CSSTransitionGroup>
        <AllRecipes recipes={this.state.recipes} updateRecipe={this.updateRecipe} deleteRecipe={this.deleteRecipe} />
      </div>
    )
  }
});
