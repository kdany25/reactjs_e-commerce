import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      toast.success("Added to cart", {
        position: "top-right",
      });
    },
    RemoveProduct: (state, action) => {
      state.quantity -= 1;
      const nextCart= state.products.filter(product => product._id !== action.payload._id);
      state.total -= action.payload.price * action.payload.quantity;
      state.products = nextCart;
      toast.error("Product removed from cart", {
        position: "bottom-left",
      });
    },

    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;

        toast.info("Decreased product quantity", {
          position: "bottom-left",
        });
      } else if (state.products[itemIndex].quantity === 1) {
        const nextproducts = state.products.filter(
          (item) => item._id !== action.payload._id
        );

        state.products = nextproducts;

        toast.error("Product removed from cart", {
          position: "bottom-left",
        });
      }

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    increaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity += 1;

        toast.success("you added qantity of product", {
          position: "bottom-left",
        });
      } 

      localStorage.setItem("products", JSON.stringify(state.products));
    },

    clearCart(state, action) {
      state.products = [];
      state.quantity = 0;
      state.total = 0 ;
      localStorage.setItem("products", JSON.stringify(state.products));
      toast.info("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addProduct , RemoveProduct , decreaseCart, increaseCart , clearCart } = cartSlice.actions;
export default cartSlice.reducer;