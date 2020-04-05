import { SET_MESSAGE } from "../actions/actionTypes";

const initialState = {
  setMessages: [],
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        setMessages: state.setMessages.concat(action.payload),
      };

    default:
      return state;
  }
};
export default channelReducer;
