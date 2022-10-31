import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'
import { Business } from '@/types/business'
import { buildCreateApi } from '@reduxjs/toolkit/dist/query'
import { api } from './apiSlice'

interface BusinessesState {
  data: Business[]
  isLoading: boolean
  isError: boolean
}

const initialState: BusinessesState = {
  data: [],
  isLoading: false,
  isError: false,
}

export const businessesSlice = createSlice({
  name: 'businesses',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        api.endpoints.businessesSearch.matchFulfilled,
        (state, { payload }) => {
          state.data = payload
          state.isLoading = false
          state.isError = false
        }
      )
      .addMatcher(api.endpoints.businessesSearch.matchPending, (state) => {
        state.isLoading = true
      })
      .addMatcher(api.endpoints.businessesSearch.matchRejected, (state) => {
        state.isError = true
      })
  },
})

export function selectBusinesses(state: AppState) {
  return state.businesses.data
}

export function selectIsLoading(state: AppState) {
  return state.businesses.isLoading
}

export function selectIsError(state: AppState) {
  return state.businesses.isError
}

export default businessesSlice.reducer
