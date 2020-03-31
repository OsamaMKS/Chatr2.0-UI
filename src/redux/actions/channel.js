import { CHANNEL_DETAIL } from ".//actionTypes";
import { setErrors } from "./errors";
import instance from "./instance";

export const channelDetail = () => {
  return async dispatch => {
    try {
      const res = await instance.get("channels/<CHANNEL_ID>/");

      const channel = res.data;

      dispatch({
        type: CHANNEL_DETAIL,
        payload: channel
      });
    } catch (error) {
      dispatch(setErrors(error));
    }
  };
};
