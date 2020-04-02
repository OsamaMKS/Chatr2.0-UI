import { SET_MESSAGE, ADD_MESSAGE } from "../actions/actionTypes";

const initialState = {
  setMessages: null,
  messages: []
};

/*
 *
 * I don't think you're using messages at all.
 * You can either remoev messages and rename setMessages to messages,
 * or combine them into a single property for messages.
 *
 */

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      const channel = action.payload;
      return {
        ...state,
        setMessages: channel
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
