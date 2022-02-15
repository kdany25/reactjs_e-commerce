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

  import {
    getOrderStart,
    getOrderSuccess,
    getOrderFailure,
    deleteOrderStart,
    deleteOrderSuccess,
    deleteOrderFailure,
    updateOrderStart,
    updateOrderSuccess,
    updateOrderFailure,
    addOrderStart,
    addOrderSuccess,
    addOrderFailure,
  } from "./orderRedux"

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


export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrderStart());
  try {
    const res = await userRequest.delete(`/order/${id}`);
    dispatch(deleteOrderSuccess(res.data));
  } catch (err) {
    dispatch(deleteOrderFailure());
  }
};

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateOrderStart());
  try {
    // update
    dispatch(updateOrderSuccess({ id, order }));
  } catch (err) {
    dispatch(updateOrderFailure());
  }
};
export const addOrder = async (order, dispatch) => {
  dispatch(addOrderStart());
  try {
    const res = await userRequest.post(`/order`, order);
    dispatch(addOrderSuccess(res.data));
  } catch (err) {
    dispatch(addOrderFailure());
  }
};
