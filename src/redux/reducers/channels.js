import { ADD_CHANNEL, FETCH_CHANNELS } from "../actions/actionTypes";

/**
 * If you change this to `initialState = []`
 * it can simplify all your mapStateToProps
 */

const initialState = {
  channels: []
};

const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHANNELS:
      const channels = action.payload;
      return {
        ...state,
        channels: channels
      };
    case ADD_CHANNEL:
      const addedChannels = [action.payload].concat(state.channels);
      return {
        ...state,
        channels: addedChannels
      };

    default:
      return state;
  }
};
export default channelsReducer;
