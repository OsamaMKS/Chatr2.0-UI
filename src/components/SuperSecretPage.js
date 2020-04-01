import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels } from "../redux/actions";

/**
 * This page was supposed to be a test for your authentication
 *
 * Either change it to be more useful or redirect the user to a better place
 */
class SuperSecretPage extends Component {
  componentDidMount() {
    this.props.fetch(); // <-- you don't need to to do this because you're already fetching channels in authentication actions
  }

  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return (
      <div>
        <h1>this page has all the secrets</h1>
        <p>now that you're logged in you can see this page</p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToprops = dispatch => ({
  fetch: () => dispatch(fetchChannels())
});

export default connect(mapStateToProps, mapDispatchToprops)(SuperSecretPage);
