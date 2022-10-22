import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'

interface PriceLevelState {
  value: number
}

const initialState: PriceLevelState = {
  value: 1,
}

export const priceLevelSlice = createSlice({
  name: 'priceLevel',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    reset: (state) => {
      state.value = initialState.value
    },
  },
})

export const { update, reset } = priceLevelSlice.actions

export function selectPriceLevel(state: AppState) {
  return state.priceLevel.value
}

export default priceLevelSlice.reducer
