/**
 * Rename this file to messages.js
 */

import { CHANNEL_DETAIL, SEND_MESSAGE } from "../actions/actionTypes";

/**
 * Which one of these states are you using??
 *
 * Simplify to `initialState = []`
 */
const initialState = {
  channelDetail: null,
  messages: []
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL_DETAIL:
      const channel = action.payload;
      return {
        ...state,
        channelDetail: channel
      };
    case SEND_MESSAGE:
      const messages = action.payload;
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      };
    default:
      return state;
  }
};
export default channelReducer;
