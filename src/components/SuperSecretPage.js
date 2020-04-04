import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels } from "../redux/actions";
import pic from "../assets/images/welcome.gif"
class SuperSecretPage extends Component {
  render() {
    if (!this.props.user) return <Redirect to="/login" />;
    return (
      <div >
        <img className="card-img" src={pic} style={{ width: "50%", height: "50%", opacity: "0.9", marginTop: "3%" }} />
        <div className="card-img-overlay text-center" style={{
          textShadow:
            "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
          marginTop: "12%"
        }}>
          <h1 className="">Hi {this.props.user.username} .. </h1>
          <h1>Welcome to ChatMelon 2.0</h1>
        </div>

        <center >


          <button type="button" class="btn btn-success btn-lg btn-block mt-2" style={{ width: "80%" }} >Block level button</button>
          <button type="button" class="btn btn-danger btn-lg btn-block mt-1" style={{ width: "80%" }}>Block level button</button>
          <button type="button" class="btn btn-success btn-lg btn-block mt-2" style={{ width: "80%" }} >Block level button</button>
          <button type="button" class="btn btn-danger btn-lg btn-block mt-1" style={{ width: "80%" }}>What is this?</button>
        </center>
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
