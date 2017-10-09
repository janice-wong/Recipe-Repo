var Ingredient = React.createClass({
  render() {
    return (
      <div>
        {this.props.ingredient.quantity} {this.props.ingredient.measurement} {this.props.ingredient.ingredient}
      </div>
    )
  }
});
