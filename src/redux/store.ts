import { configureStore } from "@reduxjs/toolkit";
import { reducer as authReducer } from "./auth/reducer";
import { reducer as productReducer } from "./product/reducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
