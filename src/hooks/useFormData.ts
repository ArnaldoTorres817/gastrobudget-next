import { selectPriceLevel } from '@/store/slices/priceLevelSlice'
import { selectCategory } from '@/store/slices/categorySlice'
import { selectLocation } from '@/store/slices/locationSlice'
import { useAppSelector } from '@/store/hooks'

export const useFormData = () => {
  const category = useAppSelector(selectCategory)
  const priceLevel = useAppSelector(selectPriceLevel)
  const location = useAppSelector(selectLocation)

  return { category, priceLevel, location }
}
