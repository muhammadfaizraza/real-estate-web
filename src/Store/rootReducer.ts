// src/store/rootReducer.ts
import { combineReducers } from "@reduxjs/toolkit";
import { properyApiSlice } from "../Features/API/propertApiSlice.ts";

const rootReducer = combineReducers({
  [properyApiSlice.reducerPath]: properyApiSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
