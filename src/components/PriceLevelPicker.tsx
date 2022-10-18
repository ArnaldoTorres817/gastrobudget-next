import type { FC } from 'react'

const PriceLevelPicker: FC = () => {
  return (
    <fieldset className="flex gap-3">
      <div>
        <label className="mr-1" htmlFor="low">
          Low
        </label>
        <input type="radio" name="price-level" id="low" value={1} />
      </div>
      <div>
        <label className="mr-1" htmlFor="low">
          Medium
        </label>
        <input type="radio" name="price-level" id="Medium" value={2} />
      </div>
      <div>
        <label className="mr-1" htmlFor="low">
          High
        </label>
        <input type="radio" name="price-level" id="high" value={3} />
      </div>
      <div>
        <label className="mr-1" htmlFor="low">
          Highest
        </label>
        <input type="radio" name="price-level" id="highest" value={4} />
      </div>
    </fieldset>
  )
}

export default PriceLevelPicker
