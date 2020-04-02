import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setMessage, sendMessages } from "../redux/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

class SendingMessages extends Component {
  state = {
    message: "",
    showEmojis: false
  };

  showEmojis = e => {
    this.setState(
      {
        showEmojis: true
      },
      () => document.addEventListener("click", this.closeMenu)
    );
  };

  addEmoji = e => {
    let emoji = e.native;
    this.setState({
      message: this.state.message + emoji
    });
  };

  closeMenu = e => {
    console.log(this.emojiPicker);
    if (this.emojiPicker !== null && !this.emojiPicker.contains(e.target)) {
      this.setState(
        {
          showEmojis: false
        },
        () => document.removeEventListener("click", this.closeMenu)
      );
    }
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
    this.props.SendMessages(
      this.props.channelID,
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
            <div>
              <label forhtml="colFormLabelLg" style={{ marginLeft: "1rem " }}>
                message:
              </label>
              <input
                type="text"
                className="form-control form-control-lg input"
                id="colFormLabelLg"
                style={{
                  borderColor: "#e30090",
                  borderWidth: "2px",
                  hight: "100px",
                  width: "65rem",
                  marginLeft: "1%",
                  selfAlign: "center"
                }}
                name="message"
                value={this.state.message}
                placeholder="Write your message..."
                onChange={this.changeHandler}
              ></input>
            </div>

            <div>
              <button
                id="send"
                type="submit"
                value="Send"
                style={{ marginTop: "5px", marginLeft: "5rem " }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
              <button>
                {this.state.showEmojis ? (
                  <span ref={el => (this.emojiPicker = el)}>
                    <Picker
                      onSelect={this.addEmoji}
                      emojiTooltip={true}
                      title="Osama & Hammam"
                    />
                  </span>
                ) : (
                  <p
                    onClick={this.showEmojis}
                    style={{ marginBottom: "5px", marginTop: "3px" }}
                  >
                    {String.fromCodePoint(0x1f60a)}
                  </p>
                )}
              </button>
              <div />
              <div></div>
            </div>
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
    channel: state.rootChannel.setMessages
  };
};

const mapDispatchToProps = dispatch => {
  return {
    SetMessage: channelID => dispatch(setMessage(channelID)),
    SendMessages: (channelID, message, user, resetForm) =>
      dispatch(sendMessages(channelID, message, user, resetForm))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SendingMessages);
