import React, { Component } from "react";

class Signup extends Component {
  state = {
    username: "",
    password: ""
  };


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
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
      </div>
      /* //   <form classNameName="form-horizontal">
    //     <div classNameName="form-group">
    //       <label classNameName="form-label" htmlFor="username">
    //         Username
    //       </label>
    //       <input
    //         classNameName="form-input username"
    //         type="text"
    //         id="username"
    //         name="username"
    //         placeholder="Create a username"
    //         value={this.state.username}
    //         // onChange={this.handleChange}
    //       />
    //       <label classNameName="form-label" htmlFor="password">
    //         Password
    //       </label>
    //       <input
    //         classNameName="form-input"
    //         placeholder="Create a password"
    //         type="password"
    //         name="password"
    //         value={this.state.password}
    //         // onChange={this.handleChange}
    //       />
    //     </div>
    //       <button
    //         classNameName="btn btn-info"
    //         onClick={this.handleSubmit}
    //         type="submit"
    //       >
    //         Sign up
    //       </button>
    //   </form> */
    );
  }
}

export default Signup;
