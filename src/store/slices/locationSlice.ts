import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'

interface LocationState {
  value: string
}

const initialState: LocationState = {
  value: '',
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    reset: (state) => {
      state.value = initialState.value
    },
  },
})

export const { update, reset } = locationSlice.actions

export function selectLocation(state: AppState) {
  return state.location.value
}

export default locationSlice.reducer
