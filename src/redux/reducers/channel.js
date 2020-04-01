import { SET_MESSAGE, ADD_MESSAGE } from "../actions/actionTypes";

const initialState = {
  channelDetail: null,
  messages: []
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      const channel = action.payload;
      return {
        ...state,
        channelDetail: channel
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat(action.payload)
      };
    default:
      return state;
  }
};
export default channelReducer;
