import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels } from "../redux/actions";
class SuperSecretPage extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return (
      <div style={{
        textShadow:
          "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
      }}>
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
