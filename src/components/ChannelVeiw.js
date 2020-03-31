import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels, channelDetail } from "../redux/actions";

class ChannelVeiw extends Component {
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
                            <div class="card border-dark mb-3" style={{ maxWidth: "40rem" }}>
                                <div class="card-body ">
                                    <h5 class="text-secondary">{msg.username + ": "}<h6 class="text-dark">{msg.message}</h6> </h5>
                                </div>
                            </div>
                        </div>
                    );
                });
            } else {
                return <div style={{ marginLeft: "20px" }}>Loading...</div>;
            }
        } else {
            return <div style={{ marginLeft: "20px" }}>Loading...</div>;
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
