import type { FC, FormEvent } from 'react'
import CategoryDropdown from './CategoryDropdown'
import LocationAutocompleteInput from './LocationAutocompleteInput'
import PriceLevelPicker from './PriceLevelPicker'

const Form: FC = () => {
  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label htmlFor="category">Category</label>
      <CategoryDropdown />
      <label htmlFor="price-level">Price Level</label>
      <PriceLevelPicker />
      <label htmlFor="location">Location</label>
      <LocationAutocompleteInput />
    </form>
  )
}

export default Form
