var Recipe = React.createClass({
  getInitialState() {
    return { ingredients: [], isEditable: false }
  },

  componentDidMount() {
    $.getJSON(`api/recipes/${this.props.recipe.id}/ingredients`, response => { this.setState({ ingredients: response }) });
  },

  updateInput(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  handleAddIngredient(ingredient) {
    this.setState({ ingredients: this.state.ingredients.concat(ingredient) });
  },

  editRecipe() {
    if (this.state.isEditable) {
      var recipe = {
        id: this.props.recipe.id,
        title: this.props.recipe.title,
        directions: this.props.recipe.directions,
        owner: this.props.recipe.owner
      };
      this.props.updateRecipe(recipe);
    }
    this.setState({isEditable: !this.state.isEditable})
  },

  deleteRecipe() {
    this.props.deleteRecipe(this.props.recipe.id);
  },

  handleDeleteIngredient(ingredientId) {
    $.ajax({
      url: `/api/recipes/${this.props.recipe.id}/ingredients/${ingredientId}`,
      type: 'DELETE',
      data: ingredientId,
      success: () => {
        var newState = this.state.ingredients.filter((i) => i.id != ingredientId);
        this.setState({ ingredients: newState });
      }
    });
  },

  render() {
    var title = this.state.isEditable ? <input type="text" name="title" defaultValue={this.props.recipe.title} onChange={this.updateInput} /> : this.props.recipe.title;
    var directions = this.state.isEditable ? <input type="text" name="directions" defaultValue={this.props.recipe.directions} onChange={this.updateInput} /> : this.props.recipe.directions;
    var owner = this.state.isEditable ? <input type="text" name="owner" defaultValue={this.props.recipe.owner} onChange={this.updateInput} /> : this.props.recipe.owner;

    return (
      <div>
        <h3>Title: {title}</h3>
        <p>Directions: {directions}</p>
        <p>Owner: {owner}</p>
        <button onClick={this.editRecipe}>{this.state.isEditable? 'Submit' : 'Edit'}</button>
        <button onClick={this.deleteRecipe}>Delete</button>
        <h5>Ingredients</h5>
        <Ingredients ingredients={this.state.ingredients} recipeId={this.props.recipe.id} handleDeleteIngredient={this.handleDeleteIngredient} />
        <NewIngredient recipeId={this.props.recipe.id} handleAddIngredient={this.handleAddIngredient} />
        <hr />
      </div>
    )
  }
});
