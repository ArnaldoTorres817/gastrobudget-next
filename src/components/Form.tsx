import { useFormData } from '@/hooks/useFormData'
import { useLazyBusinessesSearchQuery } from '@/store/slices/apiSlice'
import CategoryDropdown from './CategoryDropdown'
import LocationAutocompleteInput from './LocationAutocompleteInput'
import PriceLevelRadioButtons from './PriceLevelRadioButtons'
import type { FC, FormEvent } from 'react'

const Form: FC = () => {
  const { category, priceLevel, location } = useFormData()
  const [trigger, result] = useLazyBusinessesSearchQuery()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    trigger({ category, priceLevel, location })
  }

  return (
    <form
      className="max-w-screen-lg mx-auto px-4 py-4 flex flex-col gap-3 items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="category">Category</label>
      <CategoryDropdown />
      <label htmlFor="price-level">Price Level</label>
      <PriceLevelRadioButtons />
      <label htmlFor="location">Location</label>
      <LocationAutocompleteInput />
      <button
        type="submit"
        className="w-fit px-3 py-2 bg-green-400 rounded"
        disabled={result.isFetching}
      >
        Search Restaurants
      </button>
    </form>
  )
}

export default Form
