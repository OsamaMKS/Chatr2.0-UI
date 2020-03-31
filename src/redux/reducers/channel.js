import { CHANNEL_DETAIL } from "../actions/actionTypes";

const initialState = {
  channelDetail: null
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANNEL_DETAIL:
      const channel = action.payload;
      return {

        ...state,
        channelDetail: channel
      };
    default:
      return state;
  }
};
export default channelReducer;
