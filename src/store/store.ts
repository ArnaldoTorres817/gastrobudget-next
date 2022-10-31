import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { api } from './slices/apiSlice'
import categoryReducer from './slices/categorySlice'
import locationReducer from './slices/locationSlice'
import priceLevelReducer from './slices/priceLevelSlice'
import businessesReducer from './slices/businessesSlice'

const store = configureStore({
  reducer: {
    category: categoryReducer,
    location: locationReducer,
    priceLevel: priceLevelReducer,
    businesses: businessesReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

setupListeners(store.dispatch)

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
