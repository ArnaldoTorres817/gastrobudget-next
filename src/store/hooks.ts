import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { AppDispatch, AppState } from './store'
import { selectPriceLevel } from './slices/priceLevelSlice'
import { selectCategory } from './slices/categorySlice'
import { selectLocation } from './slices/locationSlice'

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const useFormData = () => {
  const category = useAppSelector(selectCategory)
  const priceLevel = useAppSelector(selectPriceLevel)
  const location = useAppSelector(selectLocation)

  return { category, priceLevel, location }
}
