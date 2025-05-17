import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "./ReduxSlice";

export const reduxStore = configureStore({
  reducer: {
    sl: reduxSlice,
  },
});
