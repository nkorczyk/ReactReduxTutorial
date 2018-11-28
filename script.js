class App extends React.Component {
  state = {
    name: 'Ryu',
    age: 30
  };

  handleClick = (event) => {
    this.setState({
      name: 'yoshi',
      age: 25
    });
    console.log(this.state);
  }

  handleMouseOver = (event) => {
    console.log(event.target, event.pageX);
  }

  handleCopy = (event) => {
    console.log("Try being original");
  }

  render() {
    return (<div className="app-content">
      <h1>Hello ninjas</h1>
      <p>My name is {this.state.name} and I am  {this.state.age}.</p>
      <button onClick={this.handleClick}>Click me</button>
      <button onMouseOver={this.handleMouseOver}>Hover Me</button>
      <p onCopy={this.handleCopy}>What we think, we became</p>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
