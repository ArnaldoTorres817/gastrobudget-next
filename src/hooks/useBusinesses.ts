import { useAppSelector } from '@/store/hooks'
import {
  selectBusinesses,
  selectIsLoading,
  selectIsError,
} from '@/store/slices/businessesSlice'

export const useBusinesses = () => {
  const businesses = useAppSelector(selectBusinesses)
  const isLoading = useAppSelector(selectIsLoading)
  const isError = useAppSelector(selectIsError)

  return { businesses, isLoading, isError }
}
