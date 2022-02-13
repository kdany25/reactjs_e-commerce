import { createSlice } from "@reduxjs/toolkit";

export const subSlice = createSlice({
  name: "subscriber",
  initialState: {
    subscribers: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //GET ALL
    getSubscriberStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getSubscriberSuccess: (state, action) => {
      state.isFetching = false;
      state.subscribers = action.payload;
    },
    getSubscriberFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE
    deleteSubscriberStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteSubscriberSuccess: (state, action) => {
      state.isFetching = false;
      state.subscribers.splice(
        state.subscribers.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteSubscriberFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    updateSubscriberStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateSubscriberSuccess: (state, action) => {
      state.isFetching = false;
      state.subscribers[
        state.subscribers.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.subscriber;
    },
    updateSubscriberFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //UPDATE
    addSubscriberStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addSubscriberSuccess: (state, action) => {
      state.isFetching = false;
      state.subscribers.push(action.payload);
    },
    addSubscriberFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getSubscriberStart,
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
  addSubscriberFailure,
} = subSlice.actions;

export default subSlice.reducer;