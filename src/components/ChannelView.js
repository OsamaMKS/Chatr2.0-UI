import React, { Component } from "react";
import { connect } from "react-redux";
import { setMessage } from "../redux/actions";
import Messages from "./MessagesForm";
import Loading from "../assets/images/loading.gif";

class ChannelView extends Component {
  componentDidMount() {
    this.props.SetMessage(this.props.match.params.channelID);
  }

  componentDidUpdate(prevProps) {
    const channelID = this.props.match.params.channelID;
    if (prevProps.match.params.channelID !== channelID) {
      this.props.SetMessage(channelID);
    }
  }

  msgs() {}

  render() {
    if (this.props.channel) {
      return (
        <div>
          {this.props.channel.map(msg => {
            return (
              <div style={{ marginLeft: "20px", textAlign: "left" }}>
                <div
                  class="card border-dark mb-3"
                  style={{
                    maxWidth: "40rem",
                    background: "rgba(255, 255, 255, 0.71)"
                  }}
                >
                  <div class="card-body ">
                    <h5 class="text-secondary">
                      {msg.username + ": "}
                      <h6 class="text-dark">{msg.message}</h6>{" "}
                    </h5>
                  </div>
                </div>
              </div>
            );
          })}
          <nav
            className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom border border-white"
            style={{ marginLeft: "20%", width: "75%" }}
          >
            <div className="navbar-brand">
              <Messages channelID={this.props.match.params.channelID} />
            </div>
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <img src={Loading} alt="" />
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.rootChannels.channels,
    channel: state.rootChannel.setMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SetMessage: channelID => dispatch(setMessage(channelID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
