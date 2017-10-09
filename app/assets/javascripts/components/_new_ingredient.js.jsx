var NewIngredient = React.createClass({
  getInitialState() {
    return {quantity: '', measurement: '', ingredient: ''}
  },

  updateInput(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  onAddIngredient() {
    var ingredient = {
      quantity: this.state.quantity,
      measurement: this.state.measurement,
      ingredient: this.state.ingredient,
      recipe_id: this.props.recipeId
    };

    $.ajax({
      url: 'api/recipes/' + this.props.recipeId + '/ingredients',
      type: 'POST',
      data: ingredient,
      success: () => { this.props.handleAddIngredient(ingredient) }
    });

    this.state.quantity = '';
    this.state.measurement = '';
    this.state.ingredient = '';
  },

  render() {
    return (
      <div>
        <p>quantity: <input type="number" name="quantity" value={this.state.quantity} onChange={this.updateInput}/></p>
        <p>measurement: <input type="text" name="measurement" value={this.state.measurement} onChange={this.updateInput}/></p>
        <p>ingredient: <input type="text" name="ingredient" value={this.state.ingredient} onChange={this.updateInput}/></p>
        <p><button onClick={this.onAddIngredient}>Submit</button></p>
      </div>
    )
  }
});
