var Ingredients = React.createClass({

  deleteIngredient(ingredientId) {
    this.props.handleDeleteIngredient(ingredientId);
  },

  render() {
    var ingredients = this.props.ingredients.map((ingredient) => {
      return (
        <div key={ingredient.id}>
          <Ingredient ingredient={ingredient} deleteIngredient={this.deleteIngredient} />
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
