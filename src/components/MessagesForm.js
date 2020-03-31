import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { channelDetail, sendMessages } from "../redux/actions";
import Messages from "../redux/reducers/channel";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

class SendingMessages extends Component {
  state = {
    message: ""
  };

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  resetForm = () =>
    this.setState({
      message: ""
    });

  submitHandler = event => {
    event.preventDefault();
    this.props.sendMessage(
      this.props.match.params.channelID,
      this.state,
      this.props.user,
      this.resetForm
    );
  };
  render() {
    if (!this.props.user) return <Redirect to="/login" />;

    return (
      <div style={{ textAlign: "center", position: "relative" }}>
        <form name="messageForm" onSubmit={this.submitHandler}>
          <div className="row" id="scroller">
            <div className="col-8">
              <input
                style={{
                  borderColor: "#e30090",
                  borderWidth: "0px",
                  hight: "100px"
                }}
                name="message"
                value={this.state.message}
                placeholder="Write your message..."
                onChange={this.changeHandler}
                className="input"
              ></input>
            </div>

            <button id="send" type="submit" value="Send">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    channels: state.rootChannels.channels,
    channel: state.rootChannel.channelDetail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    ChannelDetail: channelID => dispatch(channelDetail(channelID)),
    sendMessage: (channelID, message, user, resetForm) =>
      dispatch(sendMessages(channelID, message, user, resetForm))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SendingMessages);
