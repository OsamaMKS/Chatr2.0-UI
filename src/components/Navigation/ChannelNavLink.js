import React from "react";
import { NavLink } from "react-router-dom";
import defaul_image from "../../assets/images/default.gif";

// FontAwesome
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHashtag } from "@fortawesome/free-solid-svg-icons";

const ChannelNavLink = ({ channel }) => (
  <li
    className="nav-item"
    data-toggle="tooltip"
    data-placement="right"
    title={channel.name}
  >
    <NavLink
      className="nav-link"
      to={`/ChannelView/${channel.id}`}
      // onClick="scrollWin(0, 50)"
    >
      {channel.image_url ? (
        <img
          src={channel.image_url}
          alt="CHANNEL_IMAGE"
          width="25px"
          height="25px"
          style={{ borderRadius: "50%" }}
        />
      ) : (
        <img
          src={defaul_image}
          alt="NO_IMAGE"
          width="25px"
          height="25px"
          style={{ borderRadius: "50%" }}
        />
      )}
      <span className="nav-link-text"> {channel.name}</span>
    </NavLink>
  </li>
);

export default ChannelNavLink;
