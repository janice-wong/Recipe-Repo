var NewRecipe = React.createClass({
  getInitialState() {
    return {title: '', directions: '', owner: ''}
  },

  updateInput(e) {
    this.setState({[e.target.name]: e.target.value});
  },

  onSubmit() {
    var recipe = {
      title: this.state.title,
      directions: this.state.directions,
      owner: this.state.owner
    };

    $.ajax({
      url: '/api/recipes',
      type: 'POST',
      data: recipe,
      success: (recipe) => { this.props.handleSubmit(recipe) }
    });

    this.state.title = '';
    this.state.directions = '';
    this.state.owner = '';
  },

  render() {
    return (
      <div className="col-md-12">
        <div className="well">
          <p><input name="title" value={this.state.title} onChange={this.updateInput} placeholder="Title" /></p>
          <p><textarea className="directions" name="directions" placeholder="Directions" value={this.state.directions} onChange={this.updateInput}/></p>
          <p><input name="owner" placeholder="Owner" value={this.state.owner} onChange={this.updateInput}/></p>
          <p><button onClick={this.onSubmit} className="btn btn-sm btn-success">Submit</button></p>
        </div>
      </div>
    )
  }
});
