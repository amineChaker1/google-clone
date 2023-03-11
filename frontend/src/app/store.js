import { configureStore } from "@reduxjs/toolkit";
import { workoutSlice } from "./workoutSlice";

export const store = configureStore({
  reducer: {
    [workoutSlice.reducerPath]: workoutSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workoutSlice.middleware),
});
