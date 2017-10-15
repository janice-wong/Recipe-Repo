var Recipe = React.createClass({
  getInitialState() {
    return {
      ingredients: [],
      isEditable: false,
      title: this.props.recipe.title,
      directions: this.props.recipe.directions,
      owner: this.props.recipe.owner
    }
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
        title: this.state.title,
        directions: this.state.directions,
        owner: this.state.owner
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
    var title = this.state.isEditable ? <input type="text" name="title" defaultValue={this.state.title} onChange={this.updateInput} /> : this.state.title;
    var directions = this.state.isEditable ? <input type="text" name="directions" defaultValue={this.state.directions} onChange={this.updateInput} /> : this.state.directions;
    var owner = this.state.isEditable ? <input type="text" name="owner" defaultValue={this.state.owner} onChange={this.updateInput} /> : this.state.owner;
    var edit = this.state.isEditable ? "Submit" : "Edit"

    return (
      <div className="col-md-4">
        <div className="well">
          <h3>{title}</h3>
          <p>By {owner}</p>
          <p><i>{directions}</i></p>
          <div className="btn-toolbar">
            <button onClick={this.editRecipe} className="btn btn-sm btn-primary">{edit}</button>
            <button onClick={this.deleteRecipe} className="btn btn-sm btn-danger">Delete</button>
          </div>
          <h5>Ingredients</h5>
          <Ingredients ingredients={this.state.ingredients} recipeId={this.props.recipe.id} handleDeleteIngredient={this.handleDeleteIngredient} />
          <br />
          <NewIngredient recipeId={this.props.recipe.id} handleAddIngredient={this.handleAddIngredient} />
          <hr />
        </div>
      </div>
    )
  }
});
