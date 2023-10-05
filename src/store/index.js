import { configureStore } from "@reduxjs/toolkit";
import model from "./modelSlice";

export default configureStore({
  reducer: { model },
});
