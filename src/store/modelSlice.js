import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  componentName: null,
  position: null,
  info: {},
};

const modelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    openModel: (state, action) => {
      state.isOpen = true;
      state.componentName = action.payload.name;
      state.position = action.payload.position || "center";
      state.info = action.payload.info;
    },
    closeModel: (state, action) => {
      state.isOpen = false;
      state.componentName = null;
      state.position = "center";
      state.info = null;
    },
  },
});

export const { openModel, closeModel } = modelSlice.actions;

export default modelSlice.reducer;
