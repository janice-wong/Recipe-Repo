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

  render() {
    return (
      <div>
        <NewRecipe handleSubmit={this.handleSubmit} />
        <AllRecipes recipes={this.state.recipes} />
      </div>
    )
  }
});
