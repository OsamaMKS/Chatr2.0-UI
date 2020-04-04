import React, { Component } from "react";
import { connect } from "react-redux";
import { setMessage } from "../redux/actions";
import Messages from "./MessagesForm";
import Loading from "../assets/images/loading.gif";
import { CLEAR_MESSAGES } from "../redux/actions/actionTypes";

class ChannelView extends Component {
  theMessagesInterval() {
    this.interval = setInterval(() => {
      const messages = this.props.setMessages;
      let timestamp = "";

      if (messages.length) timestamp = messages[messages.length - 1].timestamp;

      const channelID = this.props.match.params.channelID;

      this.props.SetMessage(channelID, timestamp);
    }, 5000);
  }

  componentDidMount() {
    this.theMessagesInterval();
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    let channelID = this.props.match.params.channelID;

    if (channelID !== prevProps.match.params.channelID) {
      this.props.clearMessages();
      clearInterval(this.interval);
      this.theMessagesInterval();
    }
    this.scrollToBottom();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  scrollToBottom = () => {
    if (this.messagesEnd) {
      this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    if (this.props.setMessages && this.props.user !== null) {
      return (
        <div>
          {this.props.setMessages.map((msg) => {
            return (
              <div
                key={msg.id}
                style={
                  msg.username !== this.props.user.username
                    ? { marginLeft: "20px", textAlign: "left" }
                    : { marginLeft: "20px", textAlign: " right" }
                }
              >
                <div
                  className="card border-dark mb-3"
                  style={{
                    maxWidth: "40rem",
                    background: "rgba(255, 255, 255, 0.71)",
                    textShadow:
                      "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff",
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

          <div className=" navbar-brand ">
            <Messages channelID={this.props.match.params.channelID} />
          </div>
          <button
            id="last"
            className="navbar-toggler "
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
            fixed="bottom"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              this.messagesEnd = el;
            }}
          >
            {""}
          </div>
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
const mapStateToProps = (state) => {
  return {
    user: state.user,
    setMessages: state.rootChannel.setMessages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearMessages: () => dispatch({ type: CLEAR_MESSAGES }),
    SetMessage: (channelID, timestamp) =>
      dispatch(setMessage(channelID, timestamp)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
