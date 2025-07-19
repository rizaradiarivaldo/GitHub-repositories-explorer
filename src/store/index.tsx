import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { apiSlice } from "./api/apiSlice"

const reducers = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([apiSlice.middleware]),
})
