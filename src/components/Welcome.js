import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Welcome extends Component {
  render() {
    return (
      <div>
        {!this.props.user ? (
          <header className="masthead d-flex">
            <div className="container text-center my-auto z-1">
              <h1
                className="mb-1"
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }}
              >
                WELCOME TO CHATR
              </h1>
              <h3
                className="mb-5 "
                style={{
                  textShadow:
                    "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
                }}
              >
                <em>You're gonna need to login to see the messages</em>
              </h3>
              <Link to="/login" className="btn btn-primary btn-lg">
                Login
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
