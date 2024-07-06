import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./registerStore";
import { setupListeners } from "@reduxjs/toolkit/query";
export const store = configureStore({
  reducer: {
    login: userReducer,
  },
});

setupListeners(store.dispatch);
