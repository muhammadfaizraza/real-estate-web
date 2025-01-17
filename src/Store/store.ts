// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { propertyApiSlice } from "../Features/API/propertApiSlice.ts";
const store = configureStore({
  reducer: {
    [propertyApiSlice.reducerPath]: propertyApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(propertyApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
