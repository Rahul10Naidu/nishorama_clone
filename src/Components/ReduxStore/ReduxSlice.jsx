import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSticky: false,
};

const reduxSlice = createSlice({
  name: "sl",

  initialState,

  reducers: {},
});

export const { setSticky } = reduxSlice.actions;

export default reduxSlice.reducer;
