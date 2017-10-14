var Ingredients = React.createClass({

  deleteIngredient(ingredientId) {
    this.props.handleDeleteIngredient(ingredientId);
  },

  editIngredient(ingredientId) {
    this.props.handleEditIngredient(ingredientId);
  },

  render() {
    var ingredients = this.props.ingredients.map((ingredient) => {
      return (
        <div key={ingredient.id}>
          <Ingredient ingredient={ingredient} deleteIngredient={this.deleteIngredient} editIngredient={this.editIngredient} />
        </div>
      )
    });

    return (
      <div>
        {ingredients}
      </div>
    )
  }
});
