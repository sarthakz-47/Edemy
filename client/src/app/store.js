import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../features/authSlice.js";
import { authApi } from "@/features/api/authApi.js";

export const appStore = configureStore({
  reducer: {
    auth: rootReducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});