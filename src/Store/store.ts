// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { properyApiSlice } from "../Features/API/propertApiSlice.ts";
const store = configureStore({
  reducer: {
    [properyApiSlice.reducerPath]: properyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(properyApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
