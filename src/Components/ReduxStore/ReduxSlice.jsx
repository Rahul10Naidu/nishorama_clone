import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSticky: false,
  arrows: {},
};

const reduxSlice = createSlice({
  name: "sl",

  initialState,

  reducers: {
    arrowRotate: (state, action) => {
      const { id } = action.payload;
      state.arrows[id] = !state.arrows[id];
    },

    rotate: (state) => {},
  },
});

export const { arrowRotate } = reduxSlice.actions;

export default reduxSlice.reducer;
