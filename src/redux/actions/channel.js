import { SET_MESSAGE, ADD_MESSAGE } from ".//actionTypes";
import { setErrors } from "./errors";
import instance from "./instance";

// I'd rename this to setMessages
export const setMessage = channelID => async dispatch => {
  try {
    const res = await instance.get(`channels/${channelID}/`);
    const channel = res.data;
    dispatch({
      type: SET_MESSAGE,
      payload: channel
    });
  } catch (error) {
    dispatch(setErrors(error));
  }
};

export const sendMessages = (channelID, message, user, resetForm) => {
  return async dispatch => {
    try {
      const res = await instance.post(`channels/${channelID}/send/`, message);

      const messageRes = res.data;

      const messageDetail = {
        id: user.id,
        username: user.username,
        message: messageRes,
        channel: channelID
      };

      dispatch({
        type: ADD_MESSAGE,
        payload: messageDetail
      });
      resetForm();
    } catch (error) {
      dispatch(setErrors(error));
    }
  };
};
