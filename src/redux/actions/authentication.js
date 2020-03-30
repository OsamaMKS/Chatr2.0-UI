import jwt_decode from "jwt-decode";

import instance from "./instance";

import { SET_CURRENT_USER } from "./actionTypes";

// import { setErrors } from "./errors";

export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      console.log((user.exp - currentTime) / 60);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    instance.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete instance.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: SET_CURRENT_USER,
  payload: user
});

/*
 *
 * You can combine the login() and signup() actions into one
 * that receives the type as parameter.
 *
 */

export const login = (userData, history) => async dispatch => {
  try {
    const res = await instance.post("/login/", userData);
    const { token } = res.data;
    const decodedUser = jwt_decode(token);
    setAuthToken(token);
    dispatch(setCurrentUser(decodedUser));
    alert("You are getting it in the login :D"); // <-- remove before merging to master, unless you want users to actually see this popup.

    history.push("/users");
  } catch (error) {
    alert(error);

    console.error(error.response.data);
  }
};

export const signup = (userData, history) => async dispatch => {
  try {
    const res = await instance.post("/signup/", userData);
    const { token } = res.data;
    const decodedUser = jwt_decode(token);
    setAuthToken(token);
    alert("You are getting it in the sign up :D"); // <-- remove before merging to master, unless you want users to actually see this popup.
    dispatch(setCurrentUser(decodedUser));
    history.push("/users");
  } catch (error) {
    alert(error);

    console.error(error.response.data);
  }
};

export const logout = () => {
  alert("BYE BYE"); // <-- this should probably be removed before merging to master, unless it's meant to be there for actual users.

  setAuthToken();
  return setCurrentUser(null);
};
