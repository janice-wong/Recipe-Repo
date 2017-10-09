var Ingredient = React.createClass({
  deleteIngredient(ingredientId) {
    this.props.deleteIngredient(this.props.ingredient.id);
  },

  render() {
    return (
      <div>
        {this.props.ingredient.quantity} {this.props.ingredient.measurement} {this.props.ingredient.ingredient}
        <button onClick={this.deleteIngredient}>Delete Ingredient</button>
      </div>
    )
  }
});
