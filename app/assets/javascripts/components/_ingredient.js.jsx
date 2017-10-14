var Ingredient = React.createClass({
  getInitialState() {
    return {
      isEditable: false,
      quantity: this.props.ingredient.quantity,
      measurement: this.props.ingredient.measurement,
      ingredient: this.props.ingredient.ingredient
    }
  },

  updateInput(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  deleteIngredient(ingredientId) {
    this.props.deleteIngredient(this.props.ingredient.id);
  },

  editIngredient(ingredientId) {
    if (this.state.isEditable) {
      var ingredient = {
        id: this.props.ingredient.id,
        quantity: this.state.quantity,
        measurement: this.state.measurement,
        ingredient: this.state.ingredient
      }
      $.ajax({
        url: `/api/recipes/${this.props.ingredient.id}/ingredients/${this.props.ingredient.id}`,
        type: 'PUT',
        data: ingredient
      });
    }
    this.setState({isEditable: !this.state.isEditable});
  },

  render() {
    var quantity = this.state.isEditable ? <input type="text" name="quantity" onChange={this.updateInput} defaultValue={this.state.quantity} /> : this.state.quantity;
    var measurement = this.state.isEditable ? <input type="text" name="measurement" onChange={this.updateInput} defaultValue={this.state.measurement} /> : this.state.measurement;
    var ingredient = this.state.isEditable ? <input type="text" name="ingredient" onChange={this.updateInput} defaultValue={this.state.ingredient} /> : this.state.ingredient;
    var edit = this.state.isEditable ? "Submit" : "Edit"

    return (
      <div>
        {quantity} {measurement} {ingredient}
        <button onClick={this.editIngredient} className="btn btn-sm btn-primary">{edit}</button>
        <button onClick={this.deleteIngredient} className="btn btn-sm btn-danger">Delete</button>
      </div>
    )
  }
});
