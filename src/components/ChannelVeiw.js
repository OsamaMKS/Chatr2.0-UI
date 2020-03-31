import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { fetchChannels } from "../redux/actions"

class ChannelVeiw extends Component {
    state = {
        channel: { name: "" }
    }

    componentDidMount() {
        const channelID = this.props.match.params.channelID;
        const channel = this.props.channels.find(channel => channel.id === +channelID);
        this.setState({ channel: channel })
        console.log(channelID)
        console.log(channel)
        console.log(this.props.channels)

    }

    render() {
        return (
            <div>
                ffffffffffffffffffffff
                fffffffffffffffffff
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        channels: state.rootChannels.channels
    };
};

const mapDispatchToProps = dispatch => {

    return {
        fetchChannels: () => dispatch(fetchChannels())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ChannelVeiw);
