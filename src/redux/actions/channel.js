import { CHANNEL_DETAIL, SEND_MESSAGE } from ".//actionTypes";
import { setErrors } from "./errors";
import instance from "./instance";

export const channelDetail = channelID => async dispatch => {
  dispatch({ type: CHANNEL_DETAIL, payload: null });
  try {
    console.log(channelID);
    const res = await instance.get(`channels/${channelID}/`);
    const channel = res.data;
    console.log(res.data);
    dispatch({
      type: CHANNEL_DETAIL,
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
        type: SEND_MESSAGE,
        payload: messageDetail
      });
      resetForm();
    } catch (error) {
      dispatch(setErrors(error));
    }
  };
};
