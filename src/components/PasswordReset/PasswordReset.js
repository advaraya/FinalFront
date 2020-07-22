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
import passwordReset from "../../services/ServicioPasswordReset";

class PasswordReset extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", email: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  handleChangeEmail(event) {
    console.log(event.target.value);
    this.setState({
      username: this.state.username,
      email: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    var result = await passwordReset(this.state.username, this.state.email);
    if (result.data.success) {
      alert(
        "We have sent you an email with the instructions to change your password"
      );
    } else {
      alert("Username or email is not correct");
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
          <p>To reset your password, please fill the details below</p>
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
              <label>Your Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.handleChangeEmail}
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

export default PasswordReset;
