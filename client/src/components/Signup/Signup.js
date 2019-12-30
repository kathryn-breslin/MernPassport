import React, { Component } from "react";
import axios from "axios";

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

      axios.post("/user/", {
        username: this.state.username,
        password: this.state.password 
      }).then(response => {
          console.log(response)

          if (response.data){
              console.log("successful signup")
              this.setState({ 
                  redirectTo: "/login"
              })
          }
          else {
              console.log("Signup error")
          }
      }).catch(error => {
          console.log("Signup server error")
          console.log(error)
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
