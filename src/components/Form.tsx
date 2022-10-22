import type { FC, FormEvent } from 'react'
import CategoryDropdown from './CategoryDropdown'
import LocationAutocompleteInput from './LocationAutocompleteInput'
import PriceLevelPicker from './PriceLevelPicker'

const Form: FC = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form
      className="max-w-screen-lg mx-auto px-4 py-3 flex flex-col gap-3 items-center"
      onSubmit={handleSubmit}
    >
      <label htmlFor="category">Category</label>
      <CategoryDropdown />
      <label htmlFor="price-level">Price Level</label>
      <PriceLevelPicker />
      <label htmlFor="location">Location</label>
      <LocationAutocompleteInput />
      <button type="submit" className="w-fit px-3 py-2 bg-green-400 rounded">
        Search Restaurants
      </button>
    </form>
  )
}

export default Form
