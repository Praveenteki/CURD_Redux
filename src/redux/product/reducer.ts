import { createSlice } from "@reduxjs/toolkit";
import { getProductsList } from "./action";

export interface initialStateType {
  products: null | Array<any>;
  products_loading: boolean;
  products_error: any;
}

const initialState: initialStateType = {
  products: null,
  products_loading: false,
  products_error: null,
};

const kagorithmSlice = createSlice({
  name: "kagorithmSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsList.pending, (state, action) => {
      state.products_loading = true;
      state.products_error = null;
      state.products = null;
    });
    builder.addCase(getProductsList.fulfilled, (state, action) => {
      state.products_loading = false;
      state.products_error = null;
      state.products = action.payload;
    });
    builder.addCase(getProductsList.rejected, (state, action) => {
      state.products_loading = false;
      state.products_error = action.payload;
      state.products = null;
    });
  },
});

export const { reducer } = kagorithmSlice;
