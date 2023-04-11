import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API } from "../helpers/consts";

const initialState = {
  products: [],
};

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue, dispatch }) => {
    const { data } = await axios(API);
    dispatch(getProducts(data));
    console.log(data);
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: {
    [getAllProducts.pending]: () => console.log("getAllProd: pending"),
    [getAllProducts.fulfilled]: () => console.log("getAllProd: fulfilled"),
    [getAllProducts.rejected]: () => console.log("getAllProd: rejected"),
  },
});

export const { getProducts } = productsSlice.actions;
export default productsSlice.reducer;
