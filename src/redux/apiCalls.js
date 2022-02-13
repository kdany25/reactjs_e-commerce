import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest , userRequest } from "../requestMethod";
import {  getSubscriberStart,
  getSubscriberSuccess,
  getSubscriberFailure,
  deleteSubscriberStart,
  deleteSubscriberSuccess,
  deleteSubscriberFailure,
  updateSubscriberStart,
  updateSubscriberSuccess,
  updateSubscriberFailure,
  addSubscriberStart,
  addSubscriberSuccess,
  addSubscriberFailure,} from "./subRedux"

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};



//subscribers
export const getSub = async (dispatch) => {
  dispatch(getSubscriberStart());
  try {
    const res = await userRequest.get("/sub");
    dispatch(getSubscriberSuccess(res.data));
  } catch (err) {
    dispatch(getSubscriberFailure());
  }
};

export const deleteSub = async (id, dispatch) => {
  dispatch(deleteSubscriberStart());
  try {
    const res = await userRequest.delete(`/sub/${id}`);
    dispatch(deleteSubscriberSuccess(res.data));
  } catch (err) {
    dispatch(deleteSubscriberFailure());
  }
};

export const updateSub = async (id, subscriber, dispatch) => {
  dispatch(updateSubscriberStart());
  try {
    // update
    dispatch(updateSubscriberSuccess({ id, subscriber }));
  } catch (err) {
    dispatch(updateSubscriberFailure());
  }
};
export const addSub = async (subscriber, dispatch) => {
  dispatch(addSubscriberStart());
  try {
    const res = await userRequest.post(`/sub`, subscriber);
    dispatch(addSubscriberSuccess(res.data));
  } catch (err) {
    dispatch(addSubscriberFailure());
  }
};
