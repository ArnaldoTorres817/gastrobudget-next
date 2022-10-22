import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { AppState } from '../store'

interface CategoryState {
  value: string
}

const initialState: CategoryState = {
  value: '',
}

export const categorySlice = createSlice({
  name: 'category',
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

export const { update, reset } = categorySlice.actions

export function selectCategory(state: AppState) {
  return state.category.value
}

export default categorySlice.reducer
