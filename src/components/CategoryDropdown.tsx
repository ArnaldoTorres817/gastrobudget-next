import { FC } from 'react'

const CategoryDropdown: FC = () => {
  return (
    <select className="bg-white border py-2 px-3">
      <option disabled selected value="">
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
