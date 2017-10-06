var Recipe = React.createClass({
  getInitialState() {
    return { ingredients: [] }
  },

  componentDidMount() {
    $.getJSON('api/recipes/' + this.props.recipe.id +  '/ingredients', response => { this.setState({ ingredients: response }) });
  },

  show() {
    console.log(this.state.ingredients);
  },

  render() {
    return (
      <div>
        <h3>{this.props.recipe.title}</h3>
        <p>{this.props.recipe.directions}</p>
        <p>{this.props.recipe.owner}</p>
        <button onClick={this.show}>show me</button>
        <h5>Ingredients</h5>
        <Ingredients />
        <hr />
      </div>
    )
  }
});
