import React, { Component } from "react";
import { connect } from "react-redux";
import { setMessage } from "../redux/actions";
import Messages from "./MessagesForm";
import Loading from "../assets/images/loading.gif";

class ChannelView extends Component {
  componentDidMount() {
    const channelID = this.props.match.params.channelID;
    this.props.SetMessage(channelID);
    this.interval = setInterval(() => this.props.SetMessage(channelID), 5000);
  }

  componentDidUpdate(prevProps) {
    const channelID = this.props.match.params.channelID;
    if (prevProps.match.params.channelID !== channelID) {
      this.props.SetMessage(channelID);
      clearInterval(this.interval);
      this.interval = setInterval(() => this.props.SetMessage(channelID), 5000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    if (this.props.channel) {
      return (
        <div>
          {this.props.channel.map(msg => {
            return (
              <div
                key={msg.id}
                style={{ marginLeft: "20px", textAlign: "left" }}
              >
                <div
                  className="card border-dark mb-3"
                  style={{
                    maxWidth: "40rem",
                    background: "rgba(255, 255, 255, 0.71)",
                    textShadow:
                      "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
                  }}
                >
                  <div className="card-body ">
                    <h5 className="text-secondary">{msg.username + ": "}</h5>
                    <h6 className="text-dark">{msg.message}</h6>
                  </div>
                </div>
              </div>
            );
          })}
          {/* <nav
            className="navbar navbar-expand-md navbar-dark bg-dark fixed-bottom border border-white"
            style={{ marginLeft: "20%", width: "75%" }}
          > */}
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
          {/* </nav> */}
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
    channel: state.rootChannel.setMessages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SetMessage: channelID => dispatch(setMessage(channelID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
