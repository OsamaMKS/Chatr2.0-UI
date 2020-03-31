import { CHANNEL_DETAIL } from ".//actionTypes";
import { setErrors } from "./errors";
import instance from "./instance";

export const channelDetail = channelID => async dispatch => {
  dispatch({ type: CHANNEL_DETAIL });
  try {
    alert("I am inside the action Channel");
    const res = await instance.get(`channels/${channelID}/`);
    alert(res);
    const channel = res.data;
    alert(channel);
    dispatch({
      type: CHANNEL_DETAIL,
      payload: channel
    });
  } catch (error) {
    dispatch(setErrors(error));
  }
};
