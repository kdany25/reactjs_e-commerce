import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    RemoveProduct: (state, action) => {
      state.quantity -= 1;
      const nextCart= state.products.filter(product => product._id !== action.payload._id);
      state.total -= action.payload.price;
      state.products = nextCart;
    },
  },
});

export const { addProduct , RemoveProduct } = cartSlice.actions;
export default cartSlice.reducer;