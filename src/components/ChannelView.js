import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels, channelDetail } from "../redux/actions";
import Messages from "./MessagesForm";
import Loading from "../loading.gif"

class ChannelView extends Component {
  componentDidMount() {
    this.props.ChannelDetail(this.props.match.params.channelID);
  }


  componentDidUpdate(prevProps) {
    const channelID = this.props.match.params.channelID;
    if (prevProps.match.params.channelID !== channelID) {
      this.props.ChannelDetail(channelID);
    }
  }

  render() {
    if (this.props.channel) {
      return this.props.channel.map(msg => {
        return (
          <div style={{ marginLeft: "20px", textAlign: "left" }}>

            <div class="card border-dark mb-3" style={{
              maxWidth: "40rem", background: "rgba(255, 255, 255, 0.71)", textShadow:
                "-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff"
            }} >
              <div class="card-body ">
                <h5 class="text-secondary">
                  {msg.username + ": "}
                  <h6 class="text-dark">{msg.message}</h6>{" "}
                </h5>
              </div>
            </div>
          </div>
        );
      });

    }
    else {
      return <div><img src={Loading} alt="" /></div>;
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
