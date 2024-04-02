import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../service";
import { apiUrls } from "../../utils/apiUrls";

export const getProductsList = createAsyncThunk(
  "getProductsList",
  async (params, thunkApi) => {
    try {
      const data = await request(apiUrls.productList, "GET", null);
      return data?.response;
    } catch (error) {
      return thunkApi.rejectWithValue(JSON.stringify(error));
    }
  }
);
