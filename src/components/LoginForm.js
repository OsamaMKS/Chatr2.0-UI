import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/actions";

class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.login(this.state, this.props.history);
  };

  /*
   *
   * How are users seeing error messages if something goes wrong
   * when they attempt to login/signup?
   *
   * You should move that card in Trello back to Backlog
   *
   */

  render() {
    const type = this.props.match.url.substring(1);
    if (this.props.user) return <Redirect to="/" />;
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">
            {type === "login"
              ? "Login to send messages"
              : "Register an account"}
          </h5>

          <form onSubmit={this.submitHandler}>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
              />
            </div>
            <input
              className="btn btn-primary"
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>

        <div className="card-footer">
          <Link to={"/signup"} className="btn btn-small btn-link">
            {"register an account"}
          </Link>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    login: (userData, history) => dispatch(login(userData, history))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
