var Ingredients = React.createClass({
  render() {
    var ingredients = this.props.ingredients.map((ingredient) => {
      return (
        <div key={ingredient.id}>
          <Ingredient ingredient={ingredient} />
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
