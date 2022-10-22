import { configureStore } from '@reduxjs/toolkit'
import { api } from './slices/apiSlice'
import categoryReducer from './slices/categorySlice'
import locationReducer from './slices/locationSlice'
import priceLevelReducer from './slices/priceLevelSlice'

const store = configureStore({
  reducer: {
    category: categoryReducer,
    location: locationReducer,
    priceLevel: priceLevelReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
