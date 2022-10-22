import { useAppDispatch, useAppSelector } from '@/store/hooks'
import {
  selectPriceLevel,
  update as updatePriceLevel,
} from '@/store/slices/priceLevelSlice'
import type { ChangeEvent, FC } from 'react'

enum PriceLevel {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
  HIGHEST = 4,
}

const PriceLevelRadioButtons: FC = () => {
  const priceLevel = useAppSelector(selectPriceLevel)
  const dispatch = useAppDispatch()

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    dispatch(updatePriceLevel(parseInt(e.target.value)))
  }

  return (
    <fieldset className="flex gap-3 accent-green-600">
      <div>
        <label className="mr-1" htmlFor="low">
          Low
        </label>
        <input
          type="radio"
          name="price-level"
          id="low"
          value={PriceLevel.LOW}
          checked={PriceLevel.LOW === priceLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="mr-1" htmlFor="medium">
          Medium
        </label>
        <input
          type="radio"
          name="price-level"
          id="medium"
          value={PriceLevel.MEDIUM}
          checked={PriceLevel.MEDIUM === priceLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="mr-1" htmlFor="high">
          High
        </label>
        <input
          type="radio"
          name="price-level"
          id="high"
          value={PriceLevel.HIGH}
          checked={PriceLevel.HIGH === priceLevel}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="mr-1" htmlFor="highest">
          Highest
        </label>
        <input
          type="radio"
          name="price-level"
          id="highest"
          value={PriceLevel.HIGHEST}
          checked={PriceLevel.HIGHEST === priceLevel}
          onChange={handleChange}
        />
      </div>
    </fieldset>
  )
}

export default PriceLevelRadioButtons
