import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };

  handleInputChange = (event) => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      })
  }

  handleFormSubmit = (event) => {
      console.log(this.state.username);
      event.preventDefault();

      this.setState({ 
          username: this.state.username,
          password: this.state.password
      })
  }


  render() {
    return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="username"
            className="form-control"
            id="userna,e"
            aria-describedby="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}

          />
        </div>
        <button type="submit" className="btn btn-primary"
        onClick={this.handleFormSubmit}>
          Signup
        </button>
      </form>
      </div>
    );
  }
}

export default Signup;
