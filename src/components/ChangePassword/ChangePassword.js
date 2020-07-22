import React from "react";
import { render } from "@testing-library/react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
  Redirect,
} from "react-router-dom";
import changePassword from "../../services/ServicioChangePassword";

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    console.log(event.target.value);
    this.setState({
      username: this.state.username,
      password: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    var result = await changePassword(this.state.username, this.state.password);
    if (result.data.success) {
      return this.props.history.push("/login");
    } else {
      alert("Your username or password are is not correct, check again");
    }
  }

  render() {
    return (
      <div id="login">
        <aside>
          <figure>
            <a href="index.html">
              <img
                src="img/logo.png"
                width="165"
                height="35"
                alt=""
                className="logo_sticky"
              />
            </a>
          </figure>
          <p>Choose your new password</p>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Your Username</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputUsername"
                aria-describedby="emailHelp"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Your New Password</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.password}
                onChange={this.handleChangePassword}
              />
            </div>
            <button type="submit" className="btn btn-primary" value="Submit">
              Submit
            </button>
          </form>
          <Link to="/login" className="enlace">
            Already have an acccount? Login
          </Link>
        </aside>
      </div>
    );
  }
}

export default ChangePassword;
