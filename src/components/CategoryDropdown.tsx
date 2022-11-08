import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  selectCategory,
  update as updateCategory,
} from '@/store/slices/categorySlice'
import { ChangeEvent, FC } from 'react'

const CategoryDropdown: FC = () => {
  const category = useAppSelector(selectCategory)
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    dispatch(updateCategory(e.target.value))
  }

  return (
    <select
      value={category}
      required
      onChange={handleChange}
      className="w-full sm:w-1/2 bg-white border py-2 px-3 rounded"
    >
      <option disabled value="">
        -- Please select a category --
      </option>
      <option value="bakeries">Bakeries</option>
      <option value="beer_and_wine">Beer &amp; Wine</option>
      <option value="coffee">Coffee</option>
      <option value="desserts">Desserts</option>
      <option value="donuts">Donuts</option>
      <option value="foodtrucks">Food Trucks</option>
      <option value="gourmet">Gourmet</option>
      <option value="icecream">Icecream</option>
    </select>
  )
}

export default CategoryDropdown
