import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels, channelDetail } from "../redux/actions";

class ChannelVeiw extends Component {
    componentDidMount() {

    }
    getMsg = () => {

        return (
            this.props.channel.find(msg => {
                if (msg.channel) {
                    return msg
                }
            }
            )
        )

    }
    componentDidUpdate() {
        if (!this.props.channel) {
            console.log(1)
            this.props.ChannelDetail(this.props.match.params.channelID);
        }
        else if (this.props.channel && (+this.props.match.params.channelID !== +this.getMsg().channel)) {
            console.log(2)
            this.props.ChannelDetail(this.props.match.params.channelID);
            console.log(this.getMsg().channel)
        }


    }




    render() {
        if (this.props.channel && this.props.channel !== null) {
            if (this.props.channel.filter(channel => channel.channel === this.props.channels.id)) {
                return (
                    this.props.channel.map(msg => {
                        return (
                            <div style={{ marginLeft: "20px" }}>
                                <h5>


                                    {msg.username}

                                    <small>

                                        {" : " + msg.message}
                                    </small>

                                    <br></br>
                                </h5>
                            </div>

                        )
                    }))
            }
            else {
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
export default connect(mapStateToProps, mapDispatchToProps)(ChannelVeiw);
