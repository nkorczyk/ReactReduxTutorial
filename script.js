class App extends React.Component {
  state = {
    name: 'Ryu',
    age: 30
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', this.state.name);
  }

  render() {
    return (<div className="app-content">
      <h1>Hello ninjas</h1>
      <p>My name is {this.state.name}.</p>
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} />
        <button>Submit</button>
      </form>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
