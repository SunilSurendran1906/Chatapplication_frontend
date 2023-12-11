import * as AuthApi from "../Api/AuthRequest.js";

export const logIn = (formData) => async (disptach) => {
  disptach({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    disptach({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    disptach({ type: "AUTH_FAIL" });
  }
};

export const signUp = (formData) => async (disptach) => {
  disptach({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    disptach({ type: "AUTH_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    disptach({ type: "AUTH_FAIL" });
  }
};

export const logOut = () => async (dispatch) => {
  dispatch({ type: "LOG_OUT" });
};
