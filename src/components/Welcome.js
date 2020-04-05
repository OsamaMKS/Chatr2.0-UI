import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import login from "../assets/images/login.png";
import gif from "../assets/images/loading.gif"

class Welcome extends Component {
  render() {
    return (
      <div>
        {!this.props.user ? (
          <header className="masthead d-flex">

            <div className="container text-center my-auto z-1">
              <img
                src={gif}
                alt="cool"
                style={{ width: "35%", height: "35%" }}
              />
              <h1
                className="mb-1"
                style={{
                  textShadow:
                    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
                }}
              >
                Welcome to ChatMelon 2.0
              </h1>
              <h3
                className="mb-5 "
                style={{
                  textShadow:
                    "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
                }}
              >
                <em>Login to get started</em>
              </h3>
              <Link to="/login">
                <img
                  src={login}
                  alt="sign in"
                  style={{ width: "25%", height: "25%" }}
                />
              </Link>
            </div>
            <div className="overlay z-0" />
          </header>
        ) : (
            <Redirect to="/private" />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};
export default connect(mapStateToProps)(Welcome);
