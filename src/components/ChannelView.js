import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels, channelDetail } from "../redux/actions";

class ChannelView extends Component {
  componentDidMount() {
    this.props.ChannelDetail(this.props.match.params.channelID);
  }
  getMsg = () => {
    return this.props.channel.find(msg => {
      if (msg.channel) {
        return msg;
      }
    });
  };

  componentDidUpdate(prevProps) {
    const channelID = this.props.match.params.channelID;
    if (prevProps.match.params.channelID !== channelID) {
      this.props.ChannelDetail(channelID);
    }
  }

  render() {
    if (this.props.channel) {
      if (
        this.props.channel.filter(
          channel => channel.channel === this.props.channels.id
        )
      ) {
        return this.props.channel.map(msg => {
          return (
            <div style={{ marginLeft: "20px" }}>
              {msg.username}
              {" : " + msg.message}
              <br></br>
            </div>
          );
        });
      } else {
        return <div>Loading...</div>;
      }
    } else {
      return <div>Loading...</div>;
    }
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
    ChannelDetail: channelID => dispatch(channelDetail(channelID))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChannelView);
