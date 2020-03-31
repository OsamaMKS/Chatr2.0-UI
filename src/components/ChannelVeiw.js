import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels, channelDetail } from "../redux/actions";

class ChannelVeiw extends Component {
  componentDidMount() {
    this.props.ChannelDetail(this.props.match.params.channelID);
  }

  render() {
    if (this.props.channel) {
      return this.props.channel
        .find(channelID => channelID === this.props.channel.channel)
        .map(channel => {
          return <div>{channel.message}</div>;
        });
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
export default connect(mapStateToProps, mapDispatchToProps)(ChannelVeiw);
