import { CHANNEL_DETAIL } from ".//actionTypes";
import { setErrors } from "./errors";
import instance from "./instance";

export const channelDetail = channelID => async dispatch => {
  dispatch({ type: CHANNEL_DETAIL, payload: null });
  try {
    console.log(channelID)
    const res = await instance.get(`channels/${channelID}/`);
    const channel = res.data;
    console.log(res.data)
    dispatch({
      type: CHANNEL_DETAIL,
      payload: channel
    });
  } catch (error) {
    alert(error)
    dispatch(setErrors(error));
  }
};
