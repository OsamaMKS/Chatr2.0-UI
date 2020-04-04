import React, { Component } from "react";
import { connect } from "react-redux";
import { setMessage } from "../redux/actions";
import Messages from "./MessagesForm";
import Loading from "../assets/images/loading.gif";
// import ScrollableFeed from "react-scrollable-feed";

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
    const channelID = this.props.match.params.channelID;

    if (this.props.channel && this.props.user !== null) {
      return (
        <center className="row " >

          {this.props.channel.map(msg => {
            return (
              <div
                className="col-12"
                key={msg.id}
                style={{ marginLeft: "20px", textAlign: "left" }}
              >
                {msg.username !== this.props.user.username ?
                  <div
                    className="card border-danger  mb-3 "
                    style={{
                      borderWidth: "medium",
                      background: "rgba(255, 255, 255, 0.71)",
                      marginRight: "50%"
                    }}
                  >
                    <div className="card-body" >
                      <p className="text-danger">{msg.username + ":"}</p>
                      <h5 className="text-dark">{msg.message}</h5>
                    </div>

                  </div>
                  :
                  <div
                    className="card border-success  mb-3 "
                    style={{
                      borderWidth: "medium",
                      background: "rgba(255, 255, 255, 0.71)",
                      marginLeft: "50%",
                      marginRight: "2.5%"
                    }}
                  >
                    <div className="card-body ">
                      <h5 className="text-dark text-right mr-3"
                      >{msg.message}</h5>
                    </div>

                  </div>}



              </div >


            );
          })
          }

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
            fixed="bottom"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* </nav> */}
        </center >
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
    channelOwner: state.rootChannels.channels[0],
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
